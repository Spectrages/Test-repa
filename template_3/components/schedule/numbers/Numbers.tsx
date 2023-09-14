import styles from './numbers.module.scss';

const Numbers = () => {
  const numbersArray = [31, 1, 2, 3, 4, 5, 6];

  return (
    <ul className={styles.numbers}>
      {numbersArray.map((number, index) => (
        <li className={styles.numbers__item} key={index}>
          {number}
        </li>
      ))}
    </ul>
  );
}

export default Numbers;