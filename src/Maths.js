export default class Maths {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  set attack(cell) {
    const attack = (this.defaultAttack + 10) - 10 * cell;
    this._attack = Math.round(attack - Math.log2(cell) * 5);
    this._attack = this._attack < 0 ? 0 : this._attack;
  }

  get attack() {
    return this._attack;
  }

  set stoned(cell) {
    this._stoned = Math.round(Math.log2(cell) * 5);
  }

  get stoned() {
    return this._stoned;
  }
}
