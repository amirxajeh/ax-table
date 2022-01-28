import React, { useState } from 'react';

import AXTable from './components/ax-table/AXTable';

import './App.scss'
import { IColumn } from './components/ax-table/@types/Column';

interface IITems {
  name: string
  lastname: string
  age: number
}

function App() {

  const [columns, setColumns] = useState<IColumn[]>([
    {
      field: 'name',
      label: 'Name',
      searchable: true
    },
    {
      field: 'lastname',
      label: 'Last Name'
    },
    {
      field: 'age',
      label: 'Age',
      searchable: true
    }
  ])

  const [items, setItems] = useState<IITems[]>([
    {
      name: 'amir',
      lastname: 'xajeh',
      age: 23
    },
    {
      name: 'sara',
      lastname: 'xajeh',
      age: 25
    },
    {
      name: 'coco',
      lastname: 'chanel',
      age: 3
    }
  ])


  return (
    <div className='container'>

      <AXTable columns={columns} items={items} />

    </div>
  );
}

export default App;
