import Choice, { CHOICES } from './Choice';
import RoundResult, { RESULT } from './RoundResult';

describe('RoundResult', () => {
  it('resuelve empate cuando ambos eligen lo mismo', () => {
    const result = new RoundResult(new Choice(CHOICES.PIEDRA), new Choice(CHOICES.PIEDRA));
    expect(result.winner).toBe(RESULT.EMPATE);
  });

  it('resuelve JUGADOR cuando la elección del jugador le gana a la de la computadora', () => {
    const result = new RoundResult(new Choice(CHOICES.PIEDRA), new Choice(CHOICES.TIJERAS));
    expect(result.winner).toBe(RESULT.JUGADOR);
  });

  it('resuelve COMPUTADORA cuando la elección de la computadora le gana a la del jugador', () => {
    const result = new RoundResult(new Choice(CHOICES.TIJERAS), new Choice(CHOICES.PIEDRA));
    expect(result.winner).toBe(RESULT.COMPUTADORA);
  });
});
