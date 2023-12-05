import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // ~992px
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem bg="pink.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
