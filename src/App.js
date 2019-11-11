import React from "react";
import { Route } from "react-router-dom";

import TabNav from "./components/TabNav.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";

export default function App() {
  return (
    <div>
      <TabNav />
      {/* <CharacterList /> */}
      {/* <LocationsList/> */}

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      {/* <Route path="/episodes" component={EpisodeList} /> */}
    </div>
  );
}
