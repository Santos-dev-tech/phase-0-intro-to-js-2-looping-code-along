
function writeCards(names, occasion) {
    return names.map(name => {
      return `Thank you, ${name}, for the wonderful ${occasion} gift!`;
    });
  }
  
  
  function countDown(start) {
    for (let i = start; i >= 0; i--) {
      console.log(i);
    }
  }
  