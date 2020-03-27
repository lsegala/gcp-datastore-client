import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'primereact/sidebar';

const SideMenu = ({visible, children, onHide}) => (
    <Sidebar visible={visible} onHide={onHide}>
        {children}
    </Sidebar>
);

SideMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onHide: PropTypes.func.isRequired
}

export default SideMenu;