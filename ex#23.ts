// test 1
console.log("equality test with strings:", "apple"=== "apple");
// test 2
console.log("equality test with strings:", ("apple" as string )!= "orange");

console.log("lower case functioin test:" , "HELLO".toLowerCase() === "hello");

console.log("equality test with numbers:", 26 === 26);

console.log("equality test with numbers:", 26 as number != 35);

console.log("greater than test:" , 10 >5);

console.log("less than test:" , 5 <10);

console.log("greater than or equal to test:" , 10 >= 10);

console.log("less than or equal to test:" , 5 <= 10);

console.log("and operator test:" , 5===5 && 10  > 5);

console.log("or operator test:" , 5===5 || false);

const fruits :string[] = ['pear', 'grapes', 'guava'];

console.log('testing "apple" is not an array:' , !fruits.includes('apple'));