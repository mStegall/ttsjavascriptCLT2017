// Given a string, return “escaped” string that is safe to include in HTML.
// Uses regular expressions, which are outside the scope of this course.
function escapeHTML(string) {
  return string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var untrusted = 'I am not <img src="nowhere" onerror="alert(\'gotcha\')"> nice.';

console.log('  escaped:', escapeHTML(untrusted));
console.log('unescaped:', untrusted);
