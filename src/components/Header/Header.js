import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const headerItems = [
  { to: '/', title: 'Home' },
  { to: '/movies', title: 'Movies' },
];

export const Header = () => {
  return (
    <nav className={css.nav}>
      <ul>
        {headerItems.map(headerItem => (
          <li key={headerItem.title}>
            <NavLink
              className={({ isActive }) => (isActive ? css.nav_active : null)}
              to={headerItem.to}
            >
              {headerItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
