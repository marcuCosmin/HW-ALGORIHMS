var count = 0;

function cc(card) {
  // Only change code below this line

  let cards1 = [2, 3 ,4 ,5 ,6];
  let cards2 = [10, 'J', 'Q', 'K', 'A'];

  if (cards1.includes(card)) {

    count += 1;
  }
  
  if (cards2.includes(card)) {
    
    count -= 1;
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');