import DuckComponent from "../components/DuckComponent";
import { FlyNoWay } from "../flyBehaviors";
import { MuteQuack } from "../quackBehaviors";
import Duck from "./Duck";

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
    this.imgSrc = "model.jpeg";
  }

  display = (): JSX.Element => {
    return <DuckComponent duck={this} />;
  };
}

export default ModelDuck;
