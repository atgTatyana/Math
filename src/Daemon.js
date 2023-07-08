import Maths from './Maths';

export default class Daemon extends Maths {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.defence = 40;
    this._attack = 100; // по умолчанию
  }
}
