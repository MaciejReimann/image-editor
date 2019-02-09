import React from "react";
import BackgroundMenu from "./BackgroundMenu";
import EditorWindow from "./EditorWindow";
import LogoMenu from "./LogoMenu";
import TextMenu from "./TextMenu";
import PrimaryButton from "../generic/PrimaryButton";
import "../styles/Layout.css";

export default function AppLayout({
  logosURLs,
  projectData,
  onProjectViewUpdate,
  download,
  onDragEnd,
  onAddText,
  contextMenu
}) {
  return (
    <div className="layout">
      <header className="header">Simple Editor</header>
      <aside className="background-menu">
        <BackgroundMenu />
      </aside>
      <main className="editor-window">
        <EditorWindow
          background={projectData.background}
          texts={projectData.texts}
          logos={projectData.logos}
          onStageUpdate={onProjectViewUpdate}
          stageWidth={400}
          stageHeight={400}
          contextMenu={contextMenu}
        />
      </main>
      <aside className="tools-menu ToolsMenu">
        <div className="ToolsMenu">
          <LogoMenu logos={logosURLs} onDragEnd={onDragEnd} />
          <TextMenu onSubmit={onAddText} />
        </div>
      </aside>
      <div className="download">
        <PrimaryButton
          onClick={download.onClick}
          label="Download"
          disabled={download.disabled}
        />
      </div>
      <div className="save-load">
        <PrimaryButton label="Save" />
        <PrimaryButton label="Load" />
      </div>
    </div>
  );
}
