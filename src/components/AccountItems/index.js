import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images/img.jpg';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={images} alt="avatar" />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>Bùi Thuý Diễm</span>
          <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>thuydiem011202</span>
      </div>
    </div>
  );
}

export default AccountItem;
