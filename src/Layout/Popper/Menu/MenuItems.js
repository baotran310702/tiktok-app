import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItems({ data, onClicked }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClicked}>
      {data.title}
    </Button>
  );
}

MenuItems.propTypes = {
  data: PropTypes.object.isRequired,
  onClicked: PropTypes.func,
};

export default MenuItems;
