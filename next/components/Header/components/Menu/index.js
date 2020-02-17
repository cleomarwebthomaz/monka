import Link from 'next/link'
import { useSelector } from 'react-redux';

import Cart from '../Cart';

import './styles.scss';

export default function() {
    const { user, isLogged } = useSelector(state => state.auth);

    return (
        <div id="headerMenu" className="text-center">
            
            <Link href="/account" prefetch={false}>
                <a>
                    <div className="item pt-1 pb-1">
                        <i className="fas fa-user-circle"></i>
                        {!isLogged && <span>Minha Conta</span>}
                        {isLogged && <span>{user.name}</span>}
                    </div>
                </a>
            </Link>

            <Link href="/" prefetch={false}>
                <a>
                    <div className="item pt-1 pb-1">
                        <i className="fas fa-list"></i>
                        <span>Cardápio</span>
                    </div>
                </a>
            </Link>

            <Cart />

        </div>
    );

}