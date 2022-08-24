import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  className,
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  retangle = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
    retangle,
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    props.target = '_blank';
    Comp = 'a';
  }

  //Remove events listener when components is disabled

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon-btn')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon-btn')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
