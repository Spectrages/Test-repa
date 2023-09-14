import styles from './underlines.module.scss';

interface UnderlinesProps {
  count: number;
}

const Underlines: React.FC<UnderlinesProps> = ({ count }) => {
  const underlineArray = new Array(count).fill(null);

  return (
    <ul className={styles.underlines}>
      {underlineArray.map((_, index) => (
        <li className={styles.underlines__item} key={index}></li>
      ))}
    </ul>
  );
}

export default Underlines;