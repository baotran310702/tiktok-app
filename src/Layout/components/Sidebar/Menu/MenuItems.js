import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ title, to, icon, activeIcon }) {
  return (
    //Thêm một props key vào trong cx, lúc này nó cũng giống như thêm props vào component
    //Lúc này thẻ NavLink trả về một biến nav,(chỉ có thẻ navLink), và return true/false -> active được chôsen item
    <NavLink className={(nav) => cx('menu-items', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon-active')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItems.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default MenuItems;
