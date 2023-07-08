const cell = 2;

export default class Maths {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._stoned = false; // по умолчанию
  }

  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    let resultAttack = (this._attack + 10) - 10 * cell;
    if (this._stoned) {
      resultAttack = Math.round(resultAttack - Math.log2(cell) * 5);
    }
    return resultAttack < 0 ? 0 : resultAttack;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }
}
