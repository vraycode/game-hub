import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";
function App() {
  const [selectedgenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    // @ts-ignore
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenereList
            selectedGenre={selectedgenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          ></GenereList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedgenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
