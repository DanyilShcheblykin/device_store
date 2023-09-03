import Link from "next/link";
import styles from './header-link.module.scss'
import { HeaderLinkData } from "../header-navigation";

interface HeaderLinkProps extends HeaderLinkData {
    activePage: boolean;
    showArrow: boolean;
    makeActiveLink: (index: number) => void;
    linkIndex: number;
  }
  
const HeaderLink = ({
    href,
    label,
    showArrow,
    activePage,
    makeActiveLink,
    linkIndex,
  }: HeaderLinkProps) => {
    return (
      <li>
        <Link href={href}>
          <span
            onClick={() => makeActiveLink(linkIndex)}
            className={`${styles.link} ${activePage ? styles.activeLink : ""} ${
              showArrow ? styles.arrowLink : ""
            }`}
          >
            {label} {showArrow && <span className={styles.arrowIcon}></span>}
          </span>
        </Link>
      </li>
    );
  };

  export default HeaderLink