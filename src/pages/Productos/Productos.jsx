import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect ,useState} from 'react'
import {Select,getAvatarTabla,actualizarUrls,Delete,DeletePermanente} from './service'
// import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DataTable from '../../components/Tabla/Tabla';
import {Loading} from '../../components/Loading/Loading.jsx'
import Modal from './Modal';
import ModalNew from './ModalNew';
import ModalAvatar from './ModalAvatar.jsx';
import ModalEliminar from '../../components/ModalEliminar/Modal.jsx'
// import {getAvatarTabla} from './service/Estorage.js';
import {supabase} from '../../services/config/config.js';





export function Productos() {
  const [openNew, setOpenNew] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);
  const [borradoLogico, setBorradoLogico] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [refresh, setRefresh] = useState(false)
  // const [logic, setLogic] = useState(false)
  const [renderTabla, setRenderTabla] = useState(false)
  const [idProduct, setIdProduct] = useState("");
  const [data, setData] = useState([])
  const [url400, setUrl400] = useState([])
  // const [editAvatar, setEditAvatar] = useState(false)
  const [urlAvatar, setUrlAvatar] = useState("")


  


  // handle del modal para insertar data-----
  const handleNew=()=>{
    // alert('new')
    handleClickOpenNew()
  }
  const handleCloseNew = () => {
    setOpenNew(false);
  };
  const handleClickOpenNew = () => {
    setOpenNew(true);
  };
  // handle del modal para insertar data-----FIN


// handle del modal para modificar data-----
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const editar=(params)=>{
    // alert('modal')
    console.error(params.row.id)
    if(params.row.id){
      setIdProduct(params.row.id)
      handleClickOpen()
    }
    
    // console.log('idproduct proyecto',idProduct)
    
  }
// handle del modal para modificar data-----FIN

// handle del modal para modificar data-----
const handleCloseEliminar = () => {
  setOpenEliminar(false);
};
const handleClickOpenEliminar = () => {
  setOpenEliminar(true);
};

const borrar=(params)=>{
  // console.log(params)
  console.log(params.row.id)
  if(params.row.id){
    setIdProduct(params.row.id)
    setBorradoLogico(true)
    handleClickOpenEliminar()
    // Delete(params.id)
  }
  
}

const EliminadoPermanente=(params)=>{
  // console.log(params)
  console.log(params.row.id)
  if(params.row.id){
    setIdProduct(params.row.id)
    setBorradoLogico(false)
    handleClickOpenEliminar()
    // Delete(params.id)
  }
  
}


