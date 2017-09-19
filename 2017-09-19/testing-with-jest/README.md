# Lesson 11: Delightful JavaScript Testing with Jest

[Jest](http://facebook.github.io/jest/)

## Manual testing

1. In terminal, change directory to your `2017-09-19/testing-with-jest`

2. Copy the `src/state_incomplete.js` file to `src/state.js`

3. Open the `public/todos.html` file in a Web browse.

4. Verify that clicking a todo item doesn’t work yet.

## Install development dependencies for testing

[Getting Started](http://facebook.github.io/jest/docs/en/getting-started.html)

1. Copy the `src/__tests__/state_incomplete.test.js` file to `src/__tests__/state.test.js`

2. In terminal: `npm init`

    * For description, type **Lesson 11 Testing with Jest**
    * For test command, type **jest**

3. See what it in the `package.json` file

4. In terminal: `npm install --save-dev jest`

5. See what it in the `package.json` file

6. In terminal: `npm run test`

Given changes to code files, Jest automatically runs relevant test files:

* any `*.test.js` files
* any `*.spec.js` files
* any `*.js` in any `__tests__` directory

## Understand test structure and assertions

[Using Matchers](http://facebook.github.io/jest/docs/en/using-matchers.html#content)
[Expect](http://facebook.github.io/jest/docs/en/expect.html#content)

In the `state.test.js` file:

1. Notice the structure:

    * It is similar to Jasmine or Mocha: `describe('todos', function () { … });`
    * It contains (or the test module could require) some realistic test data
    * It can contain subdivisions `describe('assertions', function () { … });`

2. Read an individual test:

    * If you can, describe behavior: `it('does something', function () { … });`
    * Otherwise, `test('descriptive phrase', function () { … });`

3. A test contains an assertion about a **received** and **expected** value:

    * `expect(received).toBe(expected);` is **strict equality** like `===`
    * `expect(received).toEqual(expected);` matches **equivalent** values
    * `expect(received).toMatchObject(expected);` matches a **subset** of properties

## Test-driven Development (also known as TDD)

Apply it as much as you can. Argue about it as little as you can :)

1. Write a “fail-first” test
2. Write code to make the test pass
3. If a test fails after changes to code, decide is it **regress** or **progress**

## Challenge 1

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test fail
3. In `src/state.js` write a statement to implement the feature in the `toggleTodo` method
4. In terminal: `npm run test` to see the test pass
5. Refresh the `public/todos.html` file in a Web browser to see the feature work correctly

## Challenge 2

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test pass

## Challenge 3

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test fail
3. In `src/state.js` write a statement to implement the feature in the `addTodo` method
4. In terminal: `npm run test` to see the test pass
5. Refresh the `public/todos.html` file in a Web browser to see the feature work correctly

## Challenge 4

1. In `src/__tests__/state.test.js` complete the assertion and remove the comments around the test
2. In terminal: `npm run test` to see the test pass

## Homework

Use the **Search** box at the upper right of the [Jest](http://facebook.github.io/jest/) Web site to find answers:

* Which **assertion** tests that a function throws an error when it is called?
* Which command line interface **option** casuse Jest to watch files for changes and rerun tests related to changed files?
* How can you **convert** from another testing framework to Jest?
