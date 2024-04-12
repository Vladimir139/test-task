import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { DeleteIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";

export const SearchFoundBlock: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.entitiesFoundSphere}>
      <p className={styles.titleSpheres}>Недавние запросы</p>
      <ul className={styles.listFoundEntities}>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.entitiesFoundSphere}>
      <p className={styles.titleSpheres}>Учебные заведения</p>
      <ul className={styles.listFoundEntities}>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.entitiesFoundSphere}>
      <p className={styles.titleSpheres}>Предприятия</p>
      <ul className={styles.listFoundEntities}>
        <li className={styles.foundEntity}>
          <Link href="/" className={styles.wrapperEntity}>
            <div className={styles.leftWrapperFoundEntity}>
              <Image src="/" alt="" fill className={styles.logoEntity} />
              <p>ЯГТУ - Ярославский государственный...</p>
            </div>
            <div>
              <p>Ярославль</p>
              <DeleteIcon />
            </div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.entitiesNotFoundSpheres}>
      <p className={styles.titleNotSpheres}>
        Стажировки, вакансии, практики, профессии не найдены :(
      </p>
    </div>
  </div>
);
