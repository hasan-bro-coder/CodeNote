import {
  MDXEditor,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  linkDialogPlugin,
  codeBlockPlugin,
//   UndoRedo,
  CreateLink,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
//   sandpackPlugin,
  codeMirrorPlugin,
//   ConditionalContents,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "./css/note.scss";
import "@mdxeditor/editor/style.css";
import { useRef } from "react";
// import React from "react";
// import { MDXEditorMethods } from "@mdxeditor/editor";

// const ref = React.useRef(null)
function Note() {
  let refs = useRef(null);
  return (
    <>
      <div className="note-con">
        <MDXEditor
          ref={refs}
          markdown={JSON.parse(localStorage.getItem("note")) || " "}
          onChange={()=>{localStorage.setItem("note",JSON.stringify(refs.current?.getMarkdown()))}}
          //   lexicalTheme="dark"
          plugins={[
            tablePlugin(),
            linkPlugin(),
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            linkDialogPlugin(),
            codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
            // sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
            codeMirrorPlugin({
              codeBlockLanguages: { js: "JavaScript", css: "CSS" },
            }),
            toolbarPlugin({
              toolbarClassName: "tl-bar",
              toolbarContents: () => (
                <>
                  {/* <UndoRedo /> */}
                  <CreateLink />
                  <InsertCodeBlock />
                  <InsertImage />
                  <InsertTable />
                  <InsertThematicBreak />
                  {/* <ConditionalContents
                    options={[
                      {
                        when: (editor) => editor?.editorType === "codeblock",
                        contents: () => <ChangeCodeMirrorLanguage />,
                      },
                      {
                        when: (editor) => editor?.editorType === "sandpack",
                        contents: () => <ShowSandpackInfo />,
                      },
                      {
                        fallback: () => (
                          <>
                            <InsertCodeBlock />
                            <InsertSandpack />
                          </>
                        ),
                      },
                    ]}
                  /> */}
                </>
              ),
            }),
          ]}
          autoFocus={true}
          spellCheck="false"
        />
      </div>
    </>
  );
}

export default Note;
