interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  age: 12,
  gender: "male",
};

console.log(tom);
