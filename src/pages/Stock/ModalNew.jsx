import * as React from 'react';
import { useEffect,useState} from 'react'
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form'
import {Insert,aggImgItem} from './service'
import {Select as SelectProductos} from '../Productos/service'
import {SelectName as SelectPrecios} from '../Precios/service'
import {Insert as InsertPrecio} from '../Precios/service'
import {Select as SelectCategorias} from '../TpCategorias/service'
import {Select as SelectClasificacion} from '../Clasificacion/service'
import {Select as SelectGeneros} from '../Generos/service'
import {Select as SelectUsos} from '../Usos/service'
import {Select as SelectColores} from '../Colores/service'
import {Select as SelectTallas} from '../Tallas/service'
import { SelectDinamic } from '../../components/SelectDinamic/SelectDinamic';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function AlertDialog({openNew,handleCloseNew}) {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [dataProductos, setDataProductos] = useState([])
  const [dataPrecios, setDataPrecios] = useState([])
  const [dataCategorias, setDataCategorias] = useState([])
  const [dataClasificacion, setDataClasificacion] = useState([])
  const [dataGeneros, setDataGeneros] = useState([])
  const [dataUsos, setDataUsos] = useState([])
  const [dataColores, setDataColores] = useState([])
  const [dataTallas, setDataTallas] = useState([])
  const {register,handleSubmit,setValue}=useForm({defaultValues:{
    nombre:'',
    status:'1',
    precio:'',
    cantidad:''
  }
})

// el cambio del input file(onchange),el preview de la img
const previewImg=async(e)=>{
  const imgPrw=document.getElementById('imgDinamicModalEdit')
  // setSearchLogo(true)
  // alert('storage')
  console.log(e.target.files[0])
  if(e.target.files[0]){
    const reader=new FileReader()
    reader.onload=function(e){
      console.log(e.target.result)
      console.log(imgPrw)
      imgPrw.src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'
      imgPrw.src=e.target.result
      // imgPrw.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png"

    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    imgPrw.src=avatarUrl
  }
  
}



  const resetModalNew=()=>{
    handleCloseNew()
    setValue("nombre","l")
    setValue("cantidad","")
    setValue("precio","")
    setValue("status","1")
  }

  

  const gesSubmit=async(data)=>{
    data.status=Number (data.status)
    data.cantidad=Number (data.cantidad)
    // data.precio=Number (data.precio)

    const res=await SelectPrecios(data.precio)
    console.log(res)
    var precioId
    if(res.length>0){
      console.log('posee un registro en PRECIOS')
      console.log(res[0].id)
      precioId=res[0].id
    }else{
      console.log('NO! posee un registro en PRECIOS')
      var dataPrecio={
        nombre:data.precio,
        status:1
      }
      const llave=await InsertPrecio(dataPrecio)
      if(llave){
        const res=await SelectPrecios(data.precio)
        console.log(res[0].id)  
        precioId=res[0].id
      }
    }

    const select_Productos=document.getElementById('select_Productos')
    console.log(select_Productos.value)

    // const select_Precios=document.getElementById('select_Precios')
    // console.log(select_Precios.value)
    
    const select_Categorias=document.getElementById('select_Categorias')
    console.log(select_Categorias.value)

    const select_Clasificacion=document.getElementById('select_Clasificacion')
    console.log(select_Clasificacion.value)

    const select_Generos=document.getElementById('select_Generos')
    console.log(select_Generos.value)

    const select_Usos=document.getElementById('select_Usos')
    console.log(select_Usos.value)
    
    const select_Colores=document.getElementById('select_Colores')
    console.log(select_Colores.value)

    const select_Tallas=document.getElementById('select_Tallas')
    console.log(select_Tallas.value)

    // const select=document.getElementById('select_Colores')
    // console.log(select.value)

    console.log(data)
    const data2={
      status:data.status,
      cantidad:data.cantidad,
      producto:select_Productos.value,
      precio:precioId,
      categoria:select_Categorias.value,
      clasificacion:select_Clasificacion.value,
      genero:select_Generos.value,
      uso:select_Usos.value,
      color:select_Colores.value,
      talla:select_Tallas.value
    }
    Insert(data2)
    resetModalNew()
    
  }

  const selectProductosSelect=async()=>{
    const res=await SelectProductos(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataProductos(dataNewArr)
  }
  // const selectPreciosSelect=async()=>{
  //   const res=await SelectPrecios(null)
  //   console.log(res)
  //   var dataNewArr=[]
  //   for (let i = 0; i < res.length; i++) {
  //       const item = res[i];
  //       var dataNew={
  //           label:item.nombre,
  //           value:item.id
  //       }
  //       dataNewArr.push(dataNew)
  //   }
  //   console.log(dataNewArr)
  //   setDataPrecios(dataNewArr)
  // }
  const selectCategoriasSelect=async()=>{
    const res=await SelectCategorias(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataCategorias(dataNewArr)
  }
  const selectClasificacionSelect=async()=>{
    const res=await SelectClasificacion(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataClasificacion(dataNewArr)
  }
  const selectGenerosSelect=async()=>{
    const res=await SelectGeneros(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataGeneros(dataNewArr)
  }
  const selectUsosSelect=async()=>{
    const res=await SelectUsos(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataUsos(dataNewArr)
  }
  const selectColoresSelect=async()=>{
    const res=await SelectColores(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataColores(dataNewArr)
  }
  const selectTallasSelect=async()=>{
    const res=await SelectTallas(null)
    console.log(res)
    var dataNewArr=[]
    for (let i = 0; i < res.length; i++) {
        const item = res[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataTallas(dataNewArr)
  }

  const effectSelect=async()=>{
    selectProductosSelect()
    // selectPreciosSelect()
    selectCategoriasSelect()
    selectClasificacionSelect()
    selectGenerosSelect()
    selectUsosSelect()
    selectColoresSelect()
    selectTallasSelect()
  }

  useEffect(() => {
      // alert('modal new')
      // update()
      effectSelect()
  }, [])
  


  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog   
      </Button> */}
      <Dialog
        open={openNew}
        onClose={handleCloseNew}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form action="" onSubmit={handleSubmit(gesSubmit)}>
          <DialogTitle id="alert-dialog-title">
            
            <Grid container spacing={2}>
                <Grid item xs={11}>
                {"Nuevo Stock"}
                </Grid>
                <Grid item xs={1}>
                    
                    <IconButton onClick={resetModalNew} color='error' size="small" ><CloseIcon/></IconButton>
                </Grid>
                    
            </Grid>
          </DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Productos</label>
                          <SelectDinamic id='select_Productos' data={dataProductos}/>
                      </Grid>
                      <Grid item md={4} xs={12}>
                          <label htmlFor="">Precio</label>
                          <input type="text" style={{width:'100%'}} {...register('precio')}/>
                          {/* <SelectDinamic id='select_Precios' data={dataPrecios}/> */}
                      </Grid>
                      <Grid item md={4} xs={12}>
                          <label htmlFor="">Categorias</label>
                          <SelectDinamic id='select_Categorias' data={dataCategorias}/>
                      </Grid>
                      <br />

                      
                      <Grid item md={4} xs={12}>
                          <label htmlFor="">Clasificacion</label><br />
                          <SelectDinamic id='select_Clasificacion' data={dataClasificacion}/>
                      </Grid>
                      <Grid item md={4} xs={12}>
                          <label htmlFor="">Genero</label>
                          <SelectDinamic id='select_Generos' data={dataGeneros}/>
                      </Grid>
                      <Grid item md={4} xs={12}>
                          <label htmlFor="">Usos</label>
                          <SelectDinamic id='select_Usos' data={dataUsos}/>
                      </Grid>
                      <br />

                      
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Colores</label><br />
                          <SelectDinamic id='select_Colores' data={dataColores}/>
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Tallas</label>
                          <SelectDinamic id='select_Tallas' data={dataTallas}/>
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="" style={{display:'block'}}>Cantidad</label>
                          <input type="text" style={{width:'100%'}} {...register('cantidad')}/>
                          {/* <SelectDinamic id='select_Tallas'/> */}
                      </Grid>
                      <br />
                      <Grid item xs={12} md={4}>
                          {/* <label htmlFor="">status</label><br /> */}
                          <input type="text" style={{display:'none'}} {...register('status')}/>
                      </Grid>
                      {/* <SelectDinamic id='select_Productos' defaultValue={0} data={} /> */}
                </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type='submit' style={{marginRight:'15px'}}>GUARDAR</Button>
        </DialogActions>
        </form>
      </Dialog>
    </>
  );
}