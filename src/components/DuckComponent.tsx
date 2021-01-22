import { Box, MenuItem, Paper, TextField } from "@material-ui/core";
import Duck from "../ducks/Duck";
import * as FlyBehaviors from "../flyBehaviors";

export interface DuckComponentProps {
  duck: Duck;
}

const DuckComponent = ({ duck }: DuckComponentProps) => {
  const flyBehaviors = Object.values(FlyBehaviors).map((value) => new value());

  const handleChangeFlyBehavior = (event: any) => {
    duck.setFlyBehavior(flyBehaviors[event.target.value]);
  };

  return (
    <Paper sx={{ padding: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          select
          defaultValue={flyBehaviors.findIndex(
            (flyBehavior) =>
              flyBehavior.constructor.name === duck.flyBehavior.constructor.name
          )}
          onChange={handleChangeFlyBehavior}
        >
          {flyBehaviors.map((flyBehavior, index) => (
            <MenuItem key={index} value={index}>
              {flyBehavior.constructor.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
        <img
          src={`/images/${duck.imgSrc}`}
          width={100}
          height={100}
          alt={duck.imgSrc}
        />
      </Box>
    </Paper>
  );
};

export default DuckComponent;
