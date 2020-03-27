import React, { useEffect, useState } from 'react';
import { loadCases } from '../reducers/cases';
import { DataTable, Column} from 'primereact/datatable';

const CaseList = state => {
    const [cases, setCases] = useState([]);
    useEffect(() => {
        loadCases()
            .then(response => {
                setCases(response.data);
            });
    }, [] );
    return (
        <DataTable  value={cases} emptyMessage="Nenhum caso castrado ainda!" header="Casos">
            <Column field="pasta" header="Pasta" />
            <Column field="clientes" header="Clientes" />
            <Column field="titulo" header="Título" />
            <Column field="responsavel" header="Responsável" />
            <Column field="acesso" header="Acesso" />
        </DataTable>
    );
}

export default CaseList;