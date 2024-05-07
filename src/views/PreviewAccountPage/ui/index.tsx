import React, { FC } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  SmallEmailIcon,
  SmallGitHubIcon,
  SmallPhoneIcon,
  SmallTelegramIcon,
  SmallVkIcon,
  SmallWhatsAppIcon,
  TwitterIcon,
} from "@/shared/lib/icons";
import { SmallViberIcon } from "@/shared/lib/icons/SmallSocialNetworks/SmallViberIcon";
import { CardFile, Gap, WhiteWrapper } from "@/shared/ui/atoms";
import { ShortUserInfo } from "@/views/PreviewAccountPage/lib/ui";

import styles from "./styles.module.scss";

export const PreviewAccountPage: FC = () => (
  <div className={styles.wrapper}>
    <WhiteWrapper smallBottomMargin>
      <ShortUserInfo />
      <div className={styles.hr} />
      <ul className={styles.contactsList}>
        <li className={styles.contact}>
          <SmallPhoneIcon /> 7-921-789-92-33
        </li>
        <li className={styles.contact}>
          <SmallTelegramIcon /> - tg.me
        </li>
        <li className={styles.contact}>
          <SmallVkIcon /> - vk.com
        </li>
        <li className={styles.contact}>
          <FacebookIcon />
        </li>
        <li className={styles.contact}>
          <TwitterIcon />
        </li>
        <li className={styles.contact}>
          <SmallWhatsAppIcon />
        </li>
        <li className={styles.contact}>
          <InstagramIcon />
        </li>
        <li className={styles.contact}>
          <SmallGitHubIcon />
        </li>
        <li className={styles.contact}>
          <SmallEmailIcon />
        </li>
        <li className={styles.contact}>
          <SmallViberIcon />
        </li>
      </ul>
      <div className={styles.hr} />
      <h2 className={styles.titleSection}>Теги</h2>
      <ul className={styles.tagsList}>
        <li className={styles.tag}>Полный день</li>
        <li className={styles.tag}>Ответственность</li>
        <li className={styles.tag}>Джуниор разработчик</li>
        <li className={styles.tag}>Удаленная работа</li>
        <li className={styles.tag}>Фронтенд</li>
        <li className={styles.tag}>Бэкенд</li>
      </ul>
    </WhiteWrapper>
    <WhiteWrapper smallBottomMargin>
      <h2 className={styles.titleSection}>Описание</h2>
      <p>Текст описания из редактора</p>
    </WhiteWrapper>
    <WhiteWrapper smallBottomMargin>
      <h2 className={styles.titleSection}>Резюме/портфолио</h2>
      <div className={styles.filesList}>
        <CardFile />
        <CardFile />
        <CardFile />
        <CardFile />
        <CardFile />
      </div>
    </WhiteWrapper>
    <Gap />
  </div>
);
