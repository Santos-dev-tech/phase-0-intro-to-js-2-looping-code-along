// Code your solutions in this file
// writeCards() - returns an array of thank you messages
function writeCards(names, occasion) {
    return names.map(name => {
      return `Thank you, ${name}, for the wonderful ${occasion} gift!`;
    });
  }
  
  // countDown() - logs numbers starting from the given number down to 0
  function countDown(start) {
    for (let i = start; i >= 0; i--) {
      console.log(i);
    }
  }
  