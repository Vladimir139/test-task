import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { getMonth } from "@/shared/lib/helpers/month-date-format";
import { StarIcon } from "@/shared/lib/icons";
import { ArrowXIcon } from "@/shared/lib/icons/Arrows/ArrowX";

import styles from "./styles.module.scss";
import { NavReviewProps } from "./types";

export const NavReview: FC<NavReviewProps> = ({
  userPhoto,
  userName,
  userLocation,
  dateReview,
  idReview,
  textReview,
  starsRating,
}) => (
  <Link href={`/reviews/${idReview}`}>
    <div className={styles.cardNavReview}>
      <div className={styles.topWrapper}>
        <div className={styles.lineStars}>
          {Array(starsRating)
            .fill(1)
            .map((star, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <StarIcon key={index} />
            ))}
        </div>
        <div className={styles.textReview}>{textReview}</div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.userWrapper}>
            {/* <Image className={styles.userPhoto} src={userPhoto} alt={`${userName} photo`} fill /> */}
            <Image className={styles.userPhoto} src={userPhoto} alt="()" fill />
            <div className={styles.userInfo}>
              <h3 className={styles.userInfoName}>{userName}</h3>
              <p className={styles.userInfoLocation}>{userLocation}</p>
            </div>
          </div>
          <p className={styles.dateReview}>
            {dateReview.getDate()}&nbsp;
            {getMonth(dateReview)}, {dateReview.getFullYear()}
          </p>
        </div>
        <p className={styles.showMoreReviewsBtn}>
          Смотреть больше отзывов <ArrowXIcon />
        </p>
      </div>
    </div>
  </Link>
);
