import { playandPickWinner } from './functions';
import {villains} from './index'
import {hero} from './index'
import Player from './Player'
export function displayHeroes(playerArray:Player[]):void{
  for(let players of playerArray){
    console.log(`-${players.name}${players.winCount}wins`)
  }
}

displayHeroes(hero);

for(let villain of villains){
  console.log(`You are facing ${villain.name}`);
  console.log(`Who will you pick to batle for you?`);
  displayHeroes(hero);
  let heroChoice = prompt("Type a hero name: ");
  let myHero = hero.find((hero)=>{
   return hero.name === heroChoice;
  });
  if (myHero === undefined){
    console.log("NOT A VALID HERO NAME!!")
    break;
  }
  let winner = playandPickWinner(myHero, villain);
  if(winner === myHero){
    console.log("YOUR HERO WINS")
    myHero.winCount+=1;
  } else if(winner ===villain){
    console.log("YOUR HERO Lost")
    villain.winCount +=1;
  } else{
    console.log("TIE")
  }
}
console.log("GAME OVER")
displayHeroes(hero);
