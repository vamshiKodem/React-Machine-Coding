import "./App.css";
import { GridLights } from "./pages/gridLights/gridLights";
import { Pagination } from "./pages/pagination/pagination";
import { InfiniteScroll } from "./pages/infiniteScroll/infiniteScroll";
import { Outlook } from "./pages/outlook/outlook";
import { CustomMemo } from "./customHooks/useMemo/customMemo";
import { FileExplorer } from "./pages/fileExplorer/fileExplorer";
import { StarRating } from "./pages/starRating/starRating";
import { LocalStorage } from "./customHooks/useLocalStorage/localStorage";
import { TicTacToe } from "./pages/ticTacToe/ticTacToe";

const App = () => {
  return (
    <div className="App">
      {/* <GridLights /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <Outlook /> */}
      {/* <CustomMemo /> */}
      {/* <FileExplorer /> */}
      {/* <LocalStorage /> */}
      {/* <StarRating /> */}
      <TicTacToe />
    </div>
  );
};

export default App;
