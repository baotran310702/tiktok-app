import classNames from 'classnames/bind';
import DiscoverItem from '~/components/DiscoverItem/DiscoverItem';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Discover() {
  const data = [
    {
      isHasTag: true,
      value: 'tranquocbao',
    },
    {
      isHasTag: true,
      value: 'haythenhi',
    },
    {
      isHasTag: false,
      value: 'Tấm lòng son LCK',
    },
    {
      isHasTag: false,
      value: 'Hãy trao cho anh - MTP',
    },
    {
      isHasTag: true,
      value: 'tranquocbao',
    },
    {
      isHasTag: true,
      value: 'haythenhi',
    },
    {
      isHasTag: false,
      value: 'Tấm lòng son LCK',
    },
    {
      isHasTag: false,
      value: 'Hãy trao cho anh - MTP',
    },
    {
      isHasTag: true,
      value: 'tranquocbao',
    },
    {
      isHasTag: true,
      value: 'haythenhi',
    },
    {
      isHasTag: false,
      value: 'Tấm lòng son LCK',
    },
    {
      isHasTag: false,
      value: 'Hãy trao cho anh - MTP',
    },
    {
      isHasTag: true,
      value: 'tranquocbao',
    },
    {
      isHasTag: true,
      value: 'haythenhi',
    },
    {
      isHasTag: false,
      value: 'Tấm lòng son LCK',
    },
    {
      isHasTag: false,
      value: 'Hãy trao cho anh - MTP',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>Discover</p>
      {data.map((item, index) => (
        <DiscoverItem data={item} key={index} />
      ))}
    </div>
  );
}

export default Discover;
