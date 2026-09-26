export const RESULT = {
  JUGADOR: 'JUGADOR',
  COMPUTADORA: 'COMPUTADORA',
  EMPATE: 'EMPATE',
};

export default class RoundResult {
  constructor(playerChoice, computerChoice) {
    this.playerChoice = playerChoice;
    this.computerChoice = computerChoice;
    this.winner = RoundResult.resolveWinner(playerChoice, computerChoice);
  }

  static resolveWinner(playerChoice, computerChoice) {
    if (playerChoice.equals(computerChoice)) return RESULT.EMPATE;
    return playerChoice.beats(computerChoice) ? RESULT.JUGADOR : RESULT.COMPUTADORA;
  }
}
