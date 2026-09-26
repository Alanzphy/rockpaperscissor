import { useRef, useState } from 'react';
import GameManager from '../models/managers/GameManager';
import { RESULT } from '../models/vo/RoundResult';

export default function useGame() {
  const gameManager = useRef(new GameManager()).current;

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [resultText, setResultText] = useState('R: -');

  const handleSelect = (choice) => {
    const { winner, playerScore, computerScore } = gameManager.play(choice);

    setSelectedChoice(choice);
    setPlayerScore(playerScore);
    setComputerScore(computerScore);
    setResultText(`R: ${winner === RESULT.EMPATE ? 'EMPATE' : winner}`);
  };

  return { playerScore, computerScore, selectedChoice, resultText, handleSelect };
}
