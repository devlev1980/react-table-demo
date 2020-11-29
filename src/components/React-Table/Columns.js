import {format} from 'date-fns';
import Column_Filtering_Input from './Column_Filtering_Input'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: Column_Filtering_Input

    },
    {
        Header: 'First name',
        Footer: 'First name',
        accessor: 'first_name',
        Filter: Column_Filtering_Input
    },
    {
        Header: 'Last name',
        Footer: 'Last name',
        accessor: 'last_name',
        Filter: Column_Filtering_Input
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        Filter: Column_Filtering_Input
    },
    {
        Header: 'Birth date',
        Footer: 'Birth date',
        accessor: 'date_of_birth',
        Cell: ({value}) => { return format(new Date(value),'dd/MM/yyyy')},
        Filter: Column_Filtering_Input
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
