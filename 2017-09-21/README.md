# ESLint and webpack with review of Jest

In the `2017-09-19/testing-with-jest` directory, do either of the following:

* In terminal: `rm -rf node_modules`
* In Explorer or Finder: delete the `node_modules` directory

1. In terminal, change directory to the `todos` subdirectory of the `2017-09-21` directory

2. In Explorer or Finder or terminal, copy the following files that you will edit:

* Copy `package_unedited.json` as `package.json`
* Copy `webpack_unedited.config.js` as `webpack.config.js`
* Copy `public/todos_unedited.css` as `public/todos.css`
* Copy `public/todos_unedited.html` as `public/todos.html`
* Copy `src/root_unedited.js` as `src/root.js`
* Copy `src/state_unedited.js` as `src/state.js`

3. See what it in the `package.json` file

4. In terminal: `npm install`

## ESLint

[Integrations: Editors](http://eslint.org/docs/user-guide/integrations#editors)
[Getting Started with ESLint](http://eslint.org/docs/user-guide/getting-started)
[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
[Rules](http://eslint.org/docs/rules/)

In `package.json` see the `eslintConfig` property:

* [parserOptions](http://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  * `"ecmaVersion": 6` because template literals
  * `"sourceType": "module"` because CommonJS modules

* default parser because standard ECMAScript

* [env](http://eslint.org/docs/user-guide/configuring#specifying-environments)
  * `"node": true` for `module` and `require`
  * `"jest": true` for `describe` and `it` and `expect`
  * `/* eslint-env jquery */` for `$`
  * `/* eslint-env browser */` if we used `document` instead

* [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
  * `"extends": "eslint:recommended"`

* [rules](http://eslint.org/docs/user-guide/configuring#configuring-rules)
  * `"eol-last": "error"` to report errors
  * `"no-console": "off"` to turn off a recommended rule
  * `"indent": ["error", 2]` some rules have options

In addition to editor integration, see the `scripts` property in `package.json`

  * To run lint at any time: `npm run lint`

## webpack

[Webpack from First Principles](https://youtu.be/WQue1AN93YU)

* [Getting Started](https://webpack.js.org/guides/get-started/)
* [Concepts](https://webpack.js.org/concepts/)
  * [Entry Points](https://webpack.js.org/concepts/entry-points/)
  * [Output](https://webpack.js.org/concepts/output/)
  * [Loaders](https://webpack.js.org/concepts/loaders/)
  * [Plugins](https://webpack.js.org/concepts/plugins/)

1. Let’s review together the changes to make Todos application use CommonJS modules.
2. `npm install --save jquery`
3. Look at `webpack.config.js`
  * `entry`
  * `output`
4. Look at `build` script in `package.json` and then `npm run build`
5. See that webpack created `build/bundle.js`
6. See that the `script` in `todos.html` refers to `../build/bundle.js` Review: `..` why?

## Challenge 1: Test the application

## Challenge 1-1

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test fail
3. In `src/state.js` write a statement to implement the feature in the `toggleTodo` method
4. In terminal: `npm run test` to see the test pass
5. In terminal: `npm run build` to rebuild the JavaScript bundle
6. Refresh the `public/todos.html` file in a Web browser to see the feature work correctly

## Challenge 1-2

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test pass

## Challenge 1-3

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test fail
3. In `src/state.js` write a statement to implement the feature in the `addTodo` method
4. In terminal: `npm run test` to see the test pass
5. In terminal: `npm run build` to rebuild the JavaScript bundle
6. Refresh the `public/todos.html` file in a Web browser to see the feature work correctly

## Challenge 1-4

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test pass

## Challenge 2: Bundle the styles

1. Add `require('../todos.css')` in `/src/root.js`
2. Install loaders

   ```sh
   npm install --save-dev style-loader css-loader
   ```

3. Add the following to `webpack.config.js`

   ```js
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           {loader: 'style-loader'},
           {loader: 'css-loader'},
         ],
       }
     ]
   }
   ```

4. Delete the `link` element to the stylesheet from `todos.html`

## Challenge 3: Bundle an image

1. Add an image of your choice to `2017-09-21/todos/public` directory.
2. Refer to it in the `todos.css` file
3. Add a rule for images to your webpack configuration
4. Rebuild the application bundle

## Homework due 2017-09-26

Listen to the [Webpack from First Principles](https://youtu.be/WQue1AN93YU) video again

Become familiar with valuable learning resources for ECMAScript 2015, also known as ES2015 or ES6:

* Find the description of **let** and **const** at [Learn ES2015](https://babeljs.io/learn-es2015/) page on Babel web site
* Find an **array method** that is new in ES2015 starting at [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) page on Mozilla Developer Network web site
* Find the example code for **Arrow Functions and Arrays** at the [Free To Read Online](https://leanpub.com/understandinges6/read) version of Understanding ECMAScript6 by Nicholas C. Zakas
* Optional: Skim the article about **Using ES modules natively in Node.js** at [2ality – JavaScript and more](http://2ality.com/) blog by Dr. Axel Rauschmayer
