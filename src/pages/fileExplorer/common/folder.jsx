import React, { useState } from "react";
import "../fileExplorer.css";

export const Folder = (props) => {
  const { explorerData, onAddFolderOrFileClick } = props;
  const [expended, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });
  const [folderOrFileName, setFolderOrFileName] = useState("");

  const onFolderClick = () => {
    setExpanded(!expended);
  };

  const onAddButtonClick = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({ isVisible: !showInput.isVisible, isFolder: isFolder });
  };

  return (
    <div className="folder-container">
      <div
        className={explorerData.isFolder ? `folder-text` : ""}
        onClick={onFolderClick}
      >
        <div>
          <span>{explorerData.isFolder ? "📂" : "📄"}</span>
          {explorerData.name}
        </div>
        {explorerData.isFolder ? (
          <div>
            <button
              className="add-folder"
              onClick={(e) => onAddButtonClick(e, true)}
            >
              Folder
            </button>
            <button
              className="add-file"
              onClick={(e) => onAddButtonClick(e, false)}
            >
              File
            </button>
          </div>
        ) : null}
      </div>
      <div className="input-wrapper">
        {showInput.isVisible ? (
          <>
            <span>{showInput.isFolder ? "📂" : "📄"}</span>
            <input
              type="text"
              className="input-add"
              value={folderOrFileName}
              onChange={(e) => setFolderOrFileName(e.target.value)}
            />
            <button
              className="add"
              onClick={() =>
                onAddFolderOrFileClick(
                  explorerData.id,
                  showInput.isFolder,
                  folderOrFileName
                )
              }
            >
              Add
            </button>
          </>
        ) : null}
      </div>
      <div className={`item-container ${expended ? "show" : ""}`}>
        {explorerData.items && explorerData.items.length > 0
          ? explorerData.items.map((data) => {
              return (
                <Folder
                  key={data.id}
                  explorerData={data}
                  onAddFolderOrFileClick={onAddFolderOrFileClick}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
