import { Grid } from "@material-ui/core";
import Duck from "../ducks/Duck";

interface LinearLayoutProps {
  ducks: Duck[];
}

const LinearLayout = ({ ducks }: LinearLayoutProps) => {
  return (
    <Grid container spacing={2}>
      {ducks?.map((duck, index) => (
        <Grid key={index} item xs={12}>
          {duck.display()}
        </Grid>
      ))}
    </Grid>
  );
};

export default LinearLayout;
