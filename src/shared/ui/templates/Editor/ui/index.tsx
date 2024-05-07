import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import css from "highlight.js/lib/languages/css.js";
import js from "highlight.js/lib/languages/javascript.js";
import ts from "highlight.js/lib/languages/typescript.js";
import html from "highlight.js/lib/languages/xml";
import { lowlight } from "lowlight";
import React, { FC, useCallback } from "react";

import { MenuBar } from "@/shared/ui/templates/Editor/lib/ui";

import styles from "./styles.module.scss";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

export const EditorComponent: FC<{
  content: string;
  setContent: (content: string) => void;
  placeholder: string;
}> = ({ content, setContent, placeholder }) => {
  const editorSettings = useEditor({
    onFocus: () => {},
    extensions: [
      Document,
      Paragraph,
      Text,
      Blockquote,
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      OrderedList,
      BulletList,
      ListItem,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      HorizontalRule,
      Image,
      Dropcursor,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TextStyle,
      TaskItem.configure({
        nested: true,
      }),
      Youtube.configure({
        controls: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Subscript,
      Superscript,
      Underline,
      Color,
      Placeholder.configure({
        // Use a placeholder:
        placeholder,
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
    ],
    onUpdate: ({ editor }) => {
      setContent(editor?.getHTML());
    },
    content: content || "",
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editorSettings?.chain().focus().setImage({ src: url }).run();
    }
  }, [editorSettings]);

  return (
    <section className={styles.wrapperEditor}>
      <MenuBar editor={editorSettings} />
      <button type="button" onClick={addImage}>
        setImage
      </button>
      <EditorContent editor={editorSettings} className={styles.editorContent} />
    </section>
  );
};