// renderizado de botones en la tabla
  const renderDetailsButton = (params) => {
      // console.log(params)
      return (
          <strong>
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 0 }}
                  onClick={() => {
                    // alert('editar')
                    // alert(params.row.id)
                    // console.log(params.row)
                    editar(params)
                  }}
              >
                  <EditIcon/>
              </Button>
              <Button
                  variant="contained"
                  color="error"
                  size="small"
                  style={{ marginLeft: 10}}
                  onClick={() => {
                    borrar(params)
                    // alert('error')
                    // alert(params.row.id)
                  }}
              >
                  <DeleteIcon/>
              </Button>
              <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  style={{ marginLeft: 10}}
                  onClick={() => {
                    EliminadoPermanente(params)
                    // alert('error')
                    // alert(params.row.id)
                  }}
              >
                  <WhatshotIcon/>
              </Button>
          </strong>
      )
  }
  // renderizado de imagen en la tabla
  const renderLogo = (params) => {
    console.log(params.row.img_url)
    return (
        <img style={{height:'50px',width:'50px'}} src={params.row.img_url}/>
    )
  }

  // llamada asincrona para llenar la tabla
  const efectSelect=async(categoriaUser)=>{
    var res = await Select(categoriaUser)
    console.log(res)
    const dataStatic=[{
      id: "XXX",img_nombre:"" ,img_url:"https://static.thenounproject.com/png/2222628-200.png",nombre: "XXXXXXXXXXXX",status:"XXX"
    }]
    
    console.log(res)
    var arrUrl400=[]
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      console.log(element.img_url)
      const response = await fetch(element.img_url);
      // const respuesta = await response.json();
      console.log(response);
      console.log(response.status);
      if(response.status===400){
        // alert('status 400')
        arrUrl400.push(element)
      }
    }
    console.log(arrUrl400)
    if(res.length<=0){
      res=dataStatic
    }
    if(arrUrl400.length>0){
      actualizarUrls(arrUrl400)
      efectSelect(null)
    }else{
      setData(res)
    }
    // console.log(resUrl)
    // if(resUrl){
    // }
    // console.log(data)
  }

  const buscadorLogo=async()=>{
    // alert('buscadorLogo')
    setUrlAvatar('https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif')
    const url= await getAvatarTabla()
    setUrlAvatar(url)
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    {field: 'img_url',headerName: 'Logo',width: 120,renderCell:renderLogo},
    { field: 'nombre', headerName: 'Producto', width: 190 },
    // { field: 'img_url', headerName: 'Logo', width: 190 },
    {field: 'status',headerName: 'Status',width: 150,},
    {field: 'acciones',headerName: 'Acciones',width: 250,renderCell:renderDetailsButton},
  ];
  

  const handleCloseAvatar = () => {
    setOpenAvatar(false);
  };
  const editarAvatar=()=>{
    setOpenAvatar(true)
  }

  // actualiza la tabla(deja de renderizar,y llama a llenar la tabla con nuevos datos)
  const actualizarTabla=()=>{
    // alert('actualizar tabla productos')
    setRenderTabla(false)
    efectSelect(null)
  }

// cod realtime para escuchar cambios en bd
const channelA = supabase
  .channel('schema-db-changes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
    },
    (payload) => actualizarTabla()

  )
  .subscribe()
// ----------------------------------------

    const actLogo=()=>{
      // alert('actlogo')
      var categoriaUser=null
      buscadorLogo()
      efectSelect(categoriaUser)
    }


  // el primer llamado a la funcion de llanado de tabla
  useEffect(() => {
    // alert('productos')
    // console.log('hola')
    var categoriaUser=null
    buscadorLogo()
    efectSelect(categoriaUser)
    
  }, [])

  // detecta si el state data se encuentra con DataObjectSharp,para renderizar la tabla
  useEffect(() => {
    // alert('data')
    if(data.length>0){
      // alert('data full')
      setRenderTabla(true)
    }
    
  }, [data])

  

  

  return (
    <>
      
      {/* <div style={{color:'red'}}>hoola</div> */}
      {/* <Loading open={true}/> */}
      {renderTabla?
      <>
        <h3 style={{color:'black'}}>PRODUCTOS</h3>
        <img src={urlAvatar} style={{height:'60px',borderRadius:'100%'}} alt="" />
        <div style={{paddingBottom:'100px',display:'inline'}}>
          <IconButton onClick={editarAvatar} size="small" aria-label="delete">
            <EditIcon  fontSize="inherit" />
          </IconButton>
        </div>
        <DataTable columns={{columns}} data={{data}}/>
        <Grid style={{marginTop:'1px'}} container spacing={2}>
            <Grid item xs={1}>
            <Button onClick={handleNew} color='success' size="small"  variant="contained">NUEVO</Button>
            </Grid>                
        </Grid>
      </>:<Loading open={true}/>}
      

      <ModalAvatar open={openAvatar} handleClose={handleCloseAvatar} actLogo={actLogo}/>
      <Modal open={open} handleClose={handleClose} idProduct={idProduct}/>
      <ModalNew openNew={openNew} handleCloseNew={handleCloseNew}/>
      <ModalEliminar openEliminar={openEliminar} handleCloseEliminar={handleCloseEliminar} idProduct={idProduct} Delete={Delete} borradoLogico={borradoLogico} DeletePermanente={DeletePermanente}/>
      
    </>
  );
}