import DuckComponent from "../components/DuckComponent";
import { FlyWithWings } from "../flyBehaviors";
import Duck from "./Duck";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.imgSrc = "mallard.jpeg";
  }

  display = (): JSX.Element => {
    return <DuckComponent duck={this} />;
  };
}

export default MallardDuck;
