import routes from '~/config/routes';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import { HomeIcon, LiveIcon, UserFollowingIcon, HomeIconActive } from '~/components/Icons';
import SuggestAccounts from './SuggestAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItems title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />}></MenuItems>
        <MenuItems
          title="Following"
          to={routes.following}
          icon={<UserFollowingIcon />}
          activeIcon={<UserFollowingIcon />}
        ></MenuItems>
        <MenuItems title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveIcon />}></MenuItems>
      </Menu>
      <SuggestAccounts label="Suggest Accounts"></SuggestAccounts>
      <SuggestAccounts label="Following Accounts"></SuggestAccounts>
    </aside>
  );
}

export default Sidebar;
