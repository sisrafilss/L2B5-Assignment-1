# Understanding Type Inference, Interfaces vs Types, and Union & Intersection Types in TypeScript

TypeScript is a superset of JavaScript where types are strictly checked and prevent us from falling into unexpected problems at runtime. In this blog post, we will discuss the following topics, including some easy examples.

- Type Inference (based on question 5)
- Interface vs Type and (based on question 1)
- Union and Intersection Type in TypeScript (based on question 7)

## Type Inference

When we declare a variable, function, array, or object, we can explicitly declare its type. But in some cases, if we forget to declare the type, TypeScript gives it a type implicitly. It is called Type Inference. See the example below where we don’t declare the type, but TypeScript identifies it ->

```javascript
 const x = 'Aktarul',
    const y = 5;
    const add = (num1: number, num2: number): number => {
        return num1 + num2;
    }
    add(x, y); // will through an error because TypeScript smartly identify the type of x, and y, x: string and y: number.
```

In the above example typescript smartly identify the ‘x’ as string, and ‘y’ as number. It is called Type Inference.

Type Inference helps us to type less code but be strict about their types. It is an advantage. But sometimes it createsa problem for complex data like array of objects. So it is good practice to always explicitly declare the types.

## Type vs Interface

Both type and interface are used to declare the type. It is widely used. Some key differences between them are discussed in the following with examples.

The syntax of declaring a type using the type keyword is like declaring an object in JavaScript; on the other hand, declaring a type using interface is like declaring a class.

```javascript
//   type
type TUser = {
  name: string,
  age: number,
};
// interface
interface IUser {
  name: string;
  age: number;
}
```

We can declare the type of primitive data using type, but we can’t use interface. For example ->
We can also declare the type of non-primitive data, like objects and arrays, using type aliases. See the example below ->

```javascript
// declaring type of object
type City = string;
const city: City = "Khulna";
```

We can declare an intersection type using both type and interface, but interface uses a special keyword ‘extends’ to do that. See the example below-

```javascript
//   type
type TUser = {
  name: string,
  age: number,
};
type TAdmin = TUser & { role: string };
// interface
interface User {
  name: string;
  age: 22;
}
interface Admin extends User {
  role: string;
}
```

### Which one should we use?

We can do the same thing by using both things, it mainly depends on personal preferences. But generally, Interface is used for Object and type for rest of the places like Array, and primitive data.

## Union and Intersection Types

In TypeScript, Union type is like logical or operator and Intersection is like logical and operator in JavaScript. Union type is denoted using single bar ‘|’ and intersection uses single and operator ‘&’.
Union type is used when one of the value is correct whitin multiple value. For example in the below example, id can either be number type or string type.

```javascript
function printId(id: number | string) {
    console.log("ID:", id);
  }
  printId(101);
  printId("abc123");
}
```

On the other hand, both of the value should be true for intersection type. See the example below where TAdmin type will have the name, age, as well as the role property additional which we achieved using intersection type.. ->

```javascript
type TUser = {
  name: string,
  age: number,
};
type TAdmin = TUser & { role: string };
```
