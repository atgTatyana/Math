import Daemon from '../Daemon';
import Magician from '../Magician';

test('testing Daemon', () => {
  const daemon = new Daemon('DDD');
  daemon.cell = 2;
  daemon.attack = 10;
  daemon.stoned = true;
  expect(daemon.attack).toBe(0);
});

test('testing Magician', () => {
  const magician = new Magician('MMM');
  magician.cell = 2;
  expect(magician.attack).toBe(90);
  expect(magician.stoned).toBe(false);
});
