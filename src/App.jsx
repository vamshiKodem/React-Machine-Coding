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
import { ParentComponent } from "./pages/ParentChildRelation/parentComponent";
import { Todo } from "./pages/todo/todo";
import { PromiseMethods } from "./pages/promiseMethods/promiseMethods";
import { Jira } from "./pages/jira/jira";
import { Stopwatch } from "./pages/stopwatch/stopwatch";
import { Accordion2 } from "./pages/accordion2/accordion2";
import { TrafficLight } from "./pages/trafficLight/trafficLight";
import { Pagination2 } from "./pages/pagination2/pagination2";
import { CommonPagination } from "./pages/common/pagination/Pagination";
import { Toast } from "./pages/toast/toast";
import { Debounce } from "./customHooks/useDebounce/debounce";
import { Throttle } from "./customHooks/useThrottle/throttle";
import { Memoization } from "./customHooks/memoization/memoization";

import { Provider } from "react-redux";
import { store } from "./store";
import { ReduxExample } from "./pages/reduxExample/reduxExample";
import { FetchWithCache } from "./customHooks/useFetchWithCache/fetchWithCache";
import { SpreadSheet } from "./pages/spreadSheet/spreadSheet";
import { Popup } from "./pages/popup/popup";
import { MappedCacheRoute } from "./pages/mappedCache/route";

const App = () => {
  return (
    <Provider store={store}>
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
        {/* <HOC /> */}
        {/* <ParentComponent />
         */}
        {/* <Todo /> */}
        {/* <PromiseMethods /> */}
        {/* <Jira /> */}
        {/* <Stopwatch /> */}
        {/* <Accordion2 /> */}
        {/* <TrafficLight /> */}
        {/* <Pagination2 /> */}
        {/* <CommonPagination /> */}
        {/* <Toast /> */}
        {/* <Debounce />
        <Throttle />
        <Memoization /> */}
        {/* <ReduxExample /> */}
        {/* <FetchWithCache /> */}
        {/* <SpreadSheet /> */}
        {/* <Popup /> */}
        <MappedCacheRoute />
      </div>
    </Provider>
  );
};

export default App;
