import styles from './user-image.module.scss';
import cn from 'classnames';

interface IUserImage {
  position: string
}

enum CardPosition {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

const UserImage: React.FC<IUserImage> = ({ position }) => {
  const leftCardImage = cn(styles.user_image, styles.user_image__left_card);
  const centerCardImage = cn(styles.user_image, styles.user_image__center_card);
  const rightCardImage = cn(styles.user_image, styles.user_image__right_card);
  return (
      <>
        {position === CardPosition.LEFT ? <div className={leftCardImage}></div> : null }
        {position === CardPosition.CENTER ? <div className={centerCardImage}></div> : null }
        {position === CardPosition.RIGHT ? <div className={rightCardImage}></div> : null }
      </>
  )
}

export default UserImage;