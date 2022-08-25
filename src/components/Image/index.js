import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, customFallback = images.defaultImg, ...props }, ref) {
  const [fallBack, setFallBack] = useState('');

  const handleErr = () => {
    setFallBack(customFallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      {...props}
      alt={alt}
      onError={handleErr}
    />
  );
}

export default forwardRef(Image);
