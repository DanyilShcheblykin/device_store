import Link from 'next/link';
import styles from './footer-navigation-block.module.scss'

interface FoterNavigation {
    title: string;
    subTitlesArray: Array<string>;
  }
  
  const FooterNavigationBlock = ({ subTitlesArray, title }: FoterNavigation) => {
    return (
      <div className={styles.navigationBlock}>
        <h1 className={styles.title}>{title}</h1>
        {subTitlesArray.map((linkText: string, index: number) => (
          <Link href="/" key={`footer-link-text${index}`} className={styles.subTitle}>
            {linkText}
          </Link>
        ))}
      </div>
    );
  };
  export default FooterNavigationBlock
  