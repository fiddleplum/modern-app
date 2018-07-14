# Modern App

In the modern JavaScript environment of npm, webpack, and so many other dependencies, creating a simple web application can be a pain. This is a nice template to start you off well.

## Dependencies

This base relies on these technologies:

* [git](https://git-scm.com)
* [node/npm](https://www.npmjs.com)
* [npm-shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
* [webpack](https://webpack.js.org)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [eslint](https://eslint.org)

## The File Structure

* `node_modules/` - where all of the modules produced from `npm install` reside
* `src/` - where all of your javascript code will go
  * `index.js` - the root of the application's javascript
* `dist/` - where your application will go after it has been built (all www/ files are copied in here after a build)
  * `index.js` - the built version of your javascript files (only exists after building)
* `www/` - where all of the html, css, images, and other assets go
  * `index.html` - the root of the application's html
  * `style.css` - the css style sheet for the application
* `.eslintrc` - the ES linting file to ensure that your code is formatted correctly
* `.gitignore` - the file that git uses to exempt certain files from version control
* `LICENSE.txt` - the MIT license
* `README.md` - this file
* `package.json` - the file that `npm` uses to download all of the dependencies and build the application

## Setup

1. Make sure you have the latest `node/npm` (brew, apt-get, etc).
1. Populate every entry marked with `{{...}}` in your package.json file.
1. Run `npm install` or `npm i` to install the node modules.
1. Run `npm start` to start a local http server.
1. A browser will open with the web page. The console should say "The application has been initialized".

Note that when running `npm start`, any changes to your javascript files in `src/` will cause a rebuild of the `dist/index.js` file and a reload of the webpage. You can configure this in the package.json `scripts.start` command line options.

## Builds

You can run `npm run build` and `npm run build-production` to generate development and production builds of your application, respectively. The javascript file produced will be at `dist/index.js`, and all of your files in `www/` will be copied into the `dist/` folder. You can get to your website by navigating in your browser to the `dist/` folder. If you just see a file listing, choose `index.html`. Note that using `file://` doesn't work well because AJAX requests trigger CORS errors, so you'll need an actual HTTP server.

## Managing Your Node Modules

You can use `npm shrinkwrap` so when you run `npm install` you may not have the latest versions of your dependencies, and you'll want to update them. To see which modules are out of date you can run `npm outdated`. Then for each outdated module you can run `npm update <module name>`. At the end, after you have verified everything works well, you can run `npm shrinkwrap` to shrinkwrap the updated versions.

When you add new modules via `npm install <module name>`, you should run `npm shrinkwrap` again to shrinkwrap any new modules that have been downloaded.
