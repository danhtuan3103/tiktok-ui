import classNames from 'classnames/bind';
import Header from '../component/Header';
import Sitebar from './Sitebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sitebar></Sitebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
