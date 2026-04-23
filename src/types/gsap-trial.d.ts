declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: object);
    revert(): void;
    split(vars?: object): SplitText;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  const ScrollSmoother: any;
  export { ScrollSmoother };
}
