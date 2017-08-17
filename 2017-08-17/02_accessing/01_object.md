# Object

Consists of properties: each **property** has **key** and **value**

* **key** is a string (or a number converted to a string)
* **value** is any type

Object **literal** notation enclosed in braces:

```js
var person = {
  firstName: 'Mark',
  lastName: 'Pedrotti',
  githubName: 'pedrottimark',
};
```

* What are the **keys**?
* What is the **value** of the property whose **key** is …?

Refer to property by either:

* **dot** notation, if the key could be the **name** of a variable

    ```js
    var fullName = person.firstName + ' ' + person.lastName;
    ```

* **bracket** notation, especially if the key is the **value** of a variable

    ```js
    var person = persons[id]; // person becomes value of property whose key is id
    ```

The value of a property that doesn’t exist isn’t an error, but `undefined`

You can make a **chain** to refer to “nested” items or properties (DOM node example)

Flexible: do not need to **declare** a structure

JSON = **JavaScript Object Notation**
* exchange data between app and server
* requires double quotation marks around keys
* does not allow functions as values

```js
var string = JSON.stringify(val);
var val = JSON.parse(string);
```

Property whose value is a function is known as a **method** (for example, `stringify` or `parse` above)
