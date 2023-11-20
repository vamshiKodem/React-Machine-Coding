import React, { useState } from "react";

import "./fileExplorer.css";
import { Folder } from "./common/folder";
import { useFileExplorer } from "./useFileExplorer";

export const FileExplorer = () => {
  const { explorerData, onAddFolderOrFileClick } = useFileExplorer();

  return (
    <div className="root-container">
      <h1>FileExplorer</h1>
      {explorerData.map((explorer) => (
        <Folder
          key={explorer.id}
          explorerData={explorer}
          onAddFolderOrFileClick={onAddFolderOrFileClick}
        />
      ))}
    </div>
  );
};
