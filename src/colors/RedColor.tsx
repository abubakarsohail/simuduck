import { Box } from "@material-ui/core";
import Duck from "../ducks/Duck";
import ColorDecorator from "./ColorDecorator";

class RedColor extends ColorDecorator {
  duck: Duck;
  constructor(duck: Duck) {
    super();
    this.duck = duck;
  }
  display() {
    return (
      <Box sx={{ margin: 1, border: 2, borderColor: "red" }}>
        {this.duck.display()}
      </Box>
    );
  }
}

export default RedColor;
