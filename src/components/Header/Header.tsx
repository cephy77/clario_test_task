import { useState } from 'react';
import LogoSvg from '../../assets/svgComponents/logoSvg';
import { NavBlock } from '../NavBlock';
import style from './style.module.scss';
import cn from 'classnames';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(state => !state);
  }

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div className={style.headerLogo}>
          <LogoSvg />
          <h1 className={style.headerLogoHeading}>Logo</h1>
        </div>
        <div className={style.headerDesktopRoutes}>
          <NavBlock />
        </div>

        <button
          onClick={toggleMenu}
          className={cn(style.headerBurgerButton, {
            [style.headerBurgerButtonOpened]: isMenuOpen
          })}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div
          className={cn(style.headerMenu, {
            [style.headerMenuOpened]: isMenuOpen,
          })}
        >
          <NavBlock />
        </div>
      </div>
    </header>
  );
}