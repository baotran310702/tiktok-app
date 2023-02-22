import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './DiscoverItem.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({ data }) {
  return (
    <button className={cx('wrapper')}>
      <div className={cx('content')}>
        <FontAwesomeIcon icon={data.isHasTag ? faHashtag : faMusic} className={cx('icon')} />
        <span className={cx('value')}>{data.value}</span>
      </div>
    </button>
  );
}

export default DiscoverItem;
