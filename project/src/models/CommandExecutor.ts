import { Command } from './Command';

export class CommandExecutor {
  
  private address: number = 0;

  constructor(private commands: Command[]) {}

  executeCommands(): number {
    while (this.address < this.commands.length) {
      this.address = this.commands[this.address].execute(this.address);
    }
    return this.address;
  }
  
}