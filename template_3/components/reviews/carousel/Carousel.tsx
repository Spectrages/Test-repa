"use client"
import styles from './carousel.module.scss';
import React, { useState } from "react";
import Card from '../card/Card';
import Arrow from './arrow/Arrow';
import cardsData from './cardsData';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  const prevCards = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - cardsPerPage, 0));
    setIsRightArrowVisible(true);
    setIsLeftArrowVisible(false);
  };

  const nextCards = () => {
    setStartIndex((prevStartIndex) => Math.min(prevStartIndex + cardsPerPage, cardsData.length - cardsPerPage));
    setIsLeftArrowVisible(true);
    setIsRightArrowVisible(false);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.card_container}>
        {isLeftArrowVisible && <Arrow direction="left" onClick={prevCards} />}
        {cardsData.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
          <Card key={index} position={card.position} userName={card.userName} starNumber={card.starNumber} userComment={card.userComment}/>
        ))}
        {isRightArrowVisible && <Arrow direction="right" onClick={nextCards} />}
      </div>
    </div>
  );
}

export default Carousel;

// // "use client"
// // import styles from './carousel.module.scss';
// // import React, { useState } from "react";
// // import Card from '../card/Card';
// // import Arrow from './arrow/Arrow';
// // import cardsData from './cardsData';

// // const Carousel = () => {
// //   const [startIndex, setStartIndex] = useState(0);
// //   const cardsPerPage = 3;

// //   const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
// //   const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

// //   const prevCards = () => {
// //     setStartIndex((prevStartIndex) => Math.max(prevStartIndex - cardsPerPage, 0));
// //     setIsRightArrowVisible(true);
// //     setIsLeftArrowVisible(false);
// //   };

// //   const nextCards = () => {
// //     setStartIndex((prevStartIndex) => Math.min(prevStartIndex + cardsPerPage, cardsData.length - cardsPerPage));
// //     setIsLeftArrowVisible(true);
// //     setIsRightArrowVisible(false);
// //   };

// //   return (
// //     <div className={styles.carousel}>

// //       <div className={styles.card_container}>
// //       {isLeftArrowVisible && <Arrow direction="left" onClick={prevCards} />}
// //         {cardsData.slice(startIndex, startIndex + cardsPerPage).map((card, index) => (
// //           <Card key={index} position={card.position} userName={card.userName} starNumber={card.starNumber} userComment={card.userComment}/>
// //         ))}
// //         {isRightArrowVisible && <Arrow direction="right" onClick={nextCards} />}
// //       </div>

// //     </div>
// //   );
// // }

// // export default Carousel;

// import styles from './carousel.module.scss';
// import React, { useState } from "react";
// import Card from '../card/Card';
// import Arrow from './arrow/Arrow';
// import cardsData from './cardsData';

// const Carousel = () => {
//   // const [startIndex, setStartIndex] = useState(0);
//   // const cardsPerPage = 6;
//   const [activeClass, setActiveClass] = useState(""); // Добавили состояние для активного класса

//   const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
//   const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);


//   const prevCards = () => {
//     // setStartIndex((prevStartIndex) => Math.max(prevStartIndex - cardsPerPage, 0));
//     setActiveClass(styles.toLeft!);
//     setIsLeftArrowVisible(false);
//     setIsRightArrowVisible(true);
//   };

//   const nextCards = () => {
//     // setStartIndex((prevStartIndex) => Math.min(prevStartIndex + cardsPerPage, cardsData.length - cardsPerPage));
//     setActiveClass(styles.toRight!);
//     setIsLeftArrowVisible(true);
//     setIsRightArrowVisible(false);
//   };

//   return (
//     <div className={styles.carousel}>
//       <div className={styles.carousel_container}>
//         {isLeftArrowVisible && <Arrow direction="left" onClick={prevCards} />}
//         <div className={styles.card_viewport}>
//           <div className={`${styles.card_container} ${activeClass}`}>
//             {cardsData.map((card, index) => (
//               <Card key={index} position={card.position} userName={card.userName} starNumber={card.starNumber} userComment={card.userComment} />
//             ))}
//           </div>
//         </div>
//         {isRightArrowVisible && <Arrow direction="right" onClick={nextCards} />}
//       </div>
//     </div>
//   );
// }

// export default Carousel;