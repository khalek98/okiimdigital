import React from "react";
import cn from "classnames";

import styles from "./WhyChooseUs.module.scss";

import AdvertisingIcon from "./icons/AdvertisingIcon";
import RocketIcon from "./icons/RocketIcon";
import MonetizationIcon from "./icons/MonetizationIcon";
import PeopleIcon from "./icons/PeopleIcon";
import SecurityIcon from "./icons/SecurityIcon";
import MoneyIcon from "./icons/MoneyIcon";

const servicesList = [
  {
    title: "CTV Advertising",
    description: "Monetize streaming audiences through programmatic video ads.",
    icon: AdvertisingIcon,
  },
  {
    title: "Blog Placements",
    description: "Boost visibility with exposure on premium content platforms.",
    icon: RocketIcon,
  },
  {
    title: "Search Monetization",
    description:
      "Turn queries into revenue with high-performing ad placements.",
    icon: MonetizationIcon,
  },
  {
    title: "Audience Growth",
    description: "Reach more users with tailored strategies and smart tools.",
    icon: PeopleIcon,
  },
  {
    title: "Policy Compliance",
    description: "Stay aligned with ad network rules and best practices.",
    icon: SecurityIcon,
  },
  {
    title: "Revenue Optimization",
    description: "Improve yield across all traffic sources and channels.",
    icon: MoneyIcon,
  },
];

const WhyChooseUs = () => {
  const [showMore, setShowMore] = React.useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="solutions" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>We can help you with</p>
        </div>

        <ul className={styles.servicesList}>
          {servicesList.map(({ title, description, icon: Icon }, index) => (
            <li
              key={index}
              className={cn(styles.serviceItem, { [styles.show]: showMore })}
            >
              <div className={styles.serviceIconWrapper}>
                <Icon
                  className={cn(
                    styles.serviceIcon,
                    styles[`serviceIcon_${index + 1}`]
                  )}
                />
              </div>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDescription}>{description}</p>
            </li>
          ))}
        </ul>

        <p className={styles.showMore} onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
