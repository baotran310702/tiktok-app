import className from 'classnames/bind';
import VideoContent from '~/components/VideoContent';
import styles from './Home.module.scss';
const cx = className.bind(styles);

function Home() {
  const data = {
    name: 'Faker',
    tick: true,
    full_name: 'hyeok lee',
    comment: 'Congratulations!, we will be champion!',
    linkSong: 'https://www.youtube.com/watch?v=irkJQBgZvXc',
    nameSong: 'Tấm lòng son Remix LCK',
  };
  return (
    <div className={cx('wrapper')}>
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
      <VideoContent data={data} />
    </div>
  );
}

export default Home;
