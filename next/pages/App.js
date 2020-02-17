import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loginStorage } from '../store/actions/auth';
import { loadSettings, setSettings } from '../store/actions/setting';
import { ToastContainer } from 'react-toastify';

import CartComponent from '../components/Cart';

import pusher from '../services/pusher';

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {

        pusher.bind('updatedSettings', () => {
            dispatch(loadSettings());
        });
        
        dispatch(setSettings(props.setting));
        dispatch(loginStorage());
    }, []);

    return (
        <div>
            <CartComponent />
            <ToastContainer />
            {props.children}
        </div>
    );

}

export default App; 