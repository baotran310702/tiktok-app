import styles from './VideoContent.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import video from '~/assets/videos/videoplayback2.mp4';
import InteractButton from '../InteractButton';
const cx = classNames.bind(styles);

function VideoContent({ data }) {
  const dataBtn = {
    heart: 22,
    comment: 125,
  };
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://estnn.com/wp-content/uploads/2021/03/t1-roster-2021-747x420.jpeg"
        alt="avatar T1"
        customFallback="https://estnn.com/wp-content/uploads/2020/03/d2t1-747x420.jpg"
      />
      <div className={cx('content')}>
        <div className={cx('title')}>
          <h4 className={cx('name')}>
            <span>{data.name}</span>
            {data.tick && <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle}></FontAwesomeIcon>}
            <span className={cx('username')}>{data.full_name}</span>
            <p className={cx('comment')}>{data.comment}</p>
            <a href={data.linkSong} target="_blank" className={cx('name-song')}>
              <FontAwesomeIcon className={cx('icon-song')} icon={faMusic}></FontAwesomeIcon>
              {data.nameSong}
            </a>
          </h4>
          <Button className={cx('follow-btn')} primary small>
            Follow
          </Button>
        </div>
        <div className={cx('video-container')}>
          <video
            className={cx('video')}
            src={video}
            controls
            autoPlay={true}
            controlsList="nodownload, nofullscreen"
          ></video>
          <div className={cx('interact-btn-container')}>
            <InteractButton className={cx('interact-btn')} isShare data={dataBtn}></InteractButton>

            <InteractButton className={cx('interact-btn')} isComment data={dataBtn}></InteractButton>

            <InteractButton className={cx('interact-btn')} isHeart data={dataBtn}></InteractButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
