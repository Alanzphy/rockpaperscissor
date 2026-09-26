import React, { useRef, useState } from 'react';
import GameModel, { RESULT } from './src/models/GameModel';
import GameView from './src/views/GameView';

export default function App() {
  const gameModel = useRef(new GameModel()).current;

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [resultText, setResultText] = useState('R: -');

  const handleSelect = (choice) => {
    const { winner, playerScore, computerScore } = gameModel.play(choice);

    setSelectedChoice(choice);
    setPlayerScore(playerScore);
    setComputerScore(computerScore);
    setResultText(`R: ${winner === RESULT.EMPATE ? 'EMPATE' : winner}`);
  };

  return (
    <GameView
      playerScore={playerScore}
      computerScore={computerScore}
      selectedChoice={selectedChoice}
      resultText={resultText}
      onSelect={handleSelect}
    />
  );
}
