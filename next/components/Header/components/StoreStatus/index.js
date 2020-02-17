import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import './styles.scss';

function StoreStatus(props) {
    let [setting, seSetting] = useState(props.setting);
    const settings = useSelector(state => state.setting);

    useEffect(() => {
        if (settings.loaded) {
            seSetting(settings.setting);
        }
    }, [settings]);

    const status = setting.store_status.value === '1';

    return (
        <div className="storeStatus">
            <div>
                <i className={`far fa-circle ${status ? 'text-success ' : 'text-danger'}`}></i> 
                {status ? ' Aberto ' : ' Fechado '}
            </div>
        </div>
    );

}

export default StoreStatus;