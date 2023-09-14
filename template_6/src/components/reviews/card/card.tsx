import styles from './card.module.scss';
import Text from '@/components/text';
import cn from 'classnames';
import Image from 'next/image';
import StarImage from '@/public/icons/star_icon.svg';

interface ICard {
  userName: React.ReactNode,
  userComment: React.ReactNode,
  className?: string,
  numberOfStars: number
}

const Card: React.FC<ICard> = ({ userName, userComment, className, numberOfStars }) => {
  const cardClassName = cn(styles.card, className);

  const starsArray = Array.from({ length: numberOfStars }, (_, index) => (
    <Image src={StarImage} key={index} className={styles.card__star} alt='star' />
  ));
  return (
    <div className={cardClassName}>
      <div className={styles.card__stars}>
        {starsArray}
      </div>
      <Text className={styles.card__user_comment} align='center' size='sm'>
        {userComment}
      </Text>
      <Text className={styles.card__user_name} weight='semiBold' size='sm' align='center'>
        {userName}
      </Text>
    </div>
  )
}

export default Card;