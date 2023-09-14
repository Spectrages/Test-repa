import styles from './card.module.scss';
import Text from '@/components/text';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';

interface ICard {
  userName: React.ReactNode,
  userComment: React.ReactNode,
  date: React.ReactNode,
  source: StaticImageData,
  className?: string
}

const Card: React.FC<ICard> = ({ userName, userComment, source, className, date }) => {
  const cardClassName = cn(styles.card, className);
  return (
    <div className={cardClassName}>
      <Text className={styles.card__user_comment} size='xs' align='left' weight='medium'>
        {userComment}
      </Text>
      <div className={styles.card__user_info}>
        <div className={styles.card__user_description}>
          <Image className={styles.card__user_image} src={source} alt='user image' />
          <Text className={styles.card__user_name} weight='bold' size='sm' align='center'>
            {userName}
          </Text>
        </div>
        <div className={styles.card__date}>
          {date}
        </div>
      </div>
    </div>
  )
}

export default Card;