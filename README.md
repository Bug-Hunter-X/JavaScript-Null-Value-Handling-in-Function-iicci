# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript: not properly handling null or undefined values before performing operations that would throw errors if they are encountered.  The example function `foo` adds two values, but returns `null` if either input is `null`. This prevents a runtime error.  The provided solution shows this safe handling.

## How to Use

1. Clone this repository.
2. Open `bug.js` to see the example of code that doesn't handle null correctly, and the `bugSolution.js` shows how to safely handle it.
3. Run `bug.js` in a JavaScript environment (like Node.js) to see the potential error and then run `bugSolution.js` to see the fixed version.