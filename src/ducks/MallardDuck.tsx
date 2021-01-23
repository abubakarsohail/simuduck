import DuckComponent from "../components/DuckComponent";
import { FlyWithWings } from "../flyBehaviors";
import { Quack } from "../quackBehaviors";
import Duck from "./Duck";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
    this.imgSrc = "mallard.jpeg";
  }

  display = (): JSX.Element => {
    return <DuckComponent duck={this} />;
  };
}

export default MallardDuck;
