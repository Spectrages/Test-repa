import styles from './carousel.module.scss';
import React, { useState, useEffect } from "react";
import Card from '../card/card';
import Arrow from './arrow/arrow';
import { useTranslation } from 'next-i18next';
import { useSwipeable } from 'react-swipeable';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false); // Состояние для отслеживания свайпа
  const { t } = useTranslation(["seo"]);

  const cardsPerPage = 3;

  const cardsData = [
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), numberOfStars: 5 },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), numberOfStars: 5 },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), numberOfStars: 5 },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), numberOfStars: 5 },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), numberOfStars: 5 },
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), numberOfStars: 5 },
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), numberOfStars: 5 },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), numberOfStars: 5 },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), numberOfStars: 5 },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), numberOfStars: 5 },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), numberOfStars: 5 },
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), numberOfStars: 5 },
    
  ];

  const startSwipe = () => {
    setIsSwiping(true);
  };

  const prevCards = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - cardsPerPage);
      startSwipe();
      setTimeout(() => {
        setIsSwiping(false);
      }, 500);
    }
  };

  const nextCards = () => {
    if (startIndex + cardsPerPage < cardsData.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + cardsPerPage);
      startSwipe();
      setTimeout(() => {
        setIsSwiping(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (startIndex === 0) {
      setIsLeftArrowDisabled(true);
    } else {
      setIsLeftArrowDisabled(false);
    }

    if (startIndex + cardsPerPage >= cardsData.length) {
      setIsRightArrowDisabled(true);
    } else {
      setIsRightArrowDisabled(false);
    }
  }, [startIndex, cardsPerPage, cardsData.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      nextCards();
    },
    onSwipedRight: () => {
      prevCards();
    },
    trackMouse: true,
  });

  const handleDotClick = (index: number) => {
    const newIndex = index * cardsPerPage;
    setStartIndex(newIndex);
  };

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  return (
    <div {...handlers}>
      <div className={styles.carousel}>
        <Arrow arrowButtonClassName={styles.carousel__left_arrow} onClick={prevCards} isDisabled={isLeftArrowDisabled} />
        <div className={styles.carousel__view_section}>
          <div className={`${styles.card_container} ${isSwiping ? styles.swipe : ''}`}>
            {cardsData.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
              <Card 
                key={index} 
                className={styles.card} 
                userName={card.userName} 
                userComment={card.userComment}
                numberOfStars={card.numberOfStars}
              />
            ))}
          </div>
          <div className={styles.dotContainer}>
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${startIndex / cardsPerPage === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
        <Arrow arrowButtonClassName={styles.carousel__right_arrow} onClick={nextCards} isDisabled={isRightArrowDisabled} />
      </div>
    </div>
  );
}

export default Carousel;
