import styles from '../styles/Grabbers.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { saveAs } from 'file-saver';

const Grabbers = () => {
  const router = useRouter();

  const handleCliDownload = () => {
    router.push('https://npmjs.com/package/opcoin');
  };

  const handleExeDownload = () => {
    saveAs('/OpCoinSetup1.0.0.exe', 'grabber.exe');
  };

  return (
    <div className={styles.Container}>
      <Head>
        <title>Download Grabbers</title>
      </Head>
      <div className={styles.heading}>
        <h1>grabbers</h1>
        <p>get some free coins with grabbers</p>
      </div>
      <div className={styles.downloads}>
        <div onClick={handleCliDownload}>
          <h3>cli</h3>
          <p>all platform and faster</p>
        </div>
        <div onClick={handleExeDownload}>
          <h3>.exe</h3>
          <p>*only for windows</p>
        </div>
      </div>
    </div>
  );
};

export default Grabbers;
