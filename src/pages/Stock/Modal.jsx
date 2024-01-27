import * as React from 'react';
import { useEffect ,useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {SelectId,Update,actualizarImgItem} from './service'
import {Select as SelectProductos} from '../Productos/service'
import {Select as SelectPrecios} from '../Precios/service'
import {Select as SelectCategorias} from '../TpCategorias/service'
import {Select as SelectClasificacion} from '../Clasificacion/service'
import {Select as SelectGeneros} from '../Generos/service'
import {Select as SelectUsos} from '../Usos/service'
import {Select as SelectColores} from '../Colores/service'
import {Select as SelectTallas} from '../Tallas/service'
import { SelectDinamic } from '../../components/SelectDinamic/SelectDinamic';
import {useForm} from 'react-hook-form'
// import Button from '@mui/material/Button';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function AlertDialog({open,handleClose,idProduct}) {
  const [data, setData] = useState({})
  const [avatarUrl, setAvatarUrl] = useState('')
  const [dataProductos, setDataProductos] = useState([])
  const [dataPrecios, setDataPrecios] = useState([])
  const [dataCategorias, setDataCategorias] = useState([])
  const [dataClasificacion, setDataClasificacion] = useState([])
  const [dataGeneros, setDataGeneros] = useState([])
  const [dataUsos, setDataUsos] = useState([])
  const [dataColores, setDataColores] = useState([])
  const [dataTallas, setDataTallas] = useState([])
  // const [closeSelect, setCloseSelect] = useState(false)
  // const [info, setInfo] = useState([])

  const {register,handleSubmit,setValue}=useForm({defaultValues:{
    // categoria:'',
    nombre:'',
    cantidad:'',
    // clasificacion:'',
    // genero:'',
    // precio:'',
    status:'',
    // utilidad:'',
    // utilidad:''

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


  const clickStorage2=async(img_nombre)=>{
 
    const inpFile=document.getElementById('img')
    console.log(inpFile.files[0])
    if(inpFile.files[0]!=undefined){
      const res = await actualizarImgItem(img_nombre,inpFile.files[0],inpFile.files[0].name)
      console.log(res)
      return res
    }else{
      return false
    }

    // uploadAvatarItem()
  }
  
  
  const update=()=>{
    // alert('update')
    // console.log(data.nombre)
    // setValue("nombre",data.nombre)
    setValue("status",data.status)
    setValue("cantidad",data.cantidad)
    setValue("id",data.id)
    // setAvatarUrl(data.img_url)
    // console.log(data.img_url)
  }
  const selectProductosSelect=async(id)=>{
    const res=await SelectProductos()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataProductos(dataNewArr)
  }
  const selectPreciosSelect=async(id)=>{
    const res=await SelectPrecios()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataPrecios(dataNewArr)
  }
  const selectCategoriasSelect=async(id)=>{
    const res=await SelectCategorias()

    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);

    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataCategorias(dataNewArr)
  }
  const selectClasificacionSelect=async(id)=>{
    const res=await SelectClasificacion()
    console.log(res)
    // console.log(res)
    console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    console.log(res);
    console.log(result);
    console.log(expulsado);
    result.unshift(expulsado[0])
    console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataClasificacion(dataNewArr)
  }
  const selectGenerosSelect=async(id)=>{
    const res=await SelectGeneros()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataGeneros(dataNewArr)
  }
  const selectUsosSelect=async(id)=>{
    const res=await SelectUsos()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataUsos(dataNewArr)
  }
  const selectColoresSelect=async(id)=>{
    const res=await SelectColores()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataColores(dataNewArr)
  }
  const selectTallasSelect=async(id)=>{
    const res=await SelectTallas()
    console.log(res)
    // console.log(res)
    // console.log(id)
    const result = res.filter((item) => item.id != id);
    const expulsado = res.filter((item) => item.id == id);
    // console.log(res);
    // console.log(result);
    // console.log(expulsado);
    result.unshift(expulsado[0])
    // console.log(result);
    var dataNewArr=[]
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        var dataNew={
            label:item.nombre,
            value:item.id
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNewArr)
    setDataTallas(dataNewArr)
  }

  const effectSelect=async(res2)=>{
    const res=res2[0]
    console.log(res)
    selectProductosSelect(res.producto)
    selectPreciosSelect(res.precio)
    selectCategoriasSelect(res.categoria)
    selectClasificacionSelect(res.clasificacion)
    selectGenerosSelect(res.genero)
    selectUsosSelect(res.uso)
    selectColoresSelect(res.color)
    selectTallasSelect(res.talla)
  }
  
  useEffect(() => {
    // alert('use efect PRUEBA')
    // setCloseSelect(false)
    setDataProductos([])
    setDataPrecios([])
    setDataCategorias([])
    setDataClasificacion([])
    setDataGeneros([])
    setDataUsos([])
    setDataColores([])
    setDataTallas([])
    
    // setAvatarUrl('https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
    const efectProductsSelect=async(idProduct)=>{
      // alert('efectProductsSelect')
      const resSelect= await SelectId(idProduct)
      console.log(resSelect)
      setData(resSelect[0])
      effectSelect(resSelect)
    }

    if(open){
      efectProductsSelect(idProduct)
      
    }
    // efectProductsSelect(idProduct)
    
  }, [open])

  useEffect(() => {
  update()
  }, [data])


  
  const resetModal=()=>{
    // alert('reset modal')
    handleClose()
    setValue("nombre","")
    setValue("cantidad","")
    setValue("id","")
    // setCloseSelect(true)
  }

  const gesSubmit=async(data)=>{
    data.status=Number (data.status)
    data.cantidad=Number (data.cantidad)
    data.id=Number (data.id)
    // console.log(data)
    
    const select_Productos=document.getElementById('select_Productos')
    console.log(select_Productos.value)

    const select_Precios=document.getElementById('select_Precios')
    console.log(select_Precios.value)
    
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


    console.log(data)
    const data2={
      status:data.status,
      cantidad:data.cantidad,
      producto:select_Productos.value,
      precio:select_Precios.value,
      categoria:select_Categorias.value,
      clasificacion:select_Clasificacion.value,
      genero:select_Generos.value,
      uso:select_Usos.value,
      color:select_Colores.value,
      talla:select_Tallas.value
    }

    Update(data2,data.id)
    resetModal()
    
  }



  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog   
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
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
                    
                    <IconButton onClick={resetModal} color='error' size="small" ><CloseIcon/></IconButton>
                </Grid>
                    
            </Grid>
          </DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Productos</label>
                          {dataProductos.length>0?<SelectDinamic id='select_Productos' data={dataProductos}  edit={true} />:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Precio</label>
                          {dataPrecios.length>0?<SelectDinamic id='select_Precios' data={dataPrecios}  edit={true} />:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Categorias</label>
                          {dataCategorias.length>0?<SelectDinamic id='select_Categorias' data={dataCategorias}  edit={true}/>:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <br />

                      
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Clasificacion</label><br />
                          {dataClasificacion.length>0?<SelectDinamic id='select_Clasificacion' data={dataClasificacion}  edit={true}/>:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Genero</label>
                          {dataGeneros.length>0?<SelectDinamic id='select_Generos' data={dataGeneros}  edit={true} />:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Usos</label>
                          {dataUsos.length>0?<SelectDinamic id='select_Usos' data={dataUsos}  edit={true}/>:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <br />

                      
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Colores</label><br />
                          {dataColores.length>0?<SelectDinamic id='select_Colores' data={dataColores}  edit={true}/>:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor="">Tallas</label>
                          {dataTallas.length>0?<SelectDinamic id='select_Tallas' data={dataTallas}  edit={true}/>:<p style={{color:'black'}}>...</p>}
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <label htmlFor=""style={{display:'block'}}>Cantidad</label>
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