declare interface IMyCommandSetDemoCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'MyCommandSetDemoCommandSetStrings' {
  const strings: IMyCommandSetDemoCommandSetStrings;
  export = strings;
}
