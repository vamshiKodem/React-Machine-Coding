import "./App.css";
import { GridLights } from "./pages/gridLights/gridLights";
import { Pagination } from "./pages/pagination/pagination";
import { InfiniteScroll } from "./pages/infiniteScroll/infiniteScroll";

const App = () => {
  return (
    <div className="App">
      {/* <GridLights /> */}
      {/* <Pagination /> */}
      <InfiniteScroll />
    </div>
  );
};

export default App;
