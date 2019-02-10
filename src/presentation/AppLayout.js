import React from "react";
import BackgroundMenu from "./BackgroundMenu";
import EditorWindow from "./EditorWindow";
import LogoMenu from "./LogoMenu";
import TextMenu from "./TextMenu";
import PrimaryButton from "../generic/PrimaryButton";
import "../styles/Layout.css";

export default function AppLayout({
  appData,
  onUpdateProjectView,
  download,
  onAddLogo,
  onAddText,
  onMoveText,
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
          projectData={appData.projectData}
          onStageUpdate={onUpdateProjectView}
          stageWidth={400}
          stageHeight={400}
          onMoveText={onMoveText}
          contextMenu={contextMenu}
        />
      </main>
      <aside className="tools-menu ToolsMenu">
        <div className="ToolsMenu">
          <LogoMenu logosURLs={appData.logosURLs} onDragEnd={onAddLogo} />
          <TextMenu onSubmit={onAddText} />
        </div>
      </aside>
      <div className="download">
        <PrimaryButton
          label="Download"
          onClick={download.onClick}
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
