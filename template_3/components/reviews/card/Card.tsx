import styles from './card.module.scss';
import UserImage from './user-image/UserImage';
import UserDescription from './user-description/UserDescription';
import Text from '@/components/text';

interface ICard {
  userName: React.ReactNode,
  starNumber: React.ReactNode,
  userComment: React.ReactNode,
  position: string
}

const Card: React.FC<ICard> = ({ userName, starNumber, userComment, position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__user}>
        <UserImage position={position}/>
        <UserDescription userName={userName} starNumber={starNumber}/>
      </div>
      <Text className={styles.card__comment} weight='medium' align='left'>
        {userComment}
      </Text>
    </div>
  )
}

export default Card;