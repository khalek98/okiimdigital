import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import LogoSvg from "@/assets/icons/logo.svg";
import { HeaderInterface } from "@/info/info.types";

import styles from "./Header.module.scss";
import { info } from "@/info";
import { useAppContext } from "@/context/AppContext";

const Header: FC<HeaderInterface> = ({ darkBG }) => {
  const { setFormStatus } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [fixMenu, setFixMenu] = useState<boolean>(false);
  const HeaderRef = useRef<HTMLElement>(null);
  const MobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setFixMenu(true);
      } else {
        setFixMenu(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  }, [isMenuOpen, MobileNavRef]);

  useEffect(() => {
    if (MobileNavRef.current) {
      if (isMenuOpen) {
        MobileNavRef.current.style.height = `${MobileNavRef.current?.scrollHeight}px`;
      } else {
        MobileNavRef.current.style.height = "0px";
      }
    }
  }, [isMenuOpen, MobileNavRef]);

  return (
    <>
      <header
        ref={HeaderRef}
        className={cn(
          styles.Header,
          { [styles.fixed]: fixMenu },
          { [styles.FiledBg]: darkBG },
          {
            [styles.open]: isMenuOpen,
          }
        )}
      >
        <div className={styles.Inner}>
          <Link onClick={onCloseMenu} href="/" className={styles.LogoWrapper}>
            <LogoSvg
              className={cn(styles.Logo, { [styles.open]: isMenuOpen })}
            />
          </Link>

          <nav className={styles.Nav}>
            <ul role="navigation" className={styles.Menu}>
              {info.menuList.map((item) => (
                <li key={item.anchor} className={styles.MenuItem}>
                  <a className={styles.MenuLink} href={`/#${item.anchor}`}>
                    {item.menuName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contacts"
            onClick={() => {
              setFormStatus("hold");
            }}
            className={styles.buttonContact}
          >
            Contact Us
          </Link>

          <button
            onClick={toggleMenu}
            className={cn(styles.Burger, { [styles.open]: isMenuOpen })}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          ref={MobileNavRef}
          className={cn(styles.Nav, styles.Mobile, {
            [styles.open]: isMenuOpen,
          })}
        >
          <ul role="navigation" className={styles.Menu}>
            {info.menuList.map((item) => (
              <li key={item.anchor} className={styles.MenuItem}>
                <a
                  onClick={onCloseMenu}
                  className={styles.MenuLink}
                  href={`/#${item.anchor}`}
                >
                  {item.menuName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        onClick={onCloseMenu}
        className={cn(styles.overlay, { [styles.open]: isMenuOpen })}
      ></div>
    </>
  );
};

export default Header;
