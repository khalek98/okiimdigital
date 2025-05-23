import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./WhatWeDo.module.scss";

interface FaqItem {
  title: string;
  subtitle: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    title: "Maximizing the Value of Digital Traffic",
    subtitle:
      "Innovative Monetization & Optimization Solutions for Digital Publishers",
    answer:
      "Our strong partnerships with media houses, publishers, and digital platforms allow us to turn every click, view, and impression into real revenue. Whether your audience finds you through search or engages with your content on connected TVs, we ensure you're monetizing every opportunity — smartly, compliantly, and profitably.",
  },
  {
    title: "Search Monetization",
    subtitle: "Turn High-Intent Queries Into High-Yield Revenue",
    answer:
      "We help publishers optimize and monetize their search traffic through tailored strategies that connect intent-driven users with premium ads. Our technology and partner ecosystem ensure your search inventory delivers results — with higher RPMs, clean user experiences, and compliance with top-tier demand sources.",
  },
  {
    title: "CTV Advertising",
    subtitle: "Monetize Streaming Audiences With Premium Video Ads",
    answer:
      "We enable publishers and streaming platforms to deliver programmatic video ads across smart TVs apps — maximizing yield while enhancing the viewer experience. Backed by strong demand connections and transparent reporting, we help you grow revenue where people are watching most.",
  },
  {
    title: "Exclusive Exposure on High-Impact Blogs",
    subtitle: "Position Your Brand at the Heart of Influential Conversations",
    answer:
      "Leverage the power of exclusive blogs that drive measurable results. Our team builds a personalized product page and places it in front of loyal, interested readers. Boost awareness and increase conversions with our strategic blog promotions.",
  },
];

const WhatWeDo = () => {
  const [showIndex, setShowIndex] = React.useState(0);

  const toggleShow = useCallback((index: number) => {
    setShowIndex(index);
  }, []);

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={styles.title}>What we do</h2>
          <h3 className={styles.subtitle}>Our Services</h3>
          <p className={styles.description}>
            We help digital publishers grow revenue through smart, effective
            monetization — from search and CTV to blog placements. Our solutions
            boost performance and stay fully compliant, without hurting user
            experience.
          </p>
          <Link href="/contact" className={styles.button}>
            Let’s Start
          </Link>
        </div>

        <ul className={styles.faqList}>
          {faqList.map((item, index) => (
            <FaqComponent
              key={index}
              faqItem={item}
              isActive={showIndex === index}
              onClick={() => toggleShow(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;

const FaqComponent = ({
  faqItem,
  isActive,
  onClick,
}: {
  faqItem: FaqItem;
  isActive: boolean;
  onClick: () => void;
}) => {
  const faqBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && faqBodyRef?.current) {
      const scrollHeight = faqBodyRef.current.scrollHeight;
      faqBodyRef.current.style.height = `${scrollHeight}px`;
    } else {
      faqBodyRef.current!.style.height = "0px";
    }
  }, [isActive, faqBodyRef]);

  return (
    <li className={styles.faqItem}>
      <div onClick={onClick} className={styles.faqHead}>
        <h3 className={styles.faqTitle}>{faqItem.title}</h3>
        <div className={cn(styles.faqToggle, { [styles.active]: isActive })}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        ref={faqBodyRef}
        className={cn(styles.faqBody, { [styles.show]: isActive })}
      >
        <p className={styles.faqSubtitle}>{faqItem.subtitle}</p>
        <p className={styles.faqAnswer}>{faqItem.answer}</p>
      </div>
    </li>
  );
};
