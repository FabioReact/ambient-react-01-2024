import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Paragraph from "./Paragraph";
import HeroesList from "./pages/HeroesList";
import { UseEffectPage } from "./pages/UseEffectPage";

const styles = {
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1px",
}

function App() {
  const name = "Fabio";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <UseEffectPage />
      <HeroesList />
      <div className="card">
        <p style={styles} className="red">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Paragraph>Contenu enfant de la balise Paragraph</Paragraph>
      </div>
      <p className="read-the-docs">
        Learn React with {name} - {3 + 4} - Tableau: {["useState", "useEffect"]} 
        - Boolean: {true ? 'true' : 'false'} - Null: {null} - Undefined: {undefined}
      </p>
    </>
  );
}

export default App;
