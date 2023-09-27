import styles from './VideoContent.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import video from '../../assets/videos/videoplayback2.mp4';
import InteractButton from '../InteractButton';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AccountPreview from '../../layout/components/Sidebar/SuggestAccounts/AccountPreview/AccountPreview';
import { Wrapper as ProperWrapper } from '~/layout/Popper';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function VideoContent({ data }) {
  const videoRef = useRef(null);

  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });

  const [isFollow, setIsFollow] = useState(data.isFollow);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(videoRef.current);
          if (entry.isIntersecting && entry.target === videoRef.current) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const dataBtn = {
    heart: 22,
    comment: 125,
  };

  const renderPreview = ({ props }) => {
    return (
      <div tabIndex="-1" {...props}>
        <ProperWrapper className={cx('menu-popper')}>
          <AccountPreview></AccountPreview>
        </ProperWrapper>
      </div>
    );
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
          <Tippy
            interactive={true}
            placement="top-start"
            offset={[-10, -50]}
            delay={[800, 0]}
            render={renderPreview}
            hideOnClick={true}
          >
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
          </Tippy>

          <Button
            className={cx('follow-btn')}
            secondary={!data.isFollow}
            rounded={data.isFollow}
            retangle
            outline
            small
            onClick={() => {
              setIsFollow(!isFollow);
              data.isFollow = !data.isFollow;
            }}
          >
            {data.isFollow ? 'Following' : 'Follow'}
          </Button>
        </div>
        <div className={cx('video-container')}>
          <video ref={videoRef} className={cx('video')} src={video} controls />
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
