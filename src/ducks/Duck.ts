import FlyBehavior from "../flyBehaviors/FlyBehavior";
import FlyWithWings from "../flyBehaviors/FlyWithWings";

abstract class Duck {
  flyBehavior: FlyBehavior;
  imgSrc: string;

  constructor() {
    this.flyBehavior = new FlyWithWings();
    this.imgSrc = "";
  }

  abstract display(): JSX.Element;

  setFlyBehavior = (flyBehavior: FlyBehavior) => {
    this.flyBehavior = flyBehavior;
  };
}

export default Duck;
