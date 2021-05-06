import configPrompt from 'prompt-sync';
import Player from './Player'
import ConsistentPlayer from './ConsistentPlayer'
import { playandPickWinner } from './functions';
import RandomPlayer from './RandomPlayer'
export function displayHeroes(playerArray:Player[]):void{
  for(let players of playerArray){
    console.log(`-${players.name} ${players.winCount} wins`)
  }
}
// prompt is a function to get user input.
const prompt = configPrompt({sigint: true});

// let hero: Player = new ConsistentPlayer("Grant ", "rock")
// let villain: Player = new ConsistentPlayer("Bane ", "scissors")
// // console.log(hero.pickSymbol());
// // console.log(villain.pickSymbol());

// let winner = playandPickWinner(hero, villain);
// // console.log("winner: ",winner)

// let color = prompt("Enter a color: ")
// console.log("You typed "+ color);

export let villains:Player[]= [
  new RandomPlayer("Billy"),
  new ConsistentPlayer("Jill","scissors"),
  new ConsistentPlayer("Alen","rock"),
  new RandomPlayer("Jamie"),
  new ConsistentPlayer("Hitler","paper"),
  new RandomPlayer("Tammy")

];

export let hero:Player[]= [
  new RandomPlayer("Curtis"),
  new ConsistentPlayer("Saniah","rock"),
  new ConsistentPlayer("Katie","scissors"),
  new ConsistentPlayer("Anthony","paper")
 

];

displayHeroes(hero);

for(let villain of villains){
  console.log(`You are facing ${villain.name}`);
  console.log(`Who will you pick to battle for you?`);
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