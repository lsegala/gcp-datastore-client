import React, { Component } from 'react';
import { DataTable, Column} from 'primereact/datatable';
import { acessoToString } from '../actions';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

class CaseList extends Component {
    constructor(){
        super();
        this.state = {
            searchField: null,
            globalFilter: null
        }
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.handleAccessColumn = this.handleAccessColumn.bind(this);
    }

    actionBodyTemplate(row) {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" onClick={() => this.props.deleteCase(row.id)}/>
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
        let header = (
            <span className="p-float-label p-inputgroup" style={{margin: '10px 0'}}>
                <InputText id="searchField" type="text" onInput={(e) => this.setState({searchField: e.target.value})}/>
                <Button icon="pi pi-search"
                        onClick={(e) => {
                            let terms = this.state.searchField;
                            this.setState({globalFilter: terms})
                        }}/>
                <label htmlFor="searchField">Busca</label>
            </span>
        );
        return (
            <div className="p-grid form">
                <div className="p-col-12">
                    <DataTable  value={this.props.cases} emptyMessage="Nenhum caso castrado ainda!" header={header} globalFilter={this.state.globalFilter}>
                        <Column field="pasta" header="Pasta" sortable filter filterMatchMode="contains"/>
                        <Column field="clientes" header="Clientes" sortable filter filterMatchMode="contains"/>
                        <Column field="titulo" header="Título" sortable filter filterMatchMode="contains"/>
                        <Column field="responsavel" header="Responsável" sortable/>
                        <Column body={this.handleAccessColumn} header="Acesso" sortable filter filterMatchMode="contains"/>
                        <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default CaseList;