import React, { useState } from 'react';
import { DataTable, Column} from 'primereact/datatable';
import { acessoToString } from '../actions';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

const CaseList = (state) => {
    const [searchField, setSearchField] = useState('');
    const [globalFilter, setGlobalFilter] = useState('');
    let actionBodyTemplate = (row) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" onClick={() => state.deleteCase(row.id)}/>
                &nbsp;
                <Link to={`/cases/edit/${row.id}`}>
                    <Button icon="pi pi-pencil"/>
                </Link>
            </React.Fragment>
        );
    };
    let handleAccessColumn = (row) => {
        return (
            <div>{acessoToString(row.acesso)}</div>
        );
    };
    let handleDescColumn = (row) => {
        return (
            <div>{row.descricao?.length > 10 ? row.descricao.substring(0, 10) + '...' : row.descricao}</div>
        );
    };
    let handleDateColumn = (row) => {
        return (
            <div>{row.inclusionDate?.toLocaleDateString()}</div>
        );
    };
    let header = (
        <div style={{textAlign: 'left'}}>
            <div className="p-float-label p-inputgroup" style={{margin: '10px 0'}}>
                <InputText id="searchField" type="text" onInput={(e) => setSearchField(e.target.value)}/>
                <Button icon="pi pi-search" onClick={(e) => setGlobalFilter(searchField)}/>
                <label htmlFor="searchField">Busca</label>
            </div>
        </div>
    );
    return (
        <div className="p-grid form">
            <div className="p-col-12">
                <DataTable  value={state.cases} emptyMessage="Nenhum caso castrado ainda!" header={header} globalFilter={globalFilter}>
                    <Column body={handleDateColumn} header="Dt. Inclusão" sortable/>
                    <Column field="pasta" header="Pasta" sortable/>
                    <Column field="clientes" header="Clientes" sortable/>
                    <Column field="titulo" header="Título" sortable/>
                    <Column body={handleDescColumn} header="Descrição" sortable/>
                    <Column field="etiquetas" header="Etiquetas" sortable/>
                    <Column field="responsavel" header="Responsável" sortable/>
                    <Column body={handleAccessColumn} header="Acesso" sortable/>
                    <Column body={actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
                </DataTable>
            </div>
        </div>
    );
};

export default CaseList;