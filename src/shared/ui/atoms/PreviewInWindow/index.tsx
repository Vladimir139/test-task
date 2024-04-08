import cx from "classnames";
import Image from "next/image";
import React, { FC } from "react";

import { CloseIcon, ShareIcon } from "@/shared/lib/icons";
import { AdditionalInformation, Button, Container, Gap, TagsList } from "@/shared/ui/atoms";
import { CardOtherOffer } from "@/shared/ui/atoms/CardOtherOffer";

import styles from "./styles.module.scss";
import { PreviewInWindowProps } from "./types";

export const PreviewInWindow: FC<PreviewInWindowProps> = ({ entity, handleClose, isOpen }) => (
  <div
    onClick={handleClose}
    className={cx(styles.overlay, {
      [styles.isOpenOverlay]: isOpen,
    })}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={cx(styles.content, {
        [styles.isOpenContent]: isOpen,
      })}
    >
      <span className={styles.closeBtn} onClick={handleClose}>
        <CloseIcon />
      </span>
      <Container size="normal">
        <div className={styles.innerWrapper}>
          <div className={styles.leftWrapper}>
            <section className={styles.header}>
              <div className={styles.topLineHeader}>
                <h2 className={styles.mainTitle}>{entity?.name}</h2>
                <div className={styles.userActions}>
                  <Button size="medium" theme="blue">
                    Подать заявку
                  </Button>
                  <Button theme="outline" size="medium">
                    <ShareIcon />
                  </Button>
                </div>
              </div>
              <div className={styles.entityInfo}>
                <Image
                  src={entity?.icon}
                  // alt={`${entity?.name} logo`}
                  alt="logo"
                  fill
                  className={styles.logo}
                />
                <div className={styles.wrapperAdditionalInformation}>
                  <AdditionalInformation
                    additionalText={[
                      { text: /* entity.enterprise.name || */ "name enterprise" },
                      { text: entity?.type !== "profession" ? entity?.city : "" },
                    ]}
                    textSize="medium"
                  />
                  <TagsList tags={entity?.tags || []} />
                </div>
              </div>
            </section>
            <section>
              <Gap />
              <h2>Description...</h2>
              {entity?.description}
            </section>
          </div>
          <div className={styles.rightWrapper}>
            <CardOtherOffer
              title="Главный UI Дизайнер"
              subTitle={[{ text: "Gojek" }, { text: "Джaкарта, Индонезия" }]}
              dateRecord={new Date()}
              additionalText={[{ text: "521 Претендентов" }]}
              tags={[{ name: "Fulltime" }, { name: "Onsite" }, { name: "3-5 years" }]}
              icon="/"
              salary={{ value: [10000, 60000], salaryCurrency: "rub", salaryPeriod: "year" }}
            />
          </div>
        </div>
      </Container>
    </div>
  </div>
);
