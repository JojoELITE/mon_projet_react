import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='Header'>

            <header>
                <nav>
                    <ul className='flex justify-center gap-8 py-10 text-blue-700 font-bold'>
                        <li><Link to="/connexion">Connexion</Link></li>
                        <li><Link to="/password">Password</Link></li>
                        <li><Link to="/compte">Compte</Link></li>
                        <li><Link to="/réinitialiser">Réinitialiser</Link></li>

                    </ul>
                </nav>
            </header>
            
        </div>
    )
};

export default Header;