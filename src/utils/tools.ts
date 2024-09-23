// let num1: number = 123;
// console.log(num1, "num1");
// // 二进制
// num1 = 0b011;
// console.log(num1, "num1");
// // 八进制
// num1 = 0o123;
// console.log(num1, "num1");
// // 十六进制
// num1 = 0x12b;

// console.log(num1, "num1");

// let str1: string = "abc";
// console.log(str1, "str1");

// let name1: string = `${str1} 我是str1`;
// console.log(name1);

// let str2: String = "我是包装类str";

// let bol1: boolean = true;
// bol1 = false;
// let bol2 = 25 > 20 ? true : false;
// console.log(bol1, bol2);

// let isNull: null = null;

// let isUndefind: undefined;
// console.log(isNull, isUndefind);

// // let arr = ["苹果", "西瓜", "葡萄"];
// // 1.泛型Array 2.数组加类型
// // let arr1: Array<number> = [1, 2, 3];
// // let arr2: string[] = ["abc", "cba", "nba"];

// // Symbol类型
// // let sym1: Symbol = Symbol("name");
// // let sym2: Symbol = Symbol("name");
// // console.log(sym1 === sym2);
// // let obj = {
// //   [sym1]: "张三",
// //   [sym2]: "李四",
// // };

// // console.log(obj);

// // any类型 什么类型的参数都可以接
// // let any1: any = 1234;
// // any1 = "abc";
// // any1 = ["12", "dad", 111];

// // unknown类型 什么都可以接类型any

// // let value: unknown;
// // value = 1;
// // value = true;
// // value = "ab";

// // if (typeof value == "string") {
// //   console.log(value.split(""));
// // }

// // let v: any = 123;
// // let v1: number = v;

// // never 类型 永远不会发生
// // 1.抛异常
// // function throwMessage(msg: string): never {
// //   throw new Error(msg);
// // }

// // throwMessage("我是never");

// // 2.死循环
// // function infiniteLoop(): never {
// //   while (true) {
// //     console.log("我是死循环");
// //   }
// // }
// // throwMessage(111);

// //3. 封装工具函数

// function handleMessage(message: string | number | boolean) {
//   switch (typeof message) {
//     case "string":
//       console.log(message.toUpperCase());
//       break;
//     case "number":
//       console.log(message.toFixed(2));
//       break;
//     case "boolean":
//       console.log(message);
//       break;
//     default:
//       const check: never = message;
//       console.log(check);
//   }
// }

// // handleMessage("abc");
// // handleMessage(123.22);
// // handleMessage(true);

// // 元组 tuple 类似于数组 但参数类型需要对应
// let tuple1: [number, string] = [1, "abc"];
// let tuple2: [number, string] = [100, "true"];

// console.log(tuple1[0]);

// // export {};

// object Object
// let obj: object = {
//   name: "李四",
// };

// console.log(obj.name);

// type(类型) interface(接口)

// type UserType = {
//   name: string;
//   age: number;
// };

// interface UserInterface {
//   name: string;
//   age: number;
// }

// let obj1: UserType = {
//   name: "张三",
//   age: 18,
// };

// console.log(obj1.name);
// console.log(obj1.age);

// let obj2: UserInterface = {
//   name: "李四",
//   age: 20,
// };
// console.log(obj2.name, obj2.age);

// type MyString = string | number | boolean;

// let str: MyString = 111;
// let str1: MyString = "111";
// let str2: MyString = true;
// let str3: MyString = [];
// console.log(str);

//  | 联合类型

// function test(a: MyString) {
//   // 如果是联合类型需要考虑类型缩小 typeof 判断类型
//   if (typeof a === "string") {
//     console.log(a.toLocaleUpperCase());
//   }

//   if (typeof a === "number") {
//     console.log(a.toFixed(2));
//   }
// }

// interface UserType {
//   name: string;
//   age: number;
//   say: () => void;
// }

// const user: UserType = {
//   name: "abc",
//   age: 19,
//   say() {
//     console.log("hello");
//   },
// };

// type a = {
//   name: string;
// };

// type a = {
//   age: number;
// };

// interface a {
//   name: string;
// }

// interface a {
//   age: number;
//   sex: string;
// }

// let user: a = {
//   age: 19,
//   name: "age",
//   sex: "男",
// };

// interface Ikun extends IPerson {
//   say: () => void;
// }

// const user: Ikun = {
//   name: "张三",
//   age: 18,
//   say() {
//     console.log("hello");
//   },
// };

// interface IPerson {
//   name: string;
//   age: number;
//   say: () => void;
// }

// class Person implements IPerson {
//   name: string;
//   age: number;
//   say() {
//     console.log(this.age);
//   }
// }

// 可选类型 ?
// type UserType = {
//   name: string;
//   age?: number;
// };

// const user: UserType = {
//   name: "张三",
// };

export {};
