# Ripple Client

This is a general purpose Ripple client in JavaScript.

## Directory structure

* `build/` Compiled files
* `src/` Source code
* `src/js/client` Client classes
* `src/js/entry` Entry points for the various client versions
* `src/js/util` Various static, stateless utility functions
* `tools/` Tools used in the build process

## Installation
1. Install [node.js and npm](http://nodejs.org/).

2. Install [Grunt](http://gruntjs.com/).

        $ sudo npm install -g grunt-cli
    
3. Install Ripple Client.
    
        $ git clone https://github.com/ripple/ripple-client ./ripple-client
        $ cd ripple-client
        $ npm install

## Build
Run the following command to build the client.    

    $ grunt

## Travis CI

Follow the build status and tests at http://travis-ci.org/ripple/ripple-client

## Testing Locally

Run the following command to run the tests once.

    ./node_modules/.bin/karma start test/karma.conf.js --single-run

Or run Karma in the background and listen to changes in /test

    ./node_modules/.bin/karma start test/karma.conf.js

## Bug tracker

Have a bug or a feature request? [Please create a new issue](https://ripplelabs.atlassian.net/browse/WC). Before opening any issue, please search for [existing issues](https://ripplelabs.atlassian.net/browse/WC-1193?jql=project%20%3D%20WC) and read the [Issue Guidelines](https://github.com/rippleFoundation/ripple-client/blob/develop/CONTRIBUTING.md), written by [Nicolas Gallagher](https://github.com/necolas/).

## Community

Keep track of development and community news.

* Read and subscribe to the [The Official Ripple Blog](https://ripple.com/blog/).
* Follow [@Ripple on Twitter](https://twitter.com/ripple).
* Like [@Ripplepay on Facebook](https://facebook.com/ripplepay).
* Subscribe to [@Ripple on Reddit](http://www.reddit.com/r/Ripple)
* Have a question that's not a feature request or bug report? Send a message to [info@ripple.com](mailto:info@ripple.com)
* Chat with ripplers in IRC. On the `irc.freenode.net` server, in the `#ripple` and `#ripple-dev` channel.

## More information

* https://ripple.com/wiki/Ripple_Client


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ripple/ripple-client/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

