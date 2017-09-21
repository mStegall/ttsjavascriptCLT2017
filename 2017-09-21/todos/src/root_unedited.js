'use strict';

/* eslint-env jquery */

var $ = require('jquery');
var renderTodos = require('./interface');

// https://learn.jquery.com/about-jquery/how-jquery-works/#launching-code-on-document-ready
$(function () {
  $('#root').append(renderTodos({
    visibilityFilter: 'all',
    todos: [
      {
        id: 0,
        text: 'Write a “fail-first” test',
        completed: true,
      },
      {
        id: 1,
        text: 'Write code to make the test pass',
        completed: false,
      },
      {
        id: 2,
        text: 'If a test fails after changes to code, decide is it regress or progress',
        completed: false,
      },
    ],
  }));
});
