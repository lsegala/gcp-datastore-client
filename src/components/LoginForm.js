import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const LoginForm = state => {
    const [name, setName] = useState(state.login.name);
    const [password, setPassword] = useState(state.login.password);
    return (
    <div className="p-grid form">
        <div className="p-col-12">
            <h1>Login</h1>
        </div>
        <div className="p-col-12">
            <h3>Usuário</h3>
        </div>
        <div className="p-col-12">
            <InputText  value={name} 
                        onChange={(e) => {
                            setName(e.target.value);
                            state.login.name = e.target.value;
                        }}/>
        </div>
        <div className="p-col-12">
            <h3>Senha</h3>
        </div>
        <div className="p-col-12">
            <Password   value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                            state.login.password = e.target.value;
                        }}/>
        </div>
        <div className="p-col-12">&nbsp;</div>
        <div className="p-col-12 buttons">
            <Button label="Login" onClick={() => state.onClick({state})}/>
        </div>
    </div>
)};

export default LoginForm;