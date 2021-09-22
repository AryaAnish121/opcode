import styles from '../styles/404.module.css';

const Error = () => {
  return (
    <div className={styles.Container}>
      <h1>
        404 <span>Page not found</span>
      </h1>
    </div>
  );
};

export default Error;
