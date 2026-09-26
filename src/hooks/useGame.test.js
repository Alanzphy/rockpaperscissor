import { act, renderHook } from '@testing-library/react-native';
import Choice, { CHOICES } from '../models/vo/Choice';
import useGame from './useGame';

describe('useGame', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('empieza en 0-0 sin elección ni resultado', async () => {
    const { result } = await renderHook(() => useGame());

    expect(result.current.playerScore).toBe(0);
    expect(result.current.computerScore).toBe(0);
    expect(result.current.selectedChoice).toBeNull();
    expect(result.current.resultText).toBe('R: -');
  });

  it('handleSelect actualiza marcador, elección y resultado', async () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.TIJERAS));
    const { result } = await renderHook(() => useGame());

    await act(() => {
      result.current.handleSelect(CHOICES.PIEDRA);
    });

    expect(result.current.selectedChoice).toBe(CHOICES.PIEDRA);
    expect(result.current.playerScore).toBe(1);
    expect(result.current.computerScore).toBe(0);
    expect(result.current.resultText).toBe('R: JUGADOR');
  });

  it('muestra EMPATE cuando jugador y computadora eligen lo mismo', async () => {
    jest.spyOn(Choice, 'random').mockReturnValue(new Choice(CHOICES.PIEDRA));
    const { result } = await renderHook(() => useGame());

    await act(() => {
      result.current.handleSelect(CHOICES.PIEDRA);
    });

    expect(result.current.resultText).toBe('R: EMPATE');
  });
});
