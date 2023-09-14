import styles from './cleaning.module.scss';
import CleaningImage from './cleaning-image/CleaningImage';
import CleaningTextCard from './cleaning-text-card/CleaningTextCard';
import MobileCleaningTextCard from './mobile-cleaning-text-card/MobileCleaningTextCard';
import Underline from '../underline/Underline';
import roomCleaningImage from '../../public/images/room-cleaning.png';
import kitchenCleaningImage from '../../public/images/kitchen-cleaning.png';
import cleaningTheBathroomImage from '../../public/images/cleaning-the-bathroom.png';
import hallwayCleaningImage from '../../public/images/hallway-cleaning.png';
import Text from '../text';

const Cleaning = () => {
  const imagesData = [
    {
      source: roomCleaningImage,
      title: 'Room cleaning',
    },
    {
      source: kitchenCleaningImage,
      title: 'Kitchen cleaning',
    },
    {
      source: cleaningTheBathroomImage,
      title: 'Cleaning the bathroom',
    },
    {
      source: hallwayCleaningImage,
      title: 'Hallway cleaning',
    },
  ];
  const textCardsData = [
    {
      title: 'Room cleaning',
      description: [
        'Dusting',
        'Vacuuming',
        'Making the bed',
        'Organizing items',
        'Organizing items Wiping down surfaces',
        'Cleaning the bathroom',
      ]
    },
    {
      title: 'Kitchen cleaning',
      description: [
        'Washing dishes',
        'Wiping down countertops and cabinets',
        'Cleaning the sink and faucet',
        'Sweeping and mopping the floor',
        'Cleaning the stove and oven Taking out the trash'
      ]
    },
    {
      title: 'Cleaning the bathroom',
      description: [
        'Cleaning the toilet, shower/tub, sink and countertops',
        'Wiping down mirrors',
        'Mopping the floor',
        'Restocking supplies',
        'Cleaning the floor'
      ]
    },
    {
      title: 'Hallway cleaning',
      description: [
        'Wiping down surfaces sweeping or vacuuming the floor Organizing shoes and outerwear',
        'Cleaning any mirrors or windows',
        'Dusting any decorations or picture frames'
      ]
    },
  ];
  return (
    <div id='services' className={styles.cleaning}>
      <div className={styles.container}>
        <Text className={styles.cleaning__title} weight='bold' size='xl'>
          Services
        </Text>
        <div className={styles.cleaning__mobile_text_cards_section}>
          {textCardsData.map((item, index) => (
            <MobileCleaningTextCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className={styles.cleaning__images_section}>
          {imagesData.map((item, index) => (
            <CleaningImage
              key={index}
              source={item.source}
              title={item.title}
            />
          ))}
        </div>
        <div className={styles.cleaning__text_cards_section}>
          {textCardsData.map((item, index) => (
            <CleaningTextCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className={styles.cleaning__underline}>
          <Underline />
        </div>
      </div>
    </div>
  );
};

export default Cleaning;