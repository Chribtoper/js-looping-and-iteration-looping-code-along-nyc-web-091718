// Code your solutions in this file
function printBadges(badges){
  for(let i = 0; i<badges.length;i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`);
  }
  return badges;
}

function tailsNeverFails(){
  let i = 0;

  while ((Math.round(Math.random()) == 1)){
    i++;
  }
  return `You got ${i} tails in a row!`;
}
