import cn from "classnames";
import { animateScroll } from "react-scroll";

import Logo from "@icons/logo.svg";

import styles from "./footer.module.scss";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      smooth: true,
    });
  };

  return (
    <footer id="footer" className={styles.Footer}>
      <div className={cn("container", styles.Container)}>
        <div className={styles.FooterContent}>
          <Link href="/">
            <Logo className={styles.Logo} />
          </Link>

          <div className={styles.Info}>
            <div className={styles.InfoItem}>
              <div className={styles.InfoTitle}>Email:</div>
              <a
                className={styles.InfoValue}
                href="mailto:info@okiimdigital.com"
              >
                info@okiimdigital.com
              </a>
            </div>
            <div className={styles.InfoItem}>
              <div className={styles.InfoTitle}>Address:</div>

              <address className={styles.InfoValue}>
                Herengracht 124-128, 1015 BT <br />
                Amsterdam, Netherlands
              </address>
            </div>
          </div>

          <button className={styles.ArrowWrapper} onClick={scrollToTop}>
            <ArrowIcon className={styles.ArrowIcon} />
          </button>
        </div>

        <div className={styles.FooterBottom}>
          <p className={styles.Copyright}>
            © {new Date().getFullYear()} Okiimdigital Ltd, All Right Reserved.
          </p>

          <div className={styles.Links}>
            <a className={styles.Link} href="/cookies">
              Cookies Policy
            </a>
            <a className={styles.Link} href="/policy">
              Privacy Policy
            </a>
            <a className={styles.Link} href="/terms">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
