/**
 * Trust profile
 *
 * This is the "Trust" profile implementation
 */

var module = angular.module('integrationTrust', ['txQueue','keychain']);

// TODO Sign sent data
module.service('rpTrustProfile', ['$rootScope', 'rpNetwork', 'rpTxQueue', 'rpKeychain', 'rpId',
  function($scope, network, txQueue, keychain, id)
{
  this.trustProfile = function(manifest) {
    return {
      grantNeccessaryTrusts: function() {
        manifest.lines.forEach(function(line){
          // Is there an existing trust line?
          if(existingTrustLine = $scope.lines[line.issuer + line.currency.toUpperCase()]) {
            // Is the trust limit enough?
            if(existingTrustLine.limit.to_number() >= line.amount)
              // We're good with the existing trust line
              return;
          }

          // Ok, looks like we need to set a trust line
          var tx = network.remote.transaction();
          tx.rippleLineSet(id.account, line.amount + '/' + line.currency + '/' + line.issuer);
          tx.setFlags('NoRipple');

          // txQueue please set the trust line asap.
          txQueue.addTransaction(tx);
        });

        if('function' == typeof callback) callback();
      }
    }
  };

  this.fromManifest = function (manifest) {
    return new this.trustProfile(manifest);
  }
}]);