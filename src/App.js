import "./App.css";
import { GridLights } from "./pages/gridLights/gridLights";
import { Pagination } from "./pages/pagination/pagination";
import { InfiniteScroll } from "./pages/infiniteScroll/infiniteScroll";
import { Outlook } from "./pages/outlook/outlook";

const App = () => {
  return (
    <div className="App">
      {/* <GridLights /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
      <Outlook />
    </div>
  );
};

export default App;
