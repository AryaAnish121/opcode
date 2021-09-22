import styles from '../styles/Transfer.module.css';
import apiBaseUrl from '../components/apiBaseUrl';
import Head from 'next/head';
import { useState } from 'react';

const transfer = () => {
  const [disabled, setDisabled] = useState(false);
  const [title, setTitle] = useState('transfer');
  const [details, setDetails] = useState({
    publicKey: '',
    reciverPublicKey: '',
    privateKey: '',
    amount: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);

    const res = await fetch(`${apiBaseUrl}/transfer`, {
      method: 'POST',
      body: JSON.stringify({
        publicKey: details.publicKey,
        privateKey: details.privateKey,
        toPublicKey: details.reciverPublicKey,
        amount: details.amount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    setDisabled(false);
    setTitle(data.message);

    setDetails({
      publicKey: '',
      reciverPublicKey: '',
      privateKey: '',
      amount: '',
    });
  };

  return (
    <div className={styles.Container}>
      <Head>
        <title>Transfer</title>
      </Head>
      <form
        onSubmit={handleSubmit}
        className={`${styles.Modal} ${disabled && styles.disabled}`}
      >
        <h3>{title}</h3>
        <input
          type="text"
          placeholder="reciver's public key"
          className={styles.publicKey}
          name="reciverPublicKey"
          value={details.reciverPublicKey}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="your public key"
          name="publicKey"
          value={details.publicKey}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="your private key"
          name="privateKey"
          value={details.privateKey}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="amount"
          name="amount"
          value={details.amount}
          onChange={handleChange}
        />
        <div className={styles.submitButton}>
          <button type="submit">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default transfer;
