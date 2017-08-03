import { createPagiantion } from './data-table-definitions';

export interface IColumn {
    title: string;
}

export interface ITableObservable {
    filterColumns: Function;
    columns: Array<IColumn>;
    page: number;
    onContentChange: Function;
    endPoint: string;
}

function castApiIntoDataTable (response) {
    return {
        draw: 0,
        recordsTotal: response.table.count,
        recordsFiltered: response.table.count,
        data: response.data
    };
}


export function getDataTable (paginator: Function, config: ITableObservable) {
    return {
        displayStart: config.page ? (config.page - 1) * 10 : 0,
        columns: config.columns,
        columnDefs: [
            {
                targets: [ 0 ],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ],
        'serverSide': true,
        'fnServerData': async ( sSource, aoData, fnCallback ) => {
            try {
                const pagination = createPagiantion(aoData);
                let response: any = await paginator(pagination);
                response = castApiIntoDataTable(response);
                if (config.filterColumns) {
                    response.data = config.filterColumns(response.data);
                }
                if (config.onContentChange) {
                    config.onContentChange(response, pagination);
                }
                fnCallback(response);
            } catch (error) {
                console.error('Error: ' , error);
                fnCallback({
                    draw: 0,
                    recordsTotal: 0,
                    recordsFiltered: 0,
                    data: []
                });
            }
        }
    };
}
