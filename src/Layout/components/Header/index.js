import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCloudArrowUp,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faSignIn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/Layout/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { SendMessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'english',
          code: 'en',
          title: 'English',
        },
        {
          type: 'vietnam',
          code: 'vi',
          title: 'Vietnamese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const userMenus = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@profiles',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coins',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Log out',
    to: '/',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  const newMessages = 13;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo')}>
          <img src={images.logo} alt="tiktok"></img>
        </Link>
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Send message">
                <button className={cx('action-btn')}>
                  <SendMessageIcon></SendMessageIcon>
                  {newMessages > 0 && <span className={cx('countMessage')}>{newMessages}</span>}
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outline rounded retangle>
                + Upload
              </Button>
              <Button
                primary
                leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                onClick={() => alert("Don't be too stupied")}
              >
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenus : MENU_ITEMS} onChoosen={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://estnn.com/wp-content/uploads/2021/03/t1-roster-2021-747x420.jpeg"
                alt="avatar"
                customFallback="https://estnn.com/wp-content/uploads/2020/03/d2t1-747x420.jpg"
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
