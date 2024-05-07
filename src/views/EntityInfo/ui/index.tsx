import React, { FC } from "react";

import { AdvantagesOfTheEntity, CardOtherOffer, Gap, ShortBlockInfo } from "@/shared/ui/atoms";
import { Geolocation, StaffEntity } from "@/shared/ui/molecules";
import { HeaderEntityInfo } from "@/shared/ui/templates";
import { Section } from "@/views/EntityInfo/lib/ui";
import { EntityInfoPageProps } from "@/views/EntityInfo/ui/types";

import styles from "./styles.module.scss";

export const EntityInfoPage: FC<EntityInfoPageProps> = () => (
  <div>
    <HeaderEntityInfo
      blocksInfo={{
        urlSite: "severmash.ru",
        urlSiteTitle: "severmash.ru",
        city: "Рыбинск",
        sizeEntity: "10-50 Сотрудников",
        specialization: "Производство труб",
      }}
      title="СЕВЕРМАШ"
      logo="/"
      additionalInformation="Краткое описание компании"
      contacts={[]}
    />
    <div className={styles.innerWrapper}>
      <div className={styles.leftWrapper}>
        <Section title="О СЕВЕРМАШ">
          <div>description all</div>
        </Section>
        <Section title="Вакансии от СЕВЕРМАШ" linkAll="/vacanry">
          <CardOtherOffer
            title="Главный UI Дизайнер"
            subTitle={[{ text: "Gojek" }, { text: "Джaкарта, Индонезия" }]}
            dateRecord={new Date()}
            additionalText={[{ text: "521 Претендентов" }]}
            tags={[{ name: "Fulltime" }, { name: "Onsite" }, { name: "3-5 years" }]}
            icon="/"
            salary={{ value: [10000, 60000], salaryCurrency: "rub", salaryPeriod: "year" }}
          />
        </Section>
        <Section title="Приемущества и льготы">
          <AdvantagesOfTheEntity
            advantages={[
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
              { icon: "icon", text: "Льготы по здоровью" },
            ]}
          />
        </Section>
        <Section title="Геолокация">
          <Geolocation
            phone="79123456789"
            fullNameLocation="ЯГТУ, Московский проспект, Ярославль, Российская Федерация "
            latitude={57.627132}
            longitude={39.884776}
            mapLink={`https://yandex.ru/maps/?rtext=~${57.627132}%2C${39.884776}`}
          />
        </Section>
      </div>
      <div className={styles.rightWrapper}>
        <Section title="сотрудники СЕВЕРМАШ">
          <StaffEntity
            staff={[
              {
                id: 1,
                photo: "/",
                name: "Иван",
                surname: "Абрамович",
                middleName: "Юрьевич",
                position: "Основатель СЕВЕРМАШ",
                contactStaff: { name: "Иван Юрьевич", contact: "7-777-777-777", type: "phone" },
              },
              {
                id: 2,
                photo: "/",
                name: "Иван",
                surname: "Абрамович",
                middleName: "Юрьевич",
                position: "Основатель СЕВЕРМАШ",
                contactStaff: { name: "Иван Юрьевич", contact: "7-777-777-777", type: "phone" },
              },
              {
                id: 3,
                photo: "/",
                name: "Иван",
                surname: "Абрамович",
                middleName: "Юрьевич",
                position: "Основатель СЕВЕРМАШ",
                contactStaff: { name: "Иван Юрьевич", contact: "7-777-777-777", type: "phone" },
              },
              {
                id: 4,
                photo: "/",
                name: "Иван",
                surname: "Абрамович",
                middleName: "Юрьевич",
                position: "Основатель СЕВЕРМАШ",
                contactStaff: { name: "Иван Юрьевич", contact: "7-777-777-777", type: "phone" },
              },
              {
                id: 5,
                photo: "/",
                name: "Иван",
                surname: "Абрамович",
                middleName: "Юрьевич",
                position: "Основатель СЕВЕРМАШ",
                contactStaff: { name: "Иван Юрьевич", contact: "7-777-777-777", type: "phone" },
              },
            ]}
          />
        </Section>
        <Section title="Схожие предложения">
          <ul className={styles.anotherOffers}>
            <li>
              <ShortBlockInfo
                isBig
                isIconEnd
                textSizeTitle="defaultSmall"
                textSizeSubTitle="defaultSmall"
                icon="/"
                title="Главный UI Дизайнер"
                subTitle={[{ text: "Gojek • Джaкарта, Индонезия" }]}
              />
            </li>
            <li>
              <ShortBlockInfo
                isBig
                isIconEnd
                textSizeTitle="defaultSmall"
                textSizeSubTitle="defaultSmall"
                icon="/"
                title="Главный UI Дизайнер"
                subTitle={[{ text: "Gojek • Джaкарта, Индонезия" }]}
              />
            </li>
            <li>
              <ShortBlockInfo
                isBig
                isIconEnd
                textSizeTitle="defaultSmall"
                textSizeSubTitle="defaultSmall"
                icon="/"
                title="Главный UI Дизайнер"
                subTitle={[{ text: "Gojek • Джaкарта, Индонезия" }]}
              />
            </li>
            <li>
              <ShortBlockInfo
                isBig
                isIconEnd
                textSizeTitle="defaultSmall"
                textSizeSubTitle="defaultSmall"
                icon="/"
                title="Главный UI Дизайнер"
                subTitle={[{ text: "Gojek • Джaкарта, Индонезия" }]}
              />
            </li>
          </ul>
        </Section>
      </div>
    </div>
    <Gap />
    <Gap />
  </div>
);
