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
  onDownloadClick
}) {
  return (
    <div className="layout">
      <header className="header">Simple Editor</header>
      <aside className="background-menu">
        <BackgroundMenu />
      </aside>
      <main className="editor-window">
        <EditorWindow
          updateStage={updateStage}
          backgroundImageURL={backgroundImageURL}
          draggedImageURL={draggedImageURL}
          width={400}
          height={400}
        />
      </main>
      <aside className="tools-menu">
        <ToolsMenu logos={logos} onDragEnd={onDragEnd} />
      </aside>
      <div className="download">
        <PrimaryButton onClick={onDownloadClick} label="Download" />
      </div>
      <div className="save-load">
        <PrimaryButton label="Save" />
        <PrimaryButton label="Load" />
      </div>
    </div>
  );
}
