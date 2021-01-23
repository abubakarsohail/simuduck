import FlyBehavior from "../flyBehaviors/FlyBehavior";
import { FlyWithWings } from "../flyBehaviors";
import { MuteQuack } from "../quackBehaviors";
import QuackBehavior from "../quackBehaviors/QuackBehavior";

abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;
  imgSrc: string;

  constructor() {
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new MuteQuack();
    this.imgSrc = "";
  }

  abstract display(): JSX.Element;

  setFlyBehavior = (flyBehavior: FlyBehavior) => {
    this.flyBehavior = flyBehavior;
  };
}

export default Duck;
