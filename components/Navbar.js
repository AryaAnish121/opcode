import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1 className={styles.Logo}>OpCoin</h1>
      <div className={styles.Links}>
        <Link href="/">Home</Link>
        <Link href="/get-started">Get Started </Link>
        <Link href="/balance">Balance</Link>
        <Link href="/transfer">Transfer</Link>
        <Link href="/grabbers">Grabbers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
