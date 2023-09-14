import styles from './user-description.module.scss';
import Text from '@/components/text';

interface IUserDescription {
  userName: React.ReactNode,
  starNumber: React.ReactNode,
}

const UserDescription: React.FC<IUserDescription> = ({ userName, starNumber }) => {
  return (
    <div className={styles.user_description}>
      <Text className={styles.user_description__user_name} weight='medium'>
        {userName}
      </Text>
      <div className={styles.user_description__star}>
        <div className={styles.user_description__star_image}></div>
        <Text className={styles.user_description__star_number} weight='medium'>
          {starNumber}
        </Text>
      </div>
    </div>
  )
}

export default UserDescription;