import className from 'classnames/bind';
import styles from './Home.module.scss';
const cx = className.bind(styles);

function Home() {
  return <h2 className={cx('wrapper')}>Home pages</h2>;
}

export default Home;
