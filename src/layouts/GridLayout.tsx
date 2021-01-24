import { Grid } from "@material-ui/core";
import Duck from "../ducks/Duck";

interface GridLayoutProps {
  ducks: Duck[];
}

const GridLayout = ({ ducks }: GridLayoutProps) => {
  return (
    <Grid container spacing={2}>
      {ducks?.map((duck, index) => (
        <Grid key={index} item xs={4}>
          {duck.display()}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridLayout;
