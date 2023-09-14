import type { FC } from 'react';
import { memo, useState } from 'react';
import cn from 'classnames';
import  { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css/pagination';

import 'swiper/css';
import styles from './swiperPicker.module.scss';

interface SwiperPickerProps {
  data: Array<string | number>;
  current: number | string;
  onChange: (value: number | string) => void;
  paddingLeft?: boolean;
  paddingRight?: boolean;
  infinity?: boolean;
}

const SwiperPicker: FC<SwiperPickerProps> = ({
  data,
  onChange,
  current,
  infinity = false,
  paddingLeft = false,
  paddingRight = false,
}) => {
  const [active, setActive] = useState(data.indexOf(current));
  const activeIndexChange = (swiper: SwiperClass) => {
    setActive(swiper.activeIndex);
    onChange(data[swiper.activeIndex] as number | string);
  };
  const sliderStyle = (index: number) => cn(
    styles.swiperSlide,
    index === active && styles.active,
    (index === active - 1 || index === active + 1) && styles.neighbours,
    (index === active - 2 || index === active + 2) && styles.prevNeighbours,
    paddingLeft && (index === active - 1 || index === active + 1) && styles.paddingLeftNeighbour,
    paddingLeft && styles.paddingLeft,
    paddingRight && (index === active - 1 || index === active + 1) && styles.paddingRightNeighbour,
    paddingRight && styles.paddingRight,
  );

  return (
    <Swiper
      centeredSlides
      initialSlide={active}
      speed={10}
      onActiveIndexChange={activeIndexChange}
      direction="vertical"
      slidesPerView={5}
      spaceBetween={5}
      mousewheel
      loop={infinity}
      modules={[Mousewheel]}
      className={styles.swiper}
    >
      {data.map((item, index) => (
        <SwiperSlide className={sliderStyle(index)} key={`${item}${index}`}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default memo(SwiperPicker);
