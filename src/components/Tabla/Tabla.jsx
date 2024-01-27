import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect ,useState} from 'react'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
// import {ProductsSelect} from './service'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';






export default function DataTable({columns,data}) {

  
    

  const [row, setRow] = useState([])
  const [colum, setColum] = useState([])
  useEffect(() => {
    // console.log(data)
    // console.log(columns.columns)
    // console.log(data.data)
    setRow(data.data)
    setColum(columns.columns)
    // const efectProductsSelect=async(categoriaUser)=>{
    //   const res = await ProductsSelect(categoriaUser)
    //   console.log(res)
    //   var arrRes=[]
    //   for (let i = 0; i < res.length; i++) {
    //     const item = res[i];
    //     console.log(item)
    //     var dataObject={
    //       status:item.status,
    //       categoria:item.categoria,
    //       clasificacion:item.clasificacion,
    //       created_at:item.created_at,
    //       genero:item.genero,
    //       id:item.id,
    //       nombre:item.nombre,
    //       precio:item.precio,
    //       utilidad:item.utilidad,
    //       acciones:<button></button>,
    //     }
    //     arrRes.push(dataObject)
    //   }
    //   setProduct(arrRes)
    //   console.log(product)
    // }


    // console.log('hola tabla')
    // var categoriaUser=null
    // efectProductsSelect(categoriaUser)
    // console.error(res)
    // TpCategoriaSelect()
  }, [])

  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={colum}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
        // checkboxSelection
        // onCellClick={()=>this.data-id}
      />
      
        
      
      
    </div>
  );
}