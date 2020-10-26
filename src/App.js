import React, { useState } from 'react';
import IntroScreen from './components/IntroPage/IntroScreen';
import GameScreen from './components/GamePage/GameScreen';
import ShowGame from './contexts/ShowGame';
import './App.css';

const words = [
  "illusion","temple","addicted","tolerant","sweat","store","convention","relationship","diplomat","fresh","enter","afford","culture","harass","undress","general","epicalyx","constitution","cafe","will","protect","state","eternal","glide","collect","hospital","remunerate","pepper","nationalist","valid","stop","mask","art","combine","free","slave","crude","penalty","machinery","command","countryside","access","smell","obscure","grant","glue","glove","define","offspring","safety",
  "sketch","serve","short","so","season","satisfaction","sulphur","sacrifice","siege","selection","sail","suggest","screen","scratch","spill","shop","scandal","sea","silence","solo","slump","session","security","stun","separate","sausage","sugar","suffer","sensation","shower","stereotype","stick","slogan","slice","stamp","sharp","sheep","sign","seat","secretion","suite","scatter","spread","sound","sell","small","sector","slot","school","software"
];

function App() {

  const[enableStartButton, setEnableStartButton] = useState(false);
  const[showGame, setShowGame] = useState(false);
  const[currentWord, setCurrentWord] = useState("");
  const[difficulty, setDifficulty] = useState(null);
  const[timer, setTimer] = useState(-40);

  const providerValues = {
    setShowGame, enableStartButton, setEnableStartButton, words, currentWord, setCurrentWord, timer, setTimer,
    difficulty, setDifficulty
  }

  return (
    <div className="main-container">
      <ShowGame.Provider value = {providerValues} >
        {
          showGame ? <GameScreen /> :<IntroScreen />
        }
      </ShowGame.Provider>
    </div>
  );
  
}

export default App;
