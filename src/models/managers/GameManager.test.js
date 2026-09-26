import Choice, { CHOICES } from '../vo/Choice';
import { RESULT } from '../vo/RoundResult';
import GameManager from './GameManager';

describe('GameManager', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('suma punto al jugador y devuelve el marcador cuando gana', () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.TIJERAS));
    const gameManager = new GameManager();

    const round = gameManager.play(CHOICES.PIEDRA);

    expect(round.winner).toBe(RESULT.JUGADOR);
    expect(round.playerScore).toBe(1);
    expect(round.computerScore).toBe(0);
  });

  it('suma punto a la computadora cuando gana', () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.PAPEL));
    const gameManager = new GameManager();

    const round = gameManager.play(CHOICES.PIEDRA);

    expect(round.winner).toBe(RESULT.COMPUTADORA);
    expect(round.playerScore).toBe(0);
    expect(round.computerScore).toBe(1);
  });

  it('no suma puntos en caso de empate', () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.PIEDRA));
    const gameManager = new GameManager();

    const round = gameManager.play(CHOICES.PIEDRA);

    expect(round.winner).toBe(RESULT.EMPATE);
    expect(round.playerScore).toBe(0);
    expect(round.computerScore).toBe(0);
  });

  it('acumula el marcador entre jugadas', () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.TIJERAS));
    const gameManager = new GameManager();

    gameManager.play(CHOICES.PIEDRA);
    const round = gameManager.play(CHOICES.PIEDRA);

    expect(round.playerScore).toBe(2);
  });
});
