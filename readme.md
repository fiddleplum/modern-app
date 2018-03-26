# Modern App

In the modern environment of npm, webpack, and so many other dependencies, getting a simple web application can be a pain. This is a nice template upon which to build your application.

## Depndencies

This base relies on these technologies:

* [git](https://git-scm.com)
* [node/npm](https://www.npmjs.com)
* [npm-shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
* [webpack](https://webpack.js.org)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## The File Structure

* `node_modules/` - where all of the modules produced from `npm install` reside
* `src/` - where all of your javascript code will go
  * `index.js` - the root of the application's javascript
* `www/` - where all of the html, css, images, and other assets go
  * `index.html` - the root of the application's html
  * `style.css` - the css style sheet for the application
  * `main.js` - the built version of your javascript files (only exists after building)
* `license.txt` - the MIT license
* `.gitignore` - the file that git uses to [exempt certain files](https://git-scm.com/docs/gitignore) from version control
* `npm-shrinkwrap.json` - the file that [sets the exact versions]() of the node modules
* `package.json` - the file that `npm` uses to download all of the dependencies and build the application
* `readme.md` - this file

## Setup

1. Make sure you have the latest `node/npm` (brew, apt-get, etc).
1. Populate every entry marked with `***` in your package.json file.
1. Run `npm install`.
1. Run `npm start`.
1. A browser will open with the web page. The console should say "Your application has initialized."

## Builds

You can run `npm run build` and `npm run build-production` to generate development and production builds of your application, respectively. The javascript file produced will be at `www/main.js`. You can get to your website by navigating in your browser to the `www/` folder. If you just see a listing, choose `index.html`.