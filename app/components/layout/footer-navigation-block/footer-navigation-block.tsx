import styles from './footer-navigation-block.module.scss'

interface FoterNavigation {
    title: string;
    subTitlesArray: Array<string>;
  }
  
  const FoterNavigationBlock = ({ subTitlesArray, title }: FoterNavigation) => {
    return (
      <div className={styles.navigationBlock}>
        <h1 className={styles.title}>{title}</h1>
        {subTitlesArray.map((linkText: string, index: number) => (
          <p key={`footer-link-text${index}`} className={styles.subTitle}>
            {linkText}
          </p>
        ))}
      </div>
    );
  };
  export default FoterNavigationBlock
  