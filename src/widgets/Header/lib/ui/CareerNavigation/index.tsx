import cx from "classnames";
import { useRouter } from "next/router";
import React, { FC, useRef } from "react";

import { careerNavItems } from "@/shared/lib/constants/navigationItems";
import { useOnClickOutside } from "@/shared/lib/hooks";
import { NavReview } from "@/shared/ui/atoms";
import { CardNavigation } from "@/widgets/Header/lib/ui/CardNavigation";

import styles from "./styles.module.scss";
import { CareerNavigationProps } from "./types";

export const CareerNavigation: FC<CareerNavigationProps> = ({ isShow, handleClose }) => {
  const ref = useRef(null);
  const router = useRouter();

  useOnClickOutside(ref, handleClose);

  const isMorePositionTop =
    router.pathname === "/vacancy" ||
    router.pathname === "/professions" ||
    router.pathname === "/enterprises" ||
    router.pathname === "/educational-establishments" ||
    router.pathname === "/internships-and-practices";

  return (
    <div
      ref={ref}
      className={cx(styles.overlay, {
        [styles.isOpenOverlay]: isShow,
      })}
    >
      <section
        className={cx(styles.careerNavigation, {
          [styles.isShow]: isShow,
          [styles.positionMoreTop]: isShow && isMorePositionTop,
        })}
      >
        <div className={styles.innerWrapper}>
          <div className={styles.leftWrapper}>
            {careerNavItems.map((navItem) => (
              <CardNavigation
                key={navItem.title}
                // @ts-ignore
                handleClose={handleClose}
                title={navItem.title}
                description={navItem.description}
                icon={navItem.icon}
                link={navItem.link}
              />
            ))}
          </div>
          <div className={styles.rightWrapper}>
            <NavReview
              dateReview={new Date()}
              idReview={1}
              textReview="Найти.ру сэкономили мне десятки часов поисков работы. Тут я за 2 дня нашел работу, которую искал 3 месяца! Так же тут можно посмотреть стажировки и практики."
              starsRating={5}
              userLocation="Краснодар, Россия"
              userName="Сергей Левцов"
              userPhoto="/"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
