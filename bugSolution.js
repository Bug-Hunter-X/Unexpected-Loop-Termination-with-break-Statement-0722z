function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    //Improved Condition to ensure the loop terminates only when the condition is met and not in the middle of the processing.
    if (i === 5 && conditionMet) {
      break; // Exit the loop when i is 5 and the condition is met
    }
  }
}

myFunction(); // This will print 0, 1, 2, 3, 4