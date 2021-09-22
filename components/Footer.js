import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterSubDivision}>
        <h3>Useful Link</h3>
        <Link href="/transfer">Create a transfer</Link>
        <Link href="/grabbers">Grabbers</Link>
      </div>
      <div className={styles.FooterSubDivision}>
        <h3>Grabbers</h3>
        <Link href="/grabbers">Grabbers CLI</Link>
        <Link href="/grabbers">Windows</Link>
      </div>
      <div className={styles.FooterSubDivision}>
        <h3>Developer</h3>
        <Link href="/developer">Implementation</Link>
        <a href="https://github.com/AryaAnish121">Github</a>
      </div>
      <div className={styles.FooterSubDivision}>
        <h3>Transfer</h3>
        <Link href="/transfer">Make a transfer</Link>
        <Link href="/balance">Check coins</Link>
      </div>
    </div>
  );
};

export default Footer;
