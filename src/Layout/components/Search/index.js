import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/Layout/Popper';
import AccountItem from '~/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
  const [inputValue, setInputValue] = useState('');

  const [showResult, setShowResult] = useState(true);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    if (!inputValue.trim()) {
      setResult([]);
      return;
    }

    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(inputValue)}&type=less`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [inputValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClearInput = () => {
    setInputValue('');
    setResult([]);
    inputRef.current.focus();
  };

  return (
    <HeadlessTippy
      visible={showResult && result.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1">
          <ProperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {result.map((value) => (
              <AccountItem key={value.id} data={value} />
            ))}
          </ProperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={inputValue}
          placeholder="Search accounts or videos..."
          spellCheck={false}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => setShowResult(true)}
        />
        {!!inputValue && !loading && (
          <button className={cx('clear-btn')} onClick={handleClearInput}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
        <span className={cx('saparate')}></span>
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
