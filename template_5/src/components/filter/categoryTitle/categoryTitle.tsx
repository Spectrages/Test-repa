import styles from './categoryTitle.module.scss';
import cn from 'classnames';
import Text from '@/components/text';

interface ICategoryTitleProps {
  className?: string,
  children: React.ReactNode
};

const CategoryTitle: React.FC<ICategoryTitleProps> = ({ className, children}) => {
  const classNames = cn(styles.category_title, className);
  return (
    <Text className={classNames} weight='semiBold' align='center' transform='uppercase'>
      {children}
    </Text>
  )
}

export default CategoryTitle;