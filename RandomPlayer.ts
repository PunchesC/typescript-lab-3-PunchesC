import Player from './Player'

export default class RandomPlayer extends Player{
  constructor(name:string){
    super(name);
  }
pickSymbol():string{
  let symbols= ["rock","paper","scissors"]
  let randomSymbol= symbols[Math.floor(Math.random()*symbols.length)];
  console.log(randomSymbol);
   return randomSymbol;
}

}