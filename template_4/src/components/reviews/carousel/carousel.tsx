import styles from './carousel.module.scss';
import React, { useState, useEffect } from "react";
import Card from '../card/card';
import Arrow from './arrow/arrow';
import { useTranslation } from 'next-i18next';
import KarenWilliamsImage from '@/public/images/KarenWilliams.png';
import BobbyTorresImage from '@/public/images/BobbyTorres.png';
import NathanielBellImage from '@/public/images/NathanielBell.png';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);
  const { t } = useTranslation(["seo"]);

  const cardsData = [
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), source: KarenWilliamsImage },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), source: BobbyTorresImage },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), source: NathanielBellImage },
    { userName: t(`review_author_2`), userComment: t(`review_body_2`), source: BobbyTorresImage },
    { userName: t(`review_author_3`), userComment: t(`review_body_3`), source: NathanielBellImage },
    { userName: t(`review_author_1`), userComment: t(`review_body_1`), source: KarenWilliamsImage },
  ];

  const prevCards = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - cardsPerPage);
    }
  };

  const nextCards = () => {
    if (startIndex + cardsPerPage < cardsData.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + cardsPerPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div className={styles.carousel}>
      <Arrow arrowButtonClassName={styles.carousel__left_arrow} onClick={prevCards} isDisabled={isLeftArrowDisabled} />
      <div className={styles.card_container}>
        {cardsData.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
          <Card key={index} className={styles.card} source={card.source} userName={card.userName} userComment={card.userComment} />
        ))}
      </div>
      <Arrow arrowButtonClassName={styles.carousel__right_arrow} onClick={nextCards} isDisabled={isRightArrowDisabled} />
    </div>
  );
}

export default Carousel;