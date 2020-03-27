import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import PropTypes from 'prop-types';

const MainMenu = ({authenticated}) => {
    const [isVisible, setVisible] = useState(true);
    return (
        <React.Fragment>
            <SideMenu visible={isVisible} onHide={() => setVisible(false)}>
            <ul style={{listStyleType: 'none', textAlign: 'left', fontSize: '14pt'}}>
                <li>
                    <Link to="/" onClick={() => setVisible(false)}>Casos</Link>
                </li>
                {authenticated && (
                <ul>
                    <li>
                        <Link to="/cases/list" onClick={() => setVisible(false)}>Listar</Link>
                    </li>
                    <li>
                        <Link to="/cases/new" onClick={() => setVisible(false)}>Criar</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => {
                                localStorage.removeItem('token_app');
                                window.location.href='/';
                            }}>Logout</Link>
                    </li>
                </ul>                    
                )}
                {!authenticated && (
                <ul>
                    <li>
                        <Link to="/login" onClick={() => setVisible(false)}>Login</Link>
                    </li>
                </ul>
                )}
            </ul>
            </SideMenu>
            <div className="p-grid">
                <div className="p-col-12">
                    <Button 
                        className="p-button-secondary" 
                        icon="pi pi-bars" 
                        onClick={() => setVisible(true)} style={{float: 'left', marginLeft: '1em'}}/>
                    <h1>Aplicação Casos</h1>
                </div>
            </div>
        </React.Fragment>
    );
};

MainMenu.propTypes = {
    authenticated: PropTypes.bool
}

export default MainMenu;