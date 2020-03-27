import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Calendar } from 'primereact/calendar';

const CaseForm = state => {
    const [folder, setFolder] = useState(state.form.folder);
    const [clients, setClients] = useState(state.form.clients);
    const [title, setTitle] = useState(state.form.title);
    const [labels, setLabels] = useState(state.form.labels);
    const [description, setDescription] = useState(state.form.description);
    const [observation, setObservation] = useState(state.form.description);
    const [owner, setOwner] = useState(state.form.owner);
    const [access, setAccess] = useState(state.form.access);
    const [inclusionDate, setInclusionDate] = useState(state.form.inclusionDate);
    return (
        <div className="p-grid form">
            <div className="p-col-12">
                <h1>Formulário</h1>
            </div>
            <div className="p-col-12">
                <h3>Pasta</h3>
            </div>
            <div className="p-col-12">
                <InputText  value={folder} 
                            onChange={(e) => {
                                setFolder(e.target.value);
                                state.form.folder = e.target.value;
                            }} size="40"/>
            </div>
            <div className="p-col-12">
                <h3>Clientes</h3>
            </div>
            <div className="p-col-12">
                <InputText  value={clients} 
                            onChange={(e) => {
                                setClients(e.target.value);
                                state.form.clients = e.target.value;
                            }}/>
            </div>
            <div className="p-col-12">
                <h3>Título</h3>
            </div>        
            <div className="p-col-12">
                <InputText  value={title} 
                            onChange={(e) => {
                                setTitle(e.target.value);
                                state.form.title = e.target.value;
                            }}/>
            </div>
            <div className="p-col-12">
                <h3>Rótulos (Tecle Enter quando terminar de digitar)</h3>
            </div>
            <div className="p-col-12">
                <Chips  value={labels} 
                        onChange={(e) => {
                            setLabels(e.target.value);
                            state.form.labels = e.target.value;
                        }}></Chips>
            </div>
            <div className="p-col-12">
                <h3>Descrição</h3>
            </div>
            <div className="p-col-12">
                <InputTextarea  rows={5} cols={30}  
                                value={description} 
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    state.form.description = e.target.value;
                                }}/>
            </div>
            <div className="p-col-12">
                <h3>Observações</h3>
            </div>
            <div className="p-col-12">
                <InputTextarea  rows={5} cols={30}  
                                value={observation} 
                                onChange={(e) => {
                                    setObservation(e.target.value);
                                    state.form.observation = e.target.value;
                                }}/>
            </div>
            <div className="p-col-12">
                <h3>Responsável</h3>
            </div>
            <div className="p-col-12">
                <InputText  value={owner} 
                            onChange={(e) => {
                                setOwner(e.target.value);
                                state.form.owner = e.target.value;
                            }}/>
            </div>
            <div className="p-col-12">
                <h3>Público?</h3>
            </div>
            <div className="p-col-12">
                <InputSwitch    checked={access} 
                                onChange={(e) => {
                                    setAccess(e.target.value);
                                    state.form.access = e.target.value;
                                }}/>
            </div>
            <div className="p-col-12">
                <h3>Data de inclusão</h3>
            </div>
            <div className="p-col-12">
                <Calendar  value={inclusionDate} 
                            onChange={(e) => {
                                setInclusionDate(e.target.value);
                                state.form.inclusionDate = e.target.value;
                            }}
                            showIcon={true} />
            </div>
            <div className="p-col-12">&nbsp;</div>
            <div className="p-col-12 buttons">
                <Button label="Salvar" 
                        onClick={() => { 
                            state.addCase(state.form);
                            state.showMessage({life: 2000, severity: 'success', summary: 'Sucesso!', detail: 'Caso cadastrado!' });
                        }}/>
                <Button label="Limpar" className="p-button-secondary" />
            </div>
        </div>
    );
}

export default CaseForm;