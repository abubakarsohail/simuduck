import FlyBehavior from "./FlyBehavior";

class FlyRocketPowered implements FlyBehavior {
  fly = (): string => {
    return "FlyRocketPowered";
  };
}

export default FlyRocketPowered;
