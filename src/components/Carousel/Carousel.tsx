import { useEffect, useRef, useState } from 'react';
import nextButton from '../../assets/nextButton.svg';
import prevButton from '../../assets/prevButton.svg';
import company1 from '../../assets/company1.svg';
import company2 from '../../assets/company2.svg';
import company3 from '../../assets/company3.svg';
import cn from 'classnames';
import style from './style.module.scss';

const items = [
  {
    id: 1,
    img: company1,
    heading: 'Quisque maximus',
    text: 'Phasellus hendrerit sapien vel magna congue fringilla. Phasellus finibus arcu sit amet nibh faucibus.',
  },
  {
    id: 2,
    img: company2,
    heading: 'Nunc in malesuada',
    text: 'Ut vitae massa dignissim, tempor dui eget, suscipit neque. Aliquam erat volutpat.',
  },
  {
    id: 3,
    img: company3,
    heading: 'Sit amet ante',
    text: 'Diam id lacinia ullamcorper, ipsum nibh lobortis nibh, a eleifend elit enim non enim.',
  },
  {
    id: 11,
    img: company1,
    heading: 'Quisque maximus',
    text: 'Phasellus hendrerit sapien vel magna congue fringilla. Phasellus finibus arcu sit amet nibh faucibus.',
  },
  {
    id: 22,
    img: company2,
    heading: 'Nunc in malesuada',
    text: 'Ut vitae massa dignissim, tempor dui eget, suscipit neque. Aliquam erat volutpat.',
  },
  {
    id: 33,
    img: company3,
    heading: 'Sit amet ante',
    text: 'Diam id lacinia ullamcorper, ipsum nibh lobortis nibh, a eleifend elit enim non enim.',
  }
];

export const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [elementsShown, setElementsShown] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (elementRef.current?.clientWidth) {
      setCurrentOffset(currentPage * (elementRef.current?.clientWidth + (window.innerWidth >= 1200 ? 48 : 0)));
      setElementsShown(window.innerWidth >= 1200 ? 3 : 1);
    }
  }, [currentPage, windowWidth]);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.style.transform = `translateX(-${currentOffset}px)`;
    }
  }, [currentPage, currentOffset]);

  const handleChangePage = (isIncreasing: boolean) => {
    setCurrentPage(state => {
      if (isIncreasing) {
        return state === items.length - elementsShown ? 0 : state + 1;
      }
      return state === 0 ? items.length - elementsShown : state - 1;
    });
  }

  return (
    <div className={style.carousel}>
      <div className={style.carouselContent}>
        <div
          className={style.carouselWindow}
        >
          <div className={style.carouselGallery} ref={galleryRef}>
            {items.map(item => (
              <section
                className={style.carouselItem}
                key={item.id}
                ref={elementRef}
              >
                <img
                  className={style.carouselItemImage}
                  src={item.img}
                  alt={item.heading}
                />
                <h4 className={style.carouselItemHeading}>{item.heading}</h4>
                <p className={style.carouselItemText}>{item.text}</p>
              </section>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleChangePage(false)}
          className={cn(style.carouselButton, style.carouselButtonPrev)}
        >
          <img src={prevButton} alt="prev" />
        </button>
        <button
          className={cn(style.carouselButton, style.carouselButtonNext)}
          onClick={() => handleChangePage(true)}
        >
          <img src={nextButton} alt="next" />
        </button>
      </div>
    </div>
  )
}