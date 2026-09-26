import Choice from '../vo/Choice';
import RoundResult, { RESULT } from '../vo/RoundResult';

export default class GameManager {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  play(playerChoiceValue) {
    const playerChoice = new Choice(playerChoiceValue);
    const computerChoice = Choice.random();
    const result = new RoundResult(playerChoice, computerChoice);

    if (result.winner === RESULT.JUGADOR) {
      this.playerScore += 1;
    } else if (result.winner === RESULT.COMPUTADORA) {
      this.computerScore += 1;
    }

    return {
      playerChoice: playerChoice.value,
      computerChoice: computerChoice.value,
      winner: result.winner,
      playerScore: this.playerScore,
      computerScore: this.computerScore,
    };
  }
}
