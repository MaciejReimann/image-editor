import React from "react";
import EditorContainer from "../logic/EditorContainer";
import TextMenuContainer from "../logic/TextMenuContainer";
import BackgroundMenu from "./BackgroundMenu";
import LogoMenu from "./LogoMenu";
import PrimaryButton from "../generic/PrimaryButton";
import "../styles/Layout.css";

export default function AppLayout({
  appData,
  onUpdateProjectView,
  download,
  onAddText,
  onAddLogo,
  onMoveText,
  onMoveLogo,
  onEditText,
  onEditLogo,
  db
}) {
  return (
    <div className="layout">
      <header className="header">Simple Editor</header>
      <aside className="background-menu">
        <BackgroundMenu />
      </aside>
      <main className="editor-window">
        <EditorContainer
          projectData={appData.projectData}
          onStageUpdate={onUpdateProjectView}
          stageWidth={400}
          stageHeight={400}
          onMoveText={onMoveText}
          onMoveLogo={onMoveLogo}
          onEditText={onEditText}
          onEditLogo={onEditLogo}
        />
      </main>
      <aside className="tools-menu ToolsMenu">
        <div className="ToolsMenu">
          <LogoMenu logosURLs={appData.logosURLs} onDragEnd={onAddLogo} />
          <TextMenuContainer onSubmit={onAddText} />
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
        <PrimaryButton label="Save" onClick={db.set} />
        <PrimaryButton label="Load" onClick={db.get} disabled={!db.saved} />
      </div>
    </div>
  );
}
