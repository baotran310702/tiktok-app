import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as ProperWrapper } from '~/layout/Popper/';
import MenuItems from './MenuItems';
import Header from './Header';
import PropTypes from 'prop-types';

const defaultFn = () => {};

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChoosen = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const handleOnback = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClicked={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
            } else {
              onChoosen(item);
            }
          }}
        ></MenuItems>
      );
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      offset={[12, 8]}
      interactive={true}
      placement="bottom-end"
      hideOnClick={false}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1">
          <ProperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <Header onBack={handleOnback} title={current.title} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </ProperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  onChoosen: PropTypes.func,
};

export default Menu;
