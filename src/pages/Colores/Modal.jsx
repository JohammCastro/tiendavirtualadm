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

  const {register,handleSubmit,setValue}=useForm({defaultValues:{
    // categoria:'',
    nombre:'',
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
    setValue("nombre",data.nombre)
    setValue("status",data.status)
    setValue("rgba",data.rgba)
    setValue("id",data.id)
    // setAvatarUrl(data.img_url)
    // console.log(data.img_url)
  }
  
  
  useEffect(() => {
    setAvatarUrl('https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
    const efectProductsSelect=async(idProduct)=>{
      // alert('efectProductsSelect')
      const resSelect= await SelectId(idProduct)
      // console.log(resSelect)
      setData(resSelect[0])
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
    setValue("rgba","")
    setValue("id","")
  }

  const gesSubmit=async(data)=>{
    data.status=Number (data.status)
    data.id=Number (data.id)
    var data2={
      status:data.status,
      nombre:data.nombre,
      rgba:data.rgba
    }

    
    // console.log(data2)

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
                {"Editar Color"}
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
                  
                      <Grid item md={12} xs={12}>
                          <label htmlFor="" style={{display:'block'}}>nombre</label>
                          <input type="text" style={{width:'100%'}} {...register('nombre')}/>
                      </Grid>
                      <Grid item md={5} xs={12}>
                          {/* <label htmlFor="">status</label><br /> */}
                          <input type="text" style={{display:'none'}} {...register('status')}/>
                      </Grid>
                      <Grid item md={1} xs={12}>
                          {/* <label htmlFor="">id</label> */}
                          <input type="text" style={{display:'none'}} {...register('id')}/>
                      </Grid>
                      <Grid item md={1} xs={12}>
                          {/* <label htmlFor="">id</label> */}
                          <input type="text" style={{display:'none'}} {...register('img_nombre')}/>
                      </Grid>
                      <br />

                      <Grid item md={12} xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input style={{height:'100px',width:'100px'}} type="color" name="" id="img"  {...register('rgba')}/>
                      </Grid>
                      {/* <Grid item xs={5}>
                          <label htmlFor="">img preview</label>
                          <input type="text" {...register('nombre')}/>
                      </Grid>
                      <Grid item xs={5}>
                          <label htmlFor="">input file</label>
                          <input type="text" {...register('status')}/>
                      </Grid> */}
                      

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