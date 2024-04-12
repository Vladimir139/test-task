import * as Progress from "@radix-ui/react-progress";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const ProgressBar: FC = () => {
  const [progress] = React.useState(13);

  return (
    <Progress.Root className={styles.progressRoot} value={progress}>
      <Progress.Indicator
        className={styles.progressIndicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};
