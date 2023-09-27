import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images/img1.jpg';

import Image from '~/components/Image';
import { Wrapper as ProperWrapper } from '~/layout/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
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
    <Tippy
      interactive={true}
      placement="bottom"
      offset={[-20, 0]}
      delay={[800, 0]}
      render={renderPreview}
      hideOnClick={true}
    >
      <div className={cx('account-item')}>
        <Image className={cx('image-item')} src={images} alt="my girls"></Image>
        <div className={cx('infor-item')}>
          <p className={cx('nickname')}>
            <strong>t1_faker</strong>
            <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
          </p>
          <p className={cx('name')}>T1 Faker</p>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {
  label: PropTypes.string,
};

export default AccountItem;
