import styles from './faq.module.css';

/* eslint-disable-next-line */
export interface FaqProps {}

export function Faq(props: FaqProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Faq!</h1>
    </div>
  );
}

export default Faq;
