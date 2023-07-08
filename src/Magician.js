import Maths from './Maths';

export default class Magician extends Maths {
  constructor(name, type = 'Magician') {
    super(name, type);
    this._attack = 100; // по умолчанию
    this.defence = 40;
  }
}
