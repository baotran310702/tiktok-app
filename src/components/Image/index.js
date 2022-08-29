import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, customFallback = images.defaultImg, ...props }, ref) => {
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
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  customFallback: PropTypes.string,
};

export default Image;
