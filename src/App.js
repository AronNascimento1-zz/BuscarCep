import "./App.css";
import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="content">
        <InputSearch />
       
      </div>
    </>
  );
}

export default App;
