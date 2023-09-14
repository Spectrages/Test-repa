import styles from './category-title.module.scss';
import cn from 'classnames';
import Text from '@/components/text';

interface ICategoryTitleProps {
  className?: string,
  children: React.ReactNode
};

const CategoryTitle: React.FC<ICategoryTitleProps> = ({ className, children}) => {
  const classNames = cn(styles.category_title, className);
  return (
    <Text className={classNames} weight='medium' size='lg'>
      {children}
    </Text>
  )
}

export default CategoryTitle;