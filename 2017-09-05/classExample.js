function MyClass(myProp){
  this.myProp = myProp;
  this.goodBye = function(){
    console.log("Don't go yet!")
  }
}

MyClass.prototype.hello = function(){
  console.log(this.myProp);
}

MyClass.goodBye = function(){
  console.log("goodBye")
}

// MyClass.goodBye()

// MyClass.prototype.toString = function(){
//   return "NO!"
// }

var obj = new MyClass("hello");

console.log(obj)

// obj.goodBye()

// obj.hello()

// Array.map(x => x + 1)

// [1,2,3].map(x => x + 1);