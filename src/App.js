import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Store from './store/Store';

function App() {

    return (
        <Store>
            <div className="ml-4 mt-16 w-1/2">
                {/* <SideNavigation /> */}
                <Header />
            </div>
            <div className='w-70 mx-auto'>
                <Outlet />
            </div>
        </Store>      
    );
}

export default App;
