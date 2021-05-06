import {playandPickWinner} from './functions';
import Player from './Player'
import ConsistentPlayer from './ConsistentPlayer'


describe("play and pick winner function", ()=>{
  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("America ", "rock");
    let player2: Player = new ConsistentPlayer("Germany ", "scissors");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player1);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Germany ", "rock");
    let player2: Player = new ConsistentPlayer("France ", "paper");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player2);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "rock");
    let player2: Player = new ConsistentPlayer("Villain ", "rock");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(null);
// console.log("winner: ",winner?.name)
  });

  test("player1 paper vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "paper");
    let player2: Player = new ConsistentPlayer("Villain ", "scissors");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player2);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "paper");
    let player2: Player = new ConsistentPlayer("Villain ", "rock");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player1);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "paper");
    let player2: Player = new ConsistentPlayer("Villain ", "paper");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(null);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "scissors");
    let player2: Player = new ConsistentPlayer("Villain ", "rock");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player2);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "scissors");
    let player2: Player = new ConsistentPlayer("Villain ", "paper");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(player1);
// console.log("winner: ",winner?.name)
  });

  test("player1 rock vs player2 scissors",()=>{
    let player1: Player = new ConsistentPlayer("Hero ", "scissors");
    let player2: Player = new ConsistentPlayer("Villain ", "scissors");
    let winner = playandPickWinner(player1, player2);
    expect(winner).toBe(null);
// console.log("winner: ",winner?.name)
  });


});