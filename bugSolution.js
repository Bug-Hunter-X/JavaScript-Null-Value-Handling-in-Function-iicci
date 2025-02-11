function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator
  const aValue = a ?? 0;  
  const bValue = b ?? 0;
  return aValue + bValue; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); //Output:2
console.log(foo(1, undefined)); //Output:1
console.log(foo(undefined, undefined));//Output 0