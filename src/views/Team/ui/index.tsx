import { motion } from "framer-motion";
import React, { FC } from "react";

import { bottomToTop100Animation } from "@/shared/lib/constants";
import { team } from "@/shared/lib/constants/team";
import { Gap, MPersonCard } from "@/shared/ui/atoms";

import styles from "./styles.module.scss";

export const TeamPage: FC = () => (
  <>
    <section>
      <p className={styles.titlePage}>Команда</p>
      <motion.div
        className={styles.teamList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {team.map((person, index) => (
          <MPersonCard
            variants={bottomToTop100Animation}
            custom={(index + 1) / 3}
            id={person.id}
            name={person.name}
            photo={person.photo}
            surname={person.surname}
            post={person.post}
          />
        ))}
      </motion.div>
    </section>
    <Gap />
  </>
);
