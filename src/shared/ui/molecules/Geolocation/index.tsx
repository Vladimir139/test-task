import Link from "next/link";
import React, { FC } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";

import { PhoneIcon, PointIcon } from "@/shared/lib/icons";

import styles from "./styles.module.scss";
import { GeolocationProps } from "./types";

export const Geolocation: FC<GeolocationProps> = ({
  fullNameLocation,
  latitude,
  longitude,
  phone,
  mapLink,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.lineInfo}>
      <PointIcon /> <p>{fullNameLocation}</p>
    </div>
    <div className={styles.mapWindow}>
      {/* @ts-ignore */}
      <YMaps>
        {/* @ts-ignore */}
        <Map
          className={styles.customMap}
          defaultState={{
            center: [latitude, longitude],
            zoom: 9,
          }}
        >
          {/* @ts-ignore */}
          <Placemark defaultGeometry={[latitude, longitude]} />
        </Map>
      </YMaps>
    </div>
    <div className={styles.bottomLine}>
      <div className={styles.phoneInfo}>
        <PhoneIcon /> <Link href={`tel:${phone}`}>+{phone}</Link>
      </div>
      <Link href={mapLink} className={styles.mapLink} target="_blank">
        Карта
      </Link>
    </div>
  </div>
);
