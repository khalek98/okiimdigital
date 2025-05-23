import React from "react";
import cn from "classnames";

import styles from "./Metrics.module.scss";
import GrowthIcon from "./icons/GrowthIcon";
import StartIcon from "./icons/StartIcon";
import PortfolioIcon from "./icons/PortfolioIcon";
import QualityIcon from "./icons/QualityIcon";

const metricList = [
  {
    icon: GrowthIcon,
    title: "150%",
    description: "Search revenue uplift for partner publishers",
  },
  {
    icon: StartIcon,
    title: "30M+",
    description: "Monthly CTV ad impressions delivered",
  },
  {
    icon: PortfolioIcon,
    title: "500+",
    description: "High-authority blogs in our content network",
  },
  {
    icon: QualityIcon,
    title: "100%",
    description: "Compliance with top-tier ad policies",
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className={styles.section}>
      <div className="container">
        <ul className={styles.metricList}>
          {metricList.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className={styles.metricItem}>
              <div className={styles.metricHead}>
                <div className={styles.metricIconWrapper}>
                  <Icon
                    className={cn(
                      styles.metricIcon,
                      styles[`metricIcon_${index + 1}`]
                    )}
                  />
                </div>

                <h3 className={styles.metricTitle}>{title}</h3>
              </div>

              <p className={styles.metricDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Metrics;
