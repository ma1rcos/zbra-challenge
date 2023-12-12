import { IncrementCommand, JumpCommand, Command } from '../models/Command';
import DefaultCommand from '../models/DefaultCommand';

describe('IncrementCommand', () => {
  test('execute increments the address correctly', () => {
    const incrementCommand = new IncrementCommand(5);
    expect(incrementCommand.execute(10)).toBe(15);
  });
});

describe('JumpCommand', () => {
  test('execute jumps to the correct address', () => {
    const jumpCommand = new JumpCommand(10, 3);
    expect(jumpCommand.execute(7)).toBe(10);
  });
});

describe('DefaultCommand', () => {
  test('execute increments the address correctly', () => {
    const defaultCommand = new DefaultCommand();
    const result = defaultCommand.execute(10);
    expect(result).toBe(11);
  });
});

describe('Command Execution', () => {
  test('executes commands correctly', () => {
    const commands: Command[] = [
      new IncrementCommand(2),
      new JumpCommand(10, 3),
      new IncrementCommand(5),
      new JumpCommand(1, 0),
      new IncrementCommand(3),
    ];
    let address = 0;
    for (const command of commands) {
      address = command.execute(address);
    }
    console.log(`Final address: ${address}`);
  });
});