import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCircleXmark,
  faCloudArrowUp,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import imagesD from '~/assets/images/img.jpg';
import images from '~/assets/images';
import { Wrapper as ProperWrapper } from '~/Layout/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/Layout/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { SendMessageIcon } from '~/components/Icons';
import Image from '~/components/Image';

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
    to: '/@mycrush',
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
  const [result, setResult] = useState([]);

  const currentUser = true;

  const newMessages = 13;

  useEffect(() => {
    setTimeout(() => {
      setResult([]);
    }, 0);
  });

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok"></img>
        <HeadlessTippy
          visible={result.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1">
              <ProperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </ProperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts or videos..." spellCheck={false} />
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
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
                //customFallback="https://estnn.com/wp-content/uploads/2020/03/d2t1-747x420.jpg"
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
