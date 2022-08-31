import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

import images from '~/assets/images/img.jpg';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('image-item')} src={images} alt="my girls"></Image>
        <div>
          <Button className={cx('follow-btn')} primary>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>thuydiem1201</strong>
          <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Bùi Thuý Diễm</p>
        <p className={cx('analystics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers </span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
