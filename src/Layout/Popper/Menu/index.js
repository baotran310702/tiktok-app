import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as ProperWrapper } from '~/Layout/Popper';
import MenuItems from './MenuItems';
import Header from './Header';

const defaultFn = () => {};

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChoosen = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

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
      delay={[0, 700]}
      offset={[12, 8]}
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1">
          <ProperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                onBack={() => {
                  setHistory((prev) => {
                    prev.pop();
                    return prev;
                  });
                }}
                title="Language"
              />
            )}
            {renderItems()}
          </ProperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
