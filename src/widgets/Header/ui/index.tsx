import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { MagnifierIcon } from "@/shared/lib/icons";
import { Container, Input } from "@/shared/ui/atoms";
import { Navigation } from "@/widgets/Header/lib/ui";
import { CareerNavigation } from "@/widgets/Header/lib/ui/CareerNavigation";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  const [isShowCareerNav, setIsShowCareerNav] = useState(false);
  const router = useRouter();

  const isShowBorder =
    router.pathname === "/vacancy" ||
    router.pathname === "/professions" ||
    router.pathname === "/enterprises" ||
    router.pathname === "/educational-establishments" ||
    router.pathname === "/internships-and-practices";

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
              placeholder="Введите название вакансии, компании..."
              firstIcon={<MagnifierIcon />}
            />
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
