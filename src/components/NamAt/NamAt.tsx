import style from './style.module.scss';
import laptopIcon from '../../assets/laptop.svg';
import hddIcon from '../../assets/hdd.svg';
import windowIcon from '../../assets/window.svg';
import listCheckMarlIcon from '../../assets/listCheckMark.svg'
import { useEffect, useRef } from 'react';

const content = [
  {
    id: 1,
    image: laptopIcon,
    heading: 'Lorem ipsum dolor sit',
    advantagesList: ['Fusce imperdiet leo lobortis luctus.', 'Phasellus scelerisque dolor.', 'Mauris euismod metus quis eros.'],
  },
  {
    id: 2,
    image: hddIcon,
    heading: 'Aenean sagittis mauris',
    advantagesList: ['Phasellus scelerisque dolor.', 'Proin id est laoreet, aliquet leo eget.', 'Vestibulum vitae turpis id metus.'],
  },
  {
    id: 3,
    image: windowIcon,
    heading: 'Turpis id metus vestibulum',
    advantagesList: ['Vestibulum quis diam non.', 'Donec consectetur leo at ultrices.', 'In euismod lacus nec magna.'],
  }
]

export const NamAt = () => {
  const namAtElement = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let isMessageShown = false;
    const elementDetektor = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (!isMessageShown && (namAtElement.current?.offsetTop || 0 <= scrollPosition)) {
        console.log("Feature shown");
        isMessageShown = true;
      }
    }

    window.addEventListener('scroll', elementDetektor)

    return () => {
      window.removeEventListener('scroll', elementDetektor);
    }
  }, []);

  return (
    <article className={style.namAt}>
      <h3 className={style.namAtHeading} ref={namAtElement}>Nam at pulvinar dui, ornare ullamcorper nulla cursus rhoncus velit?</h3>

      <div className={style.namAtContent}>
        {content.map(item => (
          <section
            className={style.namAtItem}
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.heading}
            />
            <h4 className={style.namAtSubHeading}>{item.heading}</h4>
            <ul className={style.namAtList}>
              {item.advantagesList.map(li => (
                <li
                  className={style.namAtListItem}
                  key={li}
                >
                  <img src={listCheckMarlIcon} alt="check mark" />
                  {li}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}