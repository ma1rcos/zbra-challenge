import {Command } from './Command';

class DefaultCommand extends Command {
  execute(address: number): number {
    return address + 1;
  }
}

export default DefaultCommand;