import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { MagnifierIcon } from "@/shared/lib/icons";
import { Container, Input } from "@/shared/ui/atoms";
import { CareerNavigation, Navigation, SearchFoundBlock } from "@/widgets/Header/lib/ui";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  const [isShowCareerNav, setIsShowCareerNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const isEntityInfoPage =
    router.pathname.includes("/vacancy/") ||
    router.pathname.includes("/professions/") ||
    router.pathname.includes("/enterprises/") ||
    router.pathname.includes("/educational-establishments/") ||
    router.pathname.includes("/internships-and-practices/");

  const isShowBorder =
    router.pathname === "/vacancy" ||
    router.pathname === "/professions" ||
    router.pathname === "/enterprises" ||
    router.pathname === "/educational-establishments" ||
    router.pathname === "/internships-and-practices" ||
    isEntityInfoPage;

  return (
    <header
      className={cx(styles.header, {
        [styles.borderBottom]: isShowBorder,
      })}
    >
      <Container>
        <div className={styles.headerInnerWrapper}>
          <div className={styles.wrapperInput}>
            <Input
              onFocus={() => setIsVisible(true)}
              onBlur={() => setIsVisible(false)}
              borderBottomNone={isVisible}
              placeholder="Введите название вакансии, компании..."
              firstIcon={<MagnifierIcon />}
            />
            <div
              className={cx(styles.wrapperSearchFoundBlock, {
                [styles.visibleSearchFoundBlock]: isVisible,
              })}
            >
              <SearchFoundBlock />
            </div>
          </div>
          <Navigation
            isActiveCareerLink={isShowCareerNav}
            setIsActiveCareerLink={setIsShowCareerNav}
          />
          <Link href="/" className={styles.title}>
            Найти<span style={{ color: "#0B7BFF" }}>.ру</span>
          </Link>
        </div>
      </Container>
      <CareerNavigation isShow={isShowCareerNav} handleClose={() => setIsShowCareerNav(false)} />
    </header>
  );
};
