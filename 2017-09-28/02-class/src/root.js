/* eslint-env browser, jquery */

'use strict';

var $ = require('jquery');
var renderTodos = require('./interface');

// https://learn.jquery.com/about-jquery/how-jquery-works/#launching-code-on-document-ready
$(() => {
  $('#root').append(renderTodos({
    visibilityFilter: 'all',
    todos: [
      {
        id: 0,
        text: 'Write less, do more',
        completed: true,
      },
      {
        id: 1,
        text: 'Repeat generic patterns',
        completed: false,
      },
      {
        id: 2,
        text: 'See specific details',
        completed: false,
      },
    ],
  }));
});
