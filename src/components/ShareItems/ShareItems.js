import { faCode, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import MenuItems from '~/layout/Popper/Menu/MenuItems';
import styles from './ShareItems.module.scss';

const cx = classNames.bind(styles);

function ShareComponents() {
  const itemsShare = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faShare} />,
      title: 'Share',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Embed',
      to: '#',
    },
  ];
  const renderItems = () => {
    return itemsShare.map((item, index) => {
      return (
        <MenuItems
          key={index}
          data={item}
          onClicked={() => {
            onChoosen(item);
          }}
        />
      );
    });
  };
  return (
    <div className={cx('wrapper')}>
      <Tippy
        delay={[0, 500]}
        offset={[12, 0]}
        interactive={true}
        placement="bottom-end"
        hideOnClick={false}
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex="-1">
            {renderItems()}
          </div>
        )}
      ></Tippy>
    </div>
  );
}

export default ShareComponents;
