import Daemon from '../Daemon';
import Magician from '../Magician';

test('testing Daemon', () => {
  const daemon = new Daemon('DDD');
  daemon.attack = 2;
  daemon.stoned = 2;
  expect(daemon.attack).toBe(0);
});

test('testing Magician', () => {
  const magician = new Magician('MMM');
  magician.attack = 5;
  magician.stoned = 5;
  expect(magician.stoned).toBe(12);
});
