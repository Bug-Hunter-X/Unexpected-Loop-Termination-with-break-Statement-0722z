# Unexpected Loop Termination with break Statement

This repository demonstrates a common JavaScript error involving the unexpected termination of a loop using the `break` statement. The provided code contains a `while` loop that iterates until the counter variable `i` reaches 10. However, a `break` statement is used within a conditional check where `i` is equal to 5. This causes the loop to exit prematurely, resulting in the loop not iterating through all intended values.

## Code Description:
The `bug.js` file shows the flawed code, which prematurely breaks out of the loop. The `bugSolution.js` demonstrates the corrected version, demonstrating appropriate use of `break` with refined conditions for improved code clarity and proper loop execution.