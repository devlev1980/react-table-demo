import {format} from 'date-fns';
import Column_Filtering_Input from './Column_Filtering_Input'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true // Disable filter in column

    },
    {
        Header: 'First name',
        Footer: 'First name',
        accessor: 'first_name',
    },
    {
        Header: 'Last name',
        Footer: 'Last name',
        accessor: 'last_name',
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Birth date',
        Footer: 'Birth date',
        accessor: 'date_of_birth',
        Cell: ({value}) => { return format(new Date(value),'dd/MM/yyyy')},
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First name',
                Footer: 'First name',
                accessor: 'first_name'
            },
            {
                Header: 'Last name',
                Footer: 'Last name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Email',
                Footer: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Birth date',
                Footer: 'Birth date',
                accessor: 'date_of_birth',
                Cell: ({value}) => { return format(new Date(value),'dd/MM/yyyy')}
            }
        ]
    }
]
