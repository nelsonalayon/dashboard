import BigCard from "./components/BigCard/BigCard";
import SmallCard from "./components/SmallCard/SmallCard";
import data from "./data/data.json";
import {
  SectionContainer,
  AppContainer,
  AppTitle,
  Button,
  ButtonGroup,
} from "./styleapp";
import { useState } from "react";

import GlobalStyle from "./globalStyle";

function App() {
  const [darkScreen, setDarkScreen] = useState(false);

  const toggleColors = () => {
    darkScreen === true ? setDarkScreen(false) : setDarkScreen(true);
  };
  return (
    <AppContainer>
      <GlobalStyle isDark={darkScreen} />
      <AppTitle isDark={darkScreen}>
        <div>
          <h2>Social Media Dashboard</h2>
          <h4>
            Total followers: {data.social_media_dashboard.total_followers}
          </h4>
        </div>
        <ButtonGroup>
          <h4>Dark mode</h4>
          <Button onClick={() => toggleColors()} isDark={darkScreen}>
            <div></div>
          </Button>
        </ButtonGroup>
      </AppTitle>
      <SectionContainer>
        <BigCard data={data} isDark={darkScreen} />
      </SectionContainer>
      <AppTitle>
        <h2>Overview - Today</h2>
      </AppTitle>
      <SectionContainer>
        <SmallCard data={data} isDark={darkScreen} />
      </SectionContainer>
    </AppContainer>
  );
}

export default App;
