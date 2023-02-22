import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './InteractButton.module.scss';

const cx = classNames.bind(styles);

function InteractButton({ className, isHeart = false, isComment = false, isShare = false, data, ...passProps }) {
  const [clicked, setClicked] = useState(false);
  //console.log(clicked);

  const handleClick = () => {
    setClicked(!clicked);
  };

  let Comp = 'button';
  const classes = cx('wrapper', {
    [className]: className,
    isHeart,
    isComment,
    isShare,
    data,
    ...passProps,
  });

  return (
    <div className={classes}>
      <Comp className={cx('btn')} onClick={handleClick}>
        <FontAwesomeIcon
          icon={isHeart ? faHeart : isComment ? faComment : faShare}
          className={cx(clicked && isHeart ? 'icon-active' : 'icon')}
        ></FontAwesomeIcon>
      </Comp>
      <p className={cx('value')}>{isHeart ? data.heart : isComment ? data.comment : 'Share'}</p>
    </div>
  );
}

export default InteractButton;
