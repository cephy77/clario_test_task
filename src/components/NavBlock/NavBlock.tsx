import { Button } from '../Button';
import style from './style.module.scss';

const routes: string[] = [
  'Features',
  'About',
  'Blog',
  'Contacts'
]

export const NavBlock = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navRoutes}>
        {routes.map(route => (
          <li
            className={style.navRoute}
            key={route}
          >
            {route}
          </li>
        ))}
      </ul>
      <div className={style.navButton}>
        <Button>Button</Button>
      </div>
    </nav>
  );
}