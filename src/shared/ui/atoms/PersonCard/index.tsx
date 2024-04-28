import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC, forwardRef } from "react";

import styles from "./styles.module.scss";
import { PersonCardProps } from "./types";

export const PersonCard: FC<PersonCardProps> = forwardRef(({ name, surname, post, photo }, ref) => (
  <div ref={ref} className={styles.personCard}>
    <Image className={styles.personImage} src={photo} alt={`Фотография ${name} ${surname}`} fill />
    <h3 className={styles.title}>
      {name} {surname}
    </h3>
    <p className={styles.additionalTest}>{post}</p>
  </div>
));

export const MPersonCard = motion(PersonCard);
