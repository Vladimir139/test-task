import cx from "classnames";
import { useUnit } from "effector-react";
import React, { FC, useRef, useState } from "react";

import { $user } from "@/entities/user/model";
import { Button } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const UploadPhotosProfile: FC<{ isUserUpload?: boolean }> = ({ isUserUpload }) => {
  const user = useUnit($user);

  const [profileImage, setProfileImage] = useState<File | null>();
  const [backgroundImage, setBackgroundImage] = useState<File | null>();

  const [isDraggingProfile, setIsDraggingProfile] = useState(false);
  const [isDraggingBackground, setIsDraggingBackground] = useState(false);

  const inputRefProfile = useRef(null);
  const inputRefBackground = useRef(null);

  // --------------------------------------------------------------------------------

  const handleDragOverProfile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingProfile(true);
  };

  const handleDragLeaveProfile = () => {
    setIsDraggingProfile(false);
  };

  const handleDropProfile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingProfile(false);
    const file = e.dataTransfer.files[0];
    setProfileImage(file);
  };

  const handleFileUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setProfileImage(file);
    }
  };

  // --------------------------------------------------------------------------------

  const handleDragOverBackground = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingBackground(true);
  };

  const handleDragLeaveBackground = () => {
    setIsDraggingBackground(false);
  };

  const handleDropBackground = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingBackground(false);
    const file = e.dataTransfer.files[0];
    setBackgroundImage(file);
  };

  const handleFileUploadBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setBackgroundImage(file);
    }
  };

  // --------------------------------------------------------------------------------

  // console.log("profileImage", profileImage);
  // console.log("backgroundImage", backgroundImage);

  return (
    <div className={styles.wrapper}>
      {user?.role === "common" ? null : <p className={styles.titleBlock}>Иконка</p>}
      <div onDragOver={handleDragOverProfile} onDragLeave={handleDragLeaveProfile}>
        {isDraggingProfile ? (
          <div
            onDragOver={handleDragOverProfile}
            onDragLeave={handleDragLeaveProfile}
            onDrop={handleDropProfile}
            className={cx(styles.dropZone, styles.dropZoneProfile)}
          >
            <div>Drop your file here</div>
          </div>
        ) : (
          <div className={styles.wrapperUploadImage}>
            <div className={styles.profileImage}>{profileImage && profileImage.name}</div>
            <input
              className={styles.hidden}
              type="file"
              onChange={handleFileUploadProfile}
              multiple
              ref={inputRefProfile}
              accept="image/png, image/jpeg"
            />
            <div>
              <Button
                radius="little"
                onClick={() =>
                  inputRefProfile.current !== null && inputRefProfile?.current?.click()
                }
              >
                Выбрать файл
              </Button>
            </div>
          </div>
        )}
      </div>
      {user?.role === "common" ? null : <p className={styles.titleBlock}>Превью фото</p>}
      {!isUserUpload && (
        <div onDragOver={handleDragOverBackground} onDragLeave={handleDragLeaveBackground}>
          {isDraggingBackground ? (
            <div
              onDragOver={handleDragOverBackground}
              onDragLeave={handleDragLeaveBackground}
              onDrop={handleDropBackground}
              className={cx(styles.dropZone, styles.dropZoneBackground)}
            >
              <div>Drop your file here</div>
            </div>
          ) : (
            <div className={styles.wrapperUploadImage}>
              <div className={styles.backgroundImage}>
                {backgroundImage && backgroundImage.name}
              </div>
              <input
                className={styles.hidden}
                type="file"
                onChange={handleFileUploadBackground}
                multiple
                ref={inputRefBackground}
                accept="image/png, image/jpeg"
              />
              <div>
                <Button
                  radius="little"
                  onClick={() =>
                    inputRefBackground.current !== null && inputRefBackground.current.click()
                  }
                >
                  Выбрать файл
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
