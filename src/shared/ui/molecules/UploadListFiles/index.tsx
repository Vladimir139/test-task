import cx from "classnames";
import React, { FC, useRef, useState } from "react";

import { Button } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const UploadListFiles: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const maxFiles = 10;

  const [isDragging, setIsDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log("uploadedFiles", uploadedFiles);

  // --------------------------------------------------------------------------------

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const { files } = e.dataTransfer;

    if (files.length + files.length > maxFiles) {
      alert(`Можно загрузить не более ${maxFiles} файлов`);
      return;
    }

    // @ts-ignore
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleFileUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    // @ts-ignore
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  // --------------------------------------------------------------------------------

  return (
    <>
      <p className={cx(styles.titleBlock)}>Фотографии</p>
      <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={styles.wrapper}>
        {isDragging ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cx(styles.dropZone, {
              [styles.fullDropZone]: isDragging,
            })}
          >
            <div>Сбросьте файл сюда</div>
          </div>
        ) : (
          <div className={styles.wrapperUploadFiles}>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cx(styles.dropZone)}
            >
              <div>Сбросьте файл сюда (или =&gt;)</div>
            </div>
            <input
              className={styles.hidden}
              type="file"
              onChange={handleFileUploadProfile}
              multiple
              ref={inputRef}
              accept="image/png, image/jpeg"
            />
            <div className={styles.wrapperUploadBtn}>
              <Button
                radius="little"
                onClick={() => inputRef.current !== null && inputRef?.current?.click()}
              >
                Выбрать файл
              </Button>
            </div>
          </div>
        )}
        {uploadedFiles.length ? (
          <div className={styles.listUploadFiles}>
            {uploadedFiles.map((file) => (
              <p key={file.name}>{file.name}</p>
            ))}
          </div>
        ) : (
          <p className={styles.notFoundFiles}>Пока файлов нет</p>
        )}
      </div>
    </>
  );
};
