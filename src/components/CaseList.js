import React, { useEffect, useState, Component } from 'react';
import { loadCases } from '../reducers/cases';
import { DataTable, Column} from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

class CaseList extends Component {
    constructor() {
        super();
        this.state = {
            cases: []
        };
    }

    componentDidMount() {
        loadCases()
            .then(response => {
                this.setState({cases: response.data});
            });
    }

    actionBodyTemplate() {
        return (
            <React.Fragment>
                <Link to="">Alterar</Link>
                |
                <Link to="">Excluir</Link>
            </React.Fragment>
        );
    }

    render() {
        return (
            <DataTable  value={this.state.cases} emptyMessage="Nenhum caso castrado ainda!" header="Casos">
                <Column field="pasta" header="Pasta" sortable filter filterMatchMode="contains"/>
                <Column field="clientes" header="Clientes" sortable filter filterMatchMode="contains"/>
                <Column field="titulo" header="Título" sortable filter filterMatchMode="contains"/>
                <Column field="responsavel" header="Responsável" sortable filter filterMatchMode="contains"/>
                <Column field="acesso" header="Acesso" sortable filter filterMatchMode="contains"/>
                <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
            </DataTable>
        );
    }
}

export default CaseList;