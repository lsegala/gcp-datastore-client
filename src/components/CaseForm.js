import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Calendar } from 'primereact/calendar';

const initialState = {
    folder: '',
    clients: '',
    title: '',
    labels: [],
    description: '',
    observation: '',
    owner: '',
    access: false,
    inclusionDate: new Date()
};

const CaseForm = state => {
    const [id, setId] = useState(state.match?.params?.id);
    const [folder, setFolder] = useState(initialState.folder);
    const [clients, setClients] = useState(initialState.clients);
    const [title, setTitle] = useState(initialState.title);
    const [labels, setLabels] = useState(initialState.labels);
    const [description, setDescription] = useState(initialState.description);
    const [observation, setObservation] = useState(initialState.observation);
    const [owner, setOwner] = useState(initialState.owner);
    const [access, setAccess] = useState(initialState.access);
    const [inclusionDate, setInclusionDate] = useState(initialState.inclusionDate);
    useEffect(()=>{
        let idParam = state.match?.params?.id;
        if(id !== idParam || idParam){
            setId(idParam);
            setFolder(idParam? state.form.folder : initialState.folder);
            setClients(idParam? state.form.clients : initialState.clients);
            setTitle(idParam? state.form.title : initialState.title);
            setLabels(idParam? state.form.labels : initialState.labels);
            setDescription(idParam? state.form.description : initialState.description);
            setObservation(idParam? state.form.observation : initialState.observation);
            setOwner(idParam? state.form.owner : initialState.owner);
            setAccess(idParam? state.form.access : initialState.access);
            setInclusionDate(idParam? state.form.inclusionDate : initialState.inclusionDate);
        }
    }, [
        state.match,
        id,
        state.form
    ]);
    return (
        <div className="p-grid form">
            <div className="p-col-12">
                {id && (<h1>Alterar Caso {id}</h1>)}
                {!id && (<h1>Incluir Caso</h1>)}
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
                <InputText  value={clients} required
                            onChange={(e) => {
                                setClients(e.target.value);
                                state.form.clients = e.target.value;
                            }}/>
            </div>
            <div className="p-col-12">
                <h3>Título</h3>
            </div>        
            <div className="p-col-12">
                <InputText  value={title} required
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
                <InputText  value={owner} required
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
                <Calendar  value={inclusionDate} required
                            onChange={(e) => {
                                setInclusionDate(e.target.value);
                                state.form.inclusionDate = e.target.value;
                            }}
                            showIcon={true} />
            </div>
            <div className="p-col-12">&nbsp;</div>
            <div className="p-col-12 buttons">
                <Button label={!id? "Criar" : "Alterar"}
                        onClick={() => !id? state.addCase(state.form) : state.updCase(state.form)}/>
                {!id && (
                <Button label="Limpar" 
                        className="p-button-secondary"
                        onClick={() => {
                            setFolder(initialState.folder);
                            setClients(initialState.clients);
                            setTitle(initialState.title);
                            setLabels(initialState.labels);
                            setDescription(initialState.description);
                            setObservation(initialState.observation);
                            setOwner(initialState.owner);
                            setAccess(initialState.access);
                            setInclusionDate(initialState.inclusionDate);
                        }}/>)}
            </div>
        </div>
    );
}

export default CaseForm;