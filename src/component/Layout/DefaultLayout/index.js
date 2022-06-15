import Header from '../component/Header';
import Sitebar from './Sitebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sitebar></Sitebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
