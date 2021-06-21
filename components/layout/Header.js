import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <h2 className={styles.title}>Star</h2>
          <p className={styles.subtitle}>A VISUAL DATABASE</p>
          <h2 className={styles.title}>Wars</h2>
        </div>
      </nav>
    </header>
  );
}
