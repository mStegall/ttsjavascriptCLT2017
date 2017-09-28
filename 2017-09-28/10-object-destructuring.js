(function () {
  // Put together at left of =
  // with object dot notation
  const point = {};
  point.x =  1 /  2;
  point.y = 29 / 63;

  // Take apart at right of =
  // with object dot notation
  const x = point.x; //  1 /  2
  const y = point.y; // 29 / 63
  console.log('object dot notation: ', x, y);
}());

(function () {
  // Put together at right of =
  // with object literal notation
  const point = {
    x:  1 /  2,
    y: 29 / 63,
  };

  // Take apart at left of =
  // with object destructuring
  const {
    x,              //  1 /  2
    y,              // 29 / 63
  } = point;
  console.log('object destructuring:', x, y);
}());
