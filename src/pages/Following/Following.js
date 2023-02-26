import className from 'classnames/bind';
import VideoContent from '../../components/VideoContent';
import styles from './Following.module.scss';
const cx = className.bind(styles);

function Following() {
  const data = {
    name: 'Faker',
    tick: true,
    full_name: 'hyeok lee',
    comment: 'Congratulations!, we will be champion!',
    linkSong: 'https://www.youtube.com/watch?v=irkJQBgZvXc',
    nameSong: 'Tấm lòng son Remix LCK',
    isFollow: true,
  };

  return (
    <div className={cx('wrapper')}>
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
    </div>
  );
}

export default Following;
