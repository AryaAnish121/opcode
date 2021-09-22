import styles from '../styles/Balance.module.css';
import apiBaseUrl from '../components/apiBaseUrl';
import Head from 'next/head';
import { useState } from 'react';

const balance = () => {
  const [name, setName] = useState('check balance');

  const [details, setDetails] = useState({
    publicKey: '',
    privateKey: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${apiBaseUrl}/balance`, {
      method: 'POST',
      body: JSON.stringify({
        publicKey: details.publicKey,
        privateKey: details.privateKey,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      setName(`${data.coins} opcoins`);
    } else {
      setName(data.message);
    }
  };

  return (
    <div className={styles.Container}>
      <Head>
        <title>Check Balance</title>
      </Head>
      <form onSubmit={handleSubmit} className={styles.Modal}>
        <h3>{name}</h3>
        <input
          type="text"
          placeholder="public key"
          className={styles.publicKey}
          name="publicKey"
          value={details.publicKey}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="private key"
          name="privateKey"
          value={details.privateKey}
          onChange={handleChange}
        />
        <div className={styles.submitButton}>
          <button type="submit">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default balance;
