export abstract class Command {
  abstract execute(address: number): number;
}
  
export class IncrementCommand extends Command {
  constructor(private incrementAmount: number) {
    super();
  }
  execute(address: number): number {
    return address + this.incrementAmount;
  }
}
  
export class JumpCommand extends Command {
  constructor(private jumpType: number, private jumpAmount: number) {
    super();
  }
  execute(address: number): number {
    switch (this.jumpType) {
      case 1:
        return address + 1;
      case 2:
        return address + 2;
      case 10:
        return address + this.jumpAmount;
      default:
        return address + 1;
    }
  }
}