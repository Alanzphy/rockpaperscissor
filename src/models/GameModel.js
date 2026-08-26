export const CHOICES = {
  PIEDRA: 'PIEDRA',
  PAPEL: 'PAPEL',
  TIJERAS: 'TIJERAS',
};

const BEATS = {
  [CHOICES.PIEDRA]: CHOICES.TIJERAS,
  [CHOICES.PAPEL]: CHOICES.PIEDRA,
  [CHOICES.TIJERAS]: CHOICES.PAPEL,
};

export const RESULT = {
  JUGADOR: 'JUGADOR',
  COMPUTADORA: 'COMPUTADORA',
  EMPATE: 'EMPATE',
};

export default class GameModel {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  getRandomChoice() {
    const values = Object.values(CHOICES);
    return values[Math.floor(Math.random() * values.length)];
  }

  play(playerChoice) {
    const computerChoice = this.getRandomChoice();
    const winner = this.getWinner(playerChoice, computerChoice);

    if (winner === RESULT.JUGADOR) {
      this.playerScore += 1;
    } else if (winner === RESULT.COMPUTADORA) {
      this.computerScore += 1;
    }

    return {
      playerChoice,
      computerChoice,
      winner,
      playerScore: this.playerScore,
      computerScore: this.computerScore,
    };
  }

  getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return RESULT.EMPATE;
    return BEATS[playerChoice] === computerChoice ? RESULT.JUGADOR : RESULT.COMPUTADORA;
  }
}
