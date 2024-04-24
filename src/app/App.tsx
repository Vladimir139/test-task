import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { Button, Container, Modal } from "@/shared/ui/atoms";
import { HorizontalFilters } from "@/shared/ui/templates";
import { Footer, Header } from "@/widgets";

import styles from "./styles.module.scss";
import { AppProps } from "./types";

// @ts-ignore
export const App: FC<AppProps> = ({ children }) => {
  const router = useRouter();

  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const isShowFilters =
    router.pathname === "/vacancy" ||
    router.pathname === "/professions" ||
    router.pathname === "/enterprises" ||
    router.pathname === "/educational-establishments" ||
    router.pathname === "/internships-and-practices";

  const isEntityInfoPage =
    router.pathname.includes("/vacancy/") ||
    router.pathname.includes("/professions/") ||
    router.pathname.includes("/enterprises/") ||
    router.pathname.includes("/educational-establishments/") ||
    router.pathname.includes("/internships-and-practices/");

  if (router.pathname === "/test") {
    return children;
  }

  return (
    <>
      {router.pathname !== "/404" && <Header />}
      {isShowFilters && <HorizontalFilters />}
      {isEntityInfoPage ? (
        <div className={styles.wrapper}>
          {/* <Image className={styles.imageEntity} src="/" alt="Image preview" fill /> */}
          <div
            style={{
              height: 280,
              maxWidth: 1400,
              margin: "0 auto",
              width: "100%",
              backgroundColor: "#000000",
              position: "absolute",
              zIndex: -1,
              borderRadius: "0px 0px 10px 10px",
            }}
          />
          <Container>
            <main>{children}</main>
          </Container>
        </div>
      ) : (
        <Container>
          <main>{children}</main>
        </Container>
      )}
      {router.pathname !== "/404" && <Footer />}
      <Modal handleClose={() => setIsOpenedModal(false)} isOpened={isOpenedModal}>
        <p className={styles.phraseModal}>
          Пройдите тестирование, чтобы получить профориентационные рекомендации
        </p>
        <Button theme="blue" size="medium" isStretch radius="little">
          Пройти тестирование
        </Button>
        <Link href="/" className={styles.linkGoHome}>
          Остаться на главной
        </Link>
      </Modal>
    </>
  );
};
