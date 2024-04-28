import cx from "classnames";
import Link from "next/link";
import { FC } from "react";

import { TelegramIcon, ViberIcon, VkIcon, WhatsAppIcon } from "@/shared/lib/icons";
import { Container } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.blockList}>
        <div className={styles.block}>
          <h3 className={styles.title}>Время работы</h3>
          <p className={styles.text}>08:00 - 20:00</p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.title}>Контакты</h3>
          <p className={styles.text}>
            <Link href="tel:8-912-345-67-89">8-912-345-67-89</Link>
          </p>
          <p className={styles.text}>
            <Link href="tel:8-909-123-45-67">8-909-123-45-67</Link>
          </p>
          <p className={styles.text}>
            <Link href="mailto:pochta@mail.ru">pochta@mail.ru</Link>
          </p>
          <ul className={styles.socialNetworkList}>
            <li>
              <Link href="/">
                <WhatsAppIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <ViberIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h3 className={styles.title}>Социальные сети</h3>
          <ul className={styles.socialNetworkList}>
            <li>
              <Link href="/">
                <VkIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <TelegramIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.blockLinks}>
          <Link className={styles.title} href="/">
            Предприятиям и учебным заведениям
          </Link>
          <Link className={styles.title} href="/team">
            Команда
          </Link>
        </div>
        <div className={styles.wrapperButton}>
          <Link href="/test" className={styles.linkTest}>
            Пройти тест
          </Link>
        </div>
      </div>
    </Container>
    <p className={cx(styles.text, styles.centered)}>© «Открытое производство», 2024</p>
  </footer>
);
