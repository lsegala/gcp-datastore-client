import React, { Component } from 'react';
import { loadCases, deleteCase } from '../reducers/cases';
import { DataTable, Column} from 'primereact/datatable';
import { acessoToString } from '../actions';
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

    actionBodyTemplate(row) {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" onClick={() => {
                    deleteCase(row.id)
                    .then(() => {
                        window.location.reload();
                    });
                }}/>
                &nbsp;
                <Link to={`/cases/edit/${row.id}`}>
                    <Button icon="pi pi-pencil"/>
                </Link>
            </React.Fragment>
        );
    }

    handleAccessColumn(row) {
        return (
            <div>{acessoToString(row.acesso)}</div>
        );
    }

    render() {
        return (
            <DataTable  value={this.state.cases} emptyMessage="Nenhum caso castrado ainda!" header="Casos">
                <Column field="pasta" header="Pasta" sortable filter filterMatchMode="contains"/>
                <Column field="clientes" header="Clientes" sortable filter filterMatchMode="contains"/>
                <Column field="titulo" header="Título" sortable filter filterMatchMode="contains"/>
                <Column field="responsavel" header="Responsável" sortable filter filterMatchMode="contains"/>
                <Column body={this.handleAccessColumn} header="Acesso" sortable filter filterMatchMode="contains"/>
                <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
            </DataTable>
        );
    }
}

export default CaseList;