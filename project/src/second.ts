import * as fs from 'fs';
import { CommandExecutor } from './models/CommandExecutor';
import { IncrementCommand, JumpCommand, Command } from './models/Command';
import DefaultCommand from './models/DefaultCommand';

const commandsTxt = fs.readFileSync('./src/static/commands.txt', 'utf-8');
const commandNumbers = commandsTxt.split('\n').map(Number);

// Converts numbers into Command instances
const commands: Command[] = commandNumbers.map((commandNumber) => {
  const commandType = Math.floor(commandNumber / 100);
  if (commandType === 2) {
    return new IncrementCommand(commandNumber % 100);
  } else if (commandType === 5) {
    const jumpType = Math.floor((commandNumber % 100) / 10);
    const jumpAmount = commandNumber % 10;
    return new JumpCommand(jumpType, jumpAmount);
  } else {
    return new DefaultCommand();
  }
});

const executor = new CommandExecutor(commands);
const result = executor.executeCommands();

console.log(`The value of the address variable is: ${result}`);