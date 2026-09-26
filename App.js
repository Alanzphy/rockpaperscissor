import React from 'react';
import useGame from './src/hooks/useGame';
import GameView from './src/views/GameView';

export default function App() {
  const { playerScore, computerScore, selectedChoice, resultText, handleSelect } = useGame();

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
