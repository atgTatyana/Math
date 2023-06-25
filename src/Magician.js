import Maths from './Maths';

export default class Magician extends Maths {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.defaultAttack = 100;
    this.defence = 40;
  }
}
