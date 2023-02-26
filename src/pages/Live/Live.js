import classNames from 'classnames/bind';
import styles from './Live.module.scss';

const cx = classNames.bind(styles);

function Live() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>This site has been updating, sorry for the inconvenient! </h2>
        <h1>404</h1>
      </div>
    </div>
  );
}

export default Live;
