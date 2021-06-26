import BigCard from "./components/BigCard/BigCard";
import SmallCard from "./components/SmallCard/SmallCard";
import data from "./data/data.json";
import { HeaderContainer } from  "./styleapp"

import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer >
        <BigCard data={data} />
      </HeaderContainer>
      <section>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((small) => {
          return <SmallCard />;
        })}
      </section>
    </>
  );
}

export default App;
