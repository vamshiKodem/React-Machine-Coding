import "./App.css";
import { GridLights } from "./pages/gridLights/gridLights";
import { Pagination } from "./pages/pagination/pagination";
import { InfiniteScroll } from "./pages/infiniteScroll/infiniteScroll";
import { Outlook } from "./pages/outlook/outlook";
import { CustomMemo } from "./customHooks/useMemo/customMemo";
import { FileExplorer } from "./pages/fileExplorer/fileExplorer";
import { StarRating } from "./pages/starRating/starRating";
import { TicTacToe } from "./pages/ticTacToe/ticTacToe";
import { DragAndDrop } from "./pages/dragAndDrop/dragAndDrop";
import { Carousel } from "./pages/carousel/carousel";
import { CustomEffect } from "./customHooks/useEffect/customEffect";
import { DynamicRouter } from "./pages/dynamicRouter/dynamicRouter";
import { ProgressBar } from "./pages/progressBar/progressBar";
import { AccordionUI } from "./pages/accordion/accordion";
import { LanguageProvider } from "./pages/multiLanguageApp/multiLanguageContext";
import { MultiLanguageApp } from "./pages/multiLanguageApp/multiLanguageApp";
import { HOC } from "./pages/hoc/hoc";

const App = () => {
  return (
    <div className="App">
      {/* <GridLights /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <Outlook /> */}
      {/* <CustomMemo /> */}
      {/* <FileExplorer /> */}
      {/* <StarRating /> */}
      {/* <TicTacToe /> */}
      {/* <DragAndDrop /> */}
      {/* <Carousel /> */}
      {/* <CustomEffect /> */}
      {/* <ProgressBar /> */}
      {/* <AccordionUI /> */}
      {/* <DynamicRouter /> */}
      {/* <LanguageProvider>
        <MultiLanguageApp />
      </LanguageProvider> */}
      <HOC />
    </div>
  );
};

export default App;
