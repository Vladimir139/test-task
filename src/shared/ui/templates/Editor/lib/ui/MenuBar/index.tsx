import { Editor } from "@tiptap/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import { SelectMenuBar } from "..";
import styles from "./styles.module.scss";

export const MenuBar: FC<{ editor: Editor | null }> = ({ editor }) => {
  const [isOpenHeadings, setIsOpenHeadings] = useState(false);
  const [isOpenWeight, setIsOpenWeight] = useState(false);
  const [isOpenPositioning, setIsOpenPositioning] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [isOpenTable, setIsOpenTable] = useState(false);
  const [isOpenYouTube, setIsOpenYouTube] = useState(false);
  const [isOpenLink, setIsOpenLink] = useState(false);
  const [isOpenColors, setIsOpenColors] = useState(false);

  // YouTube ------------------------
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (widthRef.current && heightRef.current) {
      widthRef.current.value = "640";
      heightRef.current.value = "480";
    }
  }, [widthRef.current, heightRef.current]);

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url && editor) {
      const width = widthRef?.current
        ? Math.max(320, parseInt(widthRef.current.value, 10)) || 640
        : 640;
      const height = heightRef?.current
        ? Math.max(180, parseInt(heightRef.current.value, 10)) || 480
        : 480;

      editor.commands.setYoutubeVideo({
        src: url,
        width,
        height,
      });
    }
  };

  // YouTube ------------------------

  // Link ---------------------------
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);
  // Link ---------------------------

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menuBar}>
      {/* ---------- Heading */}
      <SelectMenuBar
        title="Заголовки"
        isOpenMenu={isOpenHeadings}
        handleClose={() => setIsOpenHeadings(false)}
        handleChange={() => setIsOpenHeadings((prev) => !prev)}
      >
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        >
          h1
        </button>
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          h2
        </button>
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          h3
        </button>
      </SelectMenuBar>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        Параграф
      </button>
      {/* ---------- weight */}
      <SelectMenuBar
        title="Тип текста"
        isOpenMenu={isOpenWeight}
        handleChange={() => setIsOpenWeight((prev) => !prev)}
        handleClose={() => setIsOpenWeight(false)}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Жирный
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Курсив
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Зачеркнутый
        </button>
        {/*  ------ Subscript */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={editor.isActive("subscript") ? "is-active" : ""}
        >
          Индекс
        </button>
        {/*  ------ Superscript */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={editor.isActive("superscript") ? "is-active" : ""}
        >
          Степень
        </button>
        {/*  ------ Underline */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          Нижняя линия
        </button>
      </SelectMenuBar>
      {/* ---------- highlight */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        Выделить фон
      </button>
      {/* ---------- position */}
      <SelectMenuBar
        title="Позиционирование"
        isOpenMenu={isOpenPositioning}
        handleChange={() => setIsOpenPositioning((prev) => !prev)}
        handleClose={() => setIsOpenPositioning(false)}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          Слева
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
        >
          По центру
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          Справа
        </button>
      </SelectMenuBar>
      {/* ---------- Blockquote */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        Цитата
      </button>
      {/* ---------- List */}
      <SelectMenuBar
        title="Списки"
        isOpenMenu={isOpenList}
        handleChange={() => setIsOpenList((prev) => !prev)}
        handleClose={() => setIsOpenList(false)}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          Нумерованный
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Ненумерованный
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          disabled={!editor.can().sinkListItem("listItem")}
        >
          Подпункт
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          disabled={!editor.can().liftListItem("listItem")}
        >
          Убрать подпункт
        </button>
      </SelectMenuBar>
      {/* ------- Code */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        Блок кода
      </button>
      {/* ------- Hr */}
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        Горизонтальная линия
      </button>
      {/* ------- Table */}
      <SelectMenuBar
        title="Таблица"
        isOpenMenu={isOpenTable}
        handleChange={() => setIsOpenTable((prev) => !prev)}
        handleClose={() => setIsOpenTable(false)}
      >
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
          }
        >
          Вставить таблицу
        </button>
        <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()}>
          Добавить колонку до
        </button>
        <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()}>
          Добавить колонку после
        </button>
        <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()}>
          Удалить колонку
        </button>
        <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()}>
          Добавить строку до
        </button>
        <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()}>
          Добавить строку после
        </button>
        <button type="button" onClick={() => editor.chain().focus().deleteRow().run()}>
          Удалить строку
        </button>
        <button type="button" onClick={() => editor.chain().focus().deleteTable().run()}>
          Удалить таблицу
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
          Сделать ячейку выделенной
        </button>
        <button type="button" onClick={() => editor.chain().focus().mergeOrSplit().run()}>
          Объединить или разделить
        </button>
      </SelectMenuBar>
      {/*  ------ Task */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={editor.isActive("taskList") ? "is-active" : ""}
      >
        Список задач
      </button>
      {/*  ------ Task */}
      <SelectMenuBar
        title="YouTube"
        isOpenMenu={isOpenYouTube}
        handleChange={() => setIsOpenYouTube((prev) => !prev)}
        handleClose={() => setIsOpenYouTube(false)}
      >
        <button type="button" id="add" onClick={addYoutubeVideo}>
          Добавить YouTube видео
        </button>
        <input
          id="width"
          type="number"
          min="320"
          max="1024"
          ref={widthRef}
          placeholder="Ширина блока видео"
        />
        <input
          id="Высота"
          type="number"
          min="180"
          max="720"
          ref={heightRef}
          placeholder="Высота блока видео"
        />
      </SelectMenuBar>
      {/*  ------ Link */}
      <SelectMenuBar
        title="Ссылка"
        isOpenMenu={isOpenLink}
        handleChange={() => setIsOpenLink((prev) => !prev)}
        handleClose={() => setIsOpenLink(false)}
      >
        <button
          type="button"
          onClick={setLink}
          className={editor.isActive("link") ? "is-active" : ""}
        >
          setLink
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
        >
          unsetLink
        </button>
      </SelectMenuBar>
      {/*  ------ Color pickers */}
      <SelectMenuBar
        title="Цвета"
        isOpenMenu={isOpenColors}
        handleChange={() => setIsOpenColors((prev) => !prev)}
        handleClose={() => setIsOpenColors(false)}
      >
        <input
          type="color"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            editor
              .chain()
              .focus()
              .setColor(event.target?.value || "#000000")
              .run()
          }
          value={editor.getAttributes("textStyle").color}
          data-testid="setColor"
        />
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""}
          data-testid="setPurple"
        >
          Фиолетовый
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#F98181").run()}
          className={editor.isActive("textStyle", { color: "#F98181" }) ? "is-active" : ""}
          data-testid="setRed"
        >
          Красный
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#FBBC88").run()}
          className={editor.isActive("textStyle", { color: "#FBBC88" }) ? "is-active" : ""}
          data-testid="setOrange"
        >
          Оранжевый
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#FAF594").run()}
          className={editor.isActive("textStyle", { color: "#FAF594" }) ? "is-active" : ""}
          data-testid="setYellow"
        >
          Желтый
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#70CFF8").run()}
          className={editor.isActive("textStyle", { color: "#70CFF8" }) ? "is-active" : ""}
          data-testid="setBlue"
        >
          Синий
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#94FADB").run()}
          className={editor.isActive("textStyle", { color: "#94FADB" }) ? "is-active" : ""}
          data-testid="setTeal"
        >
          Бирюзовый
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor("#B9F18D").run()}
          className={editor.isActive("textStyle", { color: "#B9F18D" }) ? "is-active" : ""}
          data-testid="setGreen"
        >
          Зеленый
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetColor().run()}
          data-testid="unsetColor"
        >
          Удалить цвет
        </button>
      </SelectMenuBar>
    </div>
  );
};
