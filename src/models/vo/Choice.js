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

export default class Choice {
  constructor(value) {
    if (!Object.values(CHOICES).includes(value)) {
      throw new Error(`Choice inválido: ${value}`);
    }
    this.value = value;
  }

  static random() {
    const values = Object.values(CHOICES);
    return new Choice(values[Math.floor(Math.random() * values.length)]);
  }

  beats(other) {
    return BEATS[this.value] === other.value;
  }

  equals(other) {
    return this.value === other.value;
  }
}
