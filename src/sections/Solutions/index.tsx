import React from "react";
import cn from "classnames";

import styles from "./Solutions.module.scss";
import CrossIcon from "./icons/CrossIcon";
import CheckMarkIcon from "./icons/CheckMarkIcon";

const solutionList = [
  {
    request: "Low search revenue?",
    response: "Optimized search monetization.",
  },
  {
    request: "Unmonetized CTV traffic?",
    response: "Programmatic CTV ads.",
  },
  {
    request: "Limited brand visibility?",
    response: "Premium blog placements.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={styles.title}>That`s what we can help with</h2>
          <p className={styles.subtitle}>We solve your business problems</p>
        </div>

        <ul className={styles.solutionList}>
          {solutionList.map(({ request, response }) => (
            <li key={request} className={styles.solutionItem}>
              <div className={cn(styles.solutionWrapper, styles.request)}>
                <CrossIcon className={styles.solutionIcon} />
                <span className={styles.solutionRequest}>{request}</span>
              </div>

              <div className={cn(styles.solutionWrapper, styles.response)}>
                <CheckMarkIcon className={styles.solutionIcon} />
                <span className={styles.solutionResponse}>{response}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Solutions;
