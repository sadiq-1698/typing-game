import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroPage/IntroScreen';
import GameScreen from './components/GamePage/GameScreen';
import './App.css';

const words = [
  "illusion","temple","addicted","tolerant","sweat","store","convention","relationship","diplomat","fresh","enter","afford","culture","harass","undress","general","epicalyx","constitution","cafe","will","protect","state","eternal","glide","collect","hospital","remunerate","pepper","nationalist","valid","stop","mask","art","combine","free","slave","crude","penalty","machinery","command","countryside","access","smell","obscure","grant","glue","glove","define","offspring","safety",
  "sketch","serve","short","so","season","satisfaction","sulphur","sacrifice","siege","selection","sail","suggest","screen","scratch","spill","shop","scandal","sea","silence","solo","slump","session","security","stun","separate","sausage","sugar","suffer","sensation","shower","stereotype","stick","slogan","slice","stamp","sharp","sheep","sign","seat","secretion","suite","scatter","spread","sound","sell","small","sector","slot","school","software"
];

function App() {

  // const HARD = 1;
  // const MEDIUM = 2;
  // const EASY = 3;

  // const[word, setWord] = useState("");
  // const[score, setScore] = useState(0);
  // const[difficulty, setDifficulty] = useState(EASY);
  // const[timer, setTimer] = useState(0);

  // useEffect(() => {
  //   const counter = setTimeout(() => setTimer((prev) => prev - 1), 1000);
  //   return () => clearTimeout(counter);
  // }, [timer]);

  return (
    <div className="main-container">
        <IntroScreen />
        {/* <GameScreen /> */}
    </div>
  );

  
  
  
  
  
  
  
  // {
    /* <h1>{word}</h1>
        <div className="outer-box">
          <div className="fill-color" style={{
            width: `${((50 + timer) / 50 * 100)}%`
          }}>
          </div>
        </div>
        <h1 style={{color:"red"}}>
          {
            timer <= 0 ? 'You lost' : ""
          }
        </h1>
        <input 
          type="text"
          placeholder="type here"
          onChange={(e) => {
            onWordMatch(e);
          }}
        />
        <button onClick={chooseRandomWord}>Generate random word</button>
        <h1>Score: { score }</h1>
        <h1>Time left : {timer}{
        } seconds</h1> */
      // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function chooseRandomWord(){
  //   let randomWord = words[Math.floor(Math.random() * words.length)];
  //   setWord(randomWord);
  //   return randomWord;
  // }

  // function updateScore(){
  //   setScore((prevScore) => prevScore + 1);
  // }

  // function onWordMatch(e){
  //   if(e.target.value.toLowerCase() === word){
  //     e.target.value="";
  //     updateScore();
  //     updateTimer();
  //     chooseRandomWord();
  //   }
  // }

  // function chooseDifficulty(e){
  //   if(e.target.value === 'easy'){
  //     setDifficulty(EASY);
  //   }else if(e.target.value === 'medium'){
  //     setDifficulty(MEDIUM);
  //   }else{
  //     setDifficulty(HARD);
  //   }
  // }

  // function updateTimer(){
  //   if(difficulty === EASY){
  //     setTimer((prevTime) => prevTime + EASY);
  //   }else if(difficulty === MEDIUM){
  //     setTimer((prevTime) => prevTime + MEDIUM);
  //   }else{
  //     setTimer((prevTime) => prevTime + HARD);
  //   }
  // }

}


export default App;
