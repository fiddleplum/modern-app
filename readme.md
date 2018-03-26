# Modern App

In the modern JavaScript environment of npm, webpack, and so many other dependencies, creating a simple web application can be a pain. This is a nice template to start you off well.

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
* `.gitignore` - the file that git uses to exempt certain files from version control
* `npm-shrinkwrap.json` - the file that sets the exact versions of the node modules
* `package.json` - the file that `npm` uses to download all of the dependencies and build the application
* `readme.md` - this file

## Setup

1. Make sure you have the latest `node/npm` (brew, apt-get, etc).
1. Populate every entry marked with `***` in your package.json file.
1. Run `npm install`.
1. Run `npm start`.
1. A browser will open with the web page. The console should say "Your application has initialized."

## Builds

You can run `npm run build` and `npm run build-production` to generate development and production builds of your application, respectively. The javascript file produced will be at `www/main.js`. You can get to your website by navigating in your browser to the `www/` folder. If you just see a file listing, choose `index.html`.

## Managing Your Node Modules

This uses `npm shrinkwrap` so when you run `npm install` you may not have the latest versions of your dependencies, and you'll want to update them. To see which modules are out of date you can run `npm outdated`. Then for each outdated module you can run `npm update <module name>`. At the end, after you have verified everything works well, you can run `npm shrinkwrap` to shrinkwrap the updated versions.

When you add new modules via `npm install <module name>`, you should run `npm shrinkwrap` again to shrinkwrap any new modules that have been downloaded.