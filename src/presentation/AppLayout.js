import React from "react";

import BackgroundMenu from "./BackgroundMenu";
import EditorWindow from "./EditorWindow";
import ToolsMenu from "./ToolsMenu";

import PrimaryButton from "../generic/PrimaryButton";
import "../styles/Layout.css";

export default function AppLayout({
  updateStage,
  logos,
  onDragEnd,
  draggedImageURL,
  backgroundImageURL,
  onDownloadClick,
  downloadDisabled,
  onAddText,
  textsAdded,
  handleContextMenuOptionClick
}) {
  return (
    <div className="layout">
      <header className="header">Simple Editor</header>
      <aside className="background-menu">
        <BackgroundMenu />
      </aside>
      <main className="editor-window">
        <EditorWindow
          textsAdded={textsAdded}
          updateStage={updateStage}
          backgroundImageURL={backgroundImageURL}
          draggedImageURL={draggedImageURL}
          stageWidth={400}
          stageHeight={400}
          handleContextMenuOptionClick={handleContextMenuOptionClick}
        />
      </main>
      <aside className="tools-menu">
        <ToolsMenu logos={logos} onDragEnd={onDragEnd} onAddText={onAddText} />
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
