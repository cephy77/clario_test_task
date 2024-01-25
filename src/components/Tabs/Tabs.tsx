import { useState } from 'react';
import { Button } from '../Button';
import style from './style.module.scss';
import cn from 'classnames';

type Tab = {
  id: number,
  heading: string,
  text: string,
}

const tabs: Tab[] = [
  {
    id: 1,
    heading: 'Vestiblum vel dictum ipsum?',
    text: 'Morbi lobortis, massa ac dictum commodo, dolor ipsum dapibus massa, a fringilla ante augue eget felis. Aliquam ornare ante est, ac venenatis nunc fermentum vel. Integer vel nulla sit amet sem aliquet mollis. Nam a justo id magna semper luctus non in massa. Proin vehicula augue in felis lobortis vestibulum. Curabitur quis massa non velit tincidunt lobortis nec vitae dui.'
  },
  {
    id: 2,
    heading: 'Never Gonna Give You Up',
    text: 'I just wanna tell you how I\'m feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you'
  },
  {
    id: 3,
    heading: 'Dictum vestiblum vel ipsum?',
    text: 'Morbius, its Morbin time, commodo, dolor ipsum dapibus massa, a fringilla ante augue eget felis. Aliquam ornare ante est, ac venenatis nunc fermentum vel. Integer vel nulla sit amet sem aliquet mollis. Nam a justo id magna semper luctus non in massa. Proin vehicula augue in felis lobortis vestibulum. Curabitur quis massa non velit tincidunt lobortis nec vitae dui.'
  },
  {
    id: 4,
    heading: 'Around the world',
    text: 'Around the world around the world. Around the world around the world around the world around the world, around the world around the world around the world around the world around the world around the world around the world! Around the world around the world around the world around the world around the world. Around the world around the world around the world around the world!'
  }
]

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleTabSwitch = (index: number) => {
    setActiveTab(index);
  }

  return (
    <div className={style.tabs}>
      <ul className={style.tabsSwitches}>
        {tabs.map((tab, i) => (
          <li
            className={cn(style.tabsSwitch, {
              [style.tabsSwitchActive]: activeTab === i
            })}
            role='button'
            onClick={() => toggleTabSwitch(i)}
            key={tab.id}
          >
            <div>{`Tab ${tab.id}`}</div>
          </li>
        ))}
      </ul>

      <article className={style.tabsContent}>
        <h4 className={style.tabsHeading}>{tabs[activeTab].heading}</h4>

        <p className={style.tabsText}>{tabs[activeTab].text}</p>
      </article>

      <div className={style.tabsButton}>
        <Button>Download</Button>
      </div>
    </div>

  );
}