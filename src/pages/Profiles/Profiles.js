import classNames from 'classnames/bind';
import styles from './Profiles.module.scss';
import img from '~/assets/images/img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Profiles() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('profiles')}>
        <div className={cx('basic-infor-box')}>
          <img src={img} className={cx('avatar')} alt="avatar"></img>
          <div className={cx('basic-infor')}>
            <h3 className={cx('username')}>
              its.me.bao_ <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
            </h3>
            <p className={cx('fullname')}>Tran Quoc Bao</p>
            <Button className={cx('follow-btn')} primary>
              Follow
            </Button>
          </div>
        </div>
        <div className={cx('detail-infor')}>
          <div className={cx('number-infor')}>
            <strong className={cx('data')}>12</strong>
            <span className={cx('num-infor')}>Following</span>
          </div>
          <div className={cx('number-infor')}>
            <strong className={cx('data')}>12</strong>
            <span className={cx('num-infor')}>Follers</span>
          </div>
          <div className={cx('number-infor')}>
            <strong className={cx('data')}>12</strong>
            <span className={cx('num-infor')}>Likes</span>
          </div>
        </div>
        <h2 className={cx('comment')}>
          Trang tin giới trẻ hàng đầu <br /> For Work: 0969161718 <br />
          Email: hoptac@viettel.com.vn
        </h2>
      </div>
      <div className={cx('interact-box')}>
        <FontAwesomeIcon icon={faShare} className={cx('interact-icon')}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faEllipsis} className={cx('interact-icon')} />
      </div>
    </div>
  );
}

export default Profiles;
