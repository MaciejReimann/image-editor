import React from "react";

import BackgroundMenu from "./BackgroundMenu";
import EditorWindow from "./EditorWindow";
import LogoMenu from "./LogoMenu";
import TextMenu from "./TextMenu";

import PrimaryButton from "../generic/PrimaryButton";
import "../styles/Layout.css";

export default function AppLayout({
  // logosURLs,
  currentProject,
  onStageUpdate,

  // onDragEnd,
  // draggedImageURL,
  onDownloadClick,
  downloadDisabled
  // onAddText,
  // textsAdded,

  // handleContextMenuOptionClick
}) {
  return (
    <div className="layout">
      <header className="header">Simple Editor</header>
      <aside className="background-menu">
        <BackgroundMenu />
      </aside>
      <main className="editor-window">
        <EditorWindow
          background={currentProject.background}
          texts={currentProject.texts}
          updateStage={onStageUpdate}
          // draggedImageURL={draggedImageURL}
          stageWidth={400}
          stageHeight={400}
          // handleContextMenuOptionClick={handleContextMenuOptionClick}
        />
      </main>
      <aside className="tools-menu ToolsMenu">
        <div className="ToolsMenu">
          {/* <LogoMenu logos={logosURLs} onDragEnd={onDragEnd} /> */}
          {/* <TextMenu textInputtedHas={onAddText} /> */}
        </div>
      </aside>
      <div className="download">
        <PrimaryButton
          onClick={onDownloadClick}
          label="Download"
          disabled={downloadDisabled}
        />
      </div>
      <div className="save-load">
        <PrimaryButton label="Save" />
        <PrimaryButton label="Load" />
      </div>
    </div>
  );
}
