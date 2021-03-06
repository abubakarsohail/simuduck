import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Link,
  MenuItem,
  TextField,
} from "@material-ui/core";
import Duck from "./ducks/Duck";
import * as Ducks from "./ducks";
import * as React from "react";
import { Add } from "@material-ui/icons";
import * as Colors from "./colors";

const App = () => {
  const [layout, setLayout] = React.useState("grid");

  const [ducks, setDucks] = React.useState<Duck[]>([]);
  const [duckIndex, setDuckIndex] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const allDucks = Object.values(Ducks).map((value) => new value());

  const colors = Object.values(Colors);

  const handleAdd = () => {
    const duck = allDucks[duckIndex];
    setDucks((ducks) => ducks.concat(duck));
    setOpen(false);
  };

  const handleColor = (duckIndex: number, colorIndex: number) => {
    const duck: Duck = ducks[duckIndex];
    const decoratedDuck = new colors[colorIndex](duck);
    setDucks((ducks) => {
      const newDucks = ducks.slice();
      newDucks[duckIndex] = decoratedDuck;
      return newDucks;
    });
  };

  return (
    <Box sx={{ marginTop: 1 }}>
      <Container>
        {/* Select layout */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TextField
            select
            value={layout}
            onChange={({ target }) => setLayout(target.value)}
          >
            <MenuItem value="grid">Grid</MenuItem>
            <MenuItem value="linear">Linear</MenuItem>
          </TextField>
        </Box>

        {/* Actual display of ducks */}
        <Grid container spacing={2}>
          {layout === "grid"
            ? ducks?.map((duck, duckIndex) => (
                <Grid key={duckIndex} item xs={4}>
                  {colors.map((color, colorIndex) => (
                    <Link
                      key={colorIndex}
                      href="#"
                      sx={{ marginLeft: 1 }}
                      onClick={() => handleColor(duckIndex, colorIndex)}
                    >
                      {color.name}
                    </Link>
                  ))}
                  {duck.display()}
                </Grid>
              ))
            : ducks?.map((duck, index) => (
                <Grid key={index} item xs={12}>
                  {colors.map((color, index) => (
                    <Link
                      key={index}
                      sx={{ marginLeft: 1 }}
                      defaultValue={index}
                    >
                      {color.name}
                    </Link>
                  ))}
                  {duck.display()}
                </Grid>
              ))}
        </Grid>

        {/* Add new ducks */}
        <Fab
          sx={{ position: "fixed", bottom: 32, right: 32 }}
          size="large"
          color="primary"
          onClick={() => setOpen(!open)}
        >
          <Add />
        </Fab>

        {/* Dialog to add new duck */}
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
          <DialogTitle>Add New Duck</DialogTitle>
          <DialogContent>
            {/* Select Duck */}
            <TextField
              select
              value={duckIndex}
              fullWidth
              onChange={({ target }) => setDuckIndex(parseInt(target.value))}
            >
              <MenuItem disabled value="Select Duck">
                Select Duck
              </MenuItem>
              {allDucks.map((duck, index) => (
                <MenuItem key={index} value={index}>
                  {duck.constructor.name}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default App;
