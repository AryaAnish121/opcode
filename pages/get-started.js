import { useState } from 'react';
import styles from '../styles/GetStarted.module.css';
import apiBaseUrl from '../components/apiBaseUrl';
import Head from 'next/head';

const getStarted = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('your name');
  const [nameEntered, setNameEntered] = useState(false);
  const [details, setDetails] = useState({
    publicKey: '',
    privateKey: '',
  });

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(false);
  };

  const handleClick = async () => {
    const res = await fetch(`${apiBaseUrl}/new-user`, {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      setDetails({
        publicKey: data.publicKey,
        privateKey: data.privateKey,
      });
      setError(false);
      setNameEntered(true);
    } else {
      setError(true);
      setPlaceholder(data.message);
    }
  };

  return (
    <div className={styles.Container}>
      <Head>
        <title>Get started with OP coin</title>
      </Head>
      <div className={`${styles.Modal} ${nameEntered && styles.bigBox}`}>
        {nameEntered ? (
          <>
            <div className={styles.keys}>
              <p>Public Key</p>
              <input type="text" disabled={true} value={details.publicKey} />
            </div>
            <div className={styles.keys}>
              <p>Private Key</p>
              <input type="text" disabled={true} value={details.privateKey} />
            </div>
            <p className={styles.warning}>
              Please note these key, you may not see it in the furture
            </p>
          </>
        ) : (
          <>
            <input
              type="name"
              name="name"
              placeholder={placeholder}
              onChange={handleChange}
              value={name}
              className={`${error && styles.warningColor}`}
            />
            <button type="submit" onClick={handleClick}>
              &rarr;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default getStarted;
