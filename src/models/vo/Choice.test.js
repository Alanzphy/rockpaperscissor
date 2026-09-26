import Choice, { CHOICES } from './Choice';

describe('Choice', () => {
  it('rejects an invalid value', () => {
    expect(() => new Choice('LAGARTO')).toThrow('Choice inválido: LAGARTO');
  });

  it('random() always returns a valid choice', () => {
    for (let i = 0; i < 20; i += 1) {
      expect(Object.values(CHOICES)).toContain(Choice.random().value);
    }
  });

  it.each([
    [CHOICES.PIEDRA, CHOICES.TIJERAS, true],
    [CHOICES.PAPEL, CHOICES.PIEDRA, true],
    [CHOICES.TIJERAS, CHOICES.PAPEL, true],
    [CHOICES.PIEDRA, CHOICES.PAPEL, false],
    [CHOICES.PIEDRA, CHOICES.PIEDRA, false],
  ])('%s.beats(%s) === %s', (a, b, expected) => {
    expect(new Choice(a).beats(new Choice(b))).toBe(expected);
  });

  it('equals() compares by value', () => {
    expect(new Choice(CHOICES.PAPEL).equals(new Choice(CHOICES.PAPEL))).toBe(true);
    expect(new Choice(CHOICES.PAPEL).equals(new Choice(CHOICES.PIEDRA))).toBe(false);
  });
});
