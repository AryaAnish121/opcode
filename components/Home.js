import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/get-started');
  };

  return (
    <div className={styles.HomeContent}>
      <div className={styles.HomeMainContent}>
        <h1>one currency for all your transactions</h1>
        <p>
          op coin is an open source crypto like currency. transfer money with
          ease and no fees, so what are you waiting for, get started in a few
          clicks.
        </p>
        <button onClick={handleRedirect}>get started</button>
      </div>
    </div>
  );
};

export default Home;
