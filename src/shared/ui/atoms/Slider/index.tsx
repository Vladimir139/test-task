import * as Slider from "@radix-ui/react-slider";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { SliderComponentProps } from "./types";

export const SliderComponent: FC<SliderComponentProps> = ({ defaultValue, min, max, step }) => (
  <Slider.Root
    className={styles.sliderRoot}
    defaultValue={defaultValue}
    max={max}
    min={min}
    step={step}
  >
    <Slider.Track className={styles.sliderTrack}>
      <Slider.Range className={styles.sliderRange} />
    </Slider.Track>
    <Slider.Thumb className={styles.sliderThumb} aria-label="Volume" />
    {defaultValue.length === 2 && (
      <Slider.Thumb className={styles.sliderThumb} aria-label="Volume" />
    )}
  </Slider.Root>
);
