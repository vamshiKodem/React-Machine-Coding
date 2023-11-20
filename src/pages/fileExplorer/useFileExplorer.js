import { useState } from "react";
import { explorer } from "./data/folderData";

export const useFileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const onAddFolderOrFileClick = (id, isFolder, folderOrFileName) => {
    // Need to work on the adding the file or folder
  };

  return {
    onAddFolderOrFileClick,
    explorerData,
  };
};
