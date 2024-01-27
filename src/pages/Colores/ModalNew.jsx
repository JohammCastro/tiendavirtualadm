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
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function AlertDialog({openNew,handleCloseNew}) {
  const [avatarUrl, setAvatarUrl] = useState('')
  const {register,handleSubmit,setValue}=useForm({defaultValues:{
    nombre:'',
    status:'1'
  }
})





  const resetModalNew=()=>{
    handleCloseNew()
    setValue("nombre","")
    setValue("nombre","")
    setValue("status","1")
  }

  const clickColor=async()=>{
 
    const inpColorValue=document.getElementById('img')
    console.log(inpColorValue.value)
    // if(inpFile.files[0]!=undefined){
    //   const res = await aggImgItem(inpFile.files[0],inpFile.files[0].name)
    //   console.log(res)
    //   return res
    // }else{
    //   return false
    // }
    return inpColorValue.value
    // const res = await aggImgItem(inpFile.files[0],inpFile.files[0].name)
    // console.log(res)
    // return res
    // uploadAvatarItem()
  }

  const gesSubmit=async(data)=>{
    data.status=Number (data.status)
    console.log(data)
    
  
    var data2={
      status:data.status,
      nombre:data.nombre,
      rgba:data.rgba,
      // img_nombre:res.img_nombre,
    }
    Insert(data2)
    resetModalNew()
    
  }

  useEffect(() => {
      // alert('modal new')
      setAvatarUrl('https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
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
                {"Nuevo Color"}
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
                          <input type="text" style={{display:'none'}} {...register('img_nombre')}/>
                      </Grid>
                      <br />
                      <Grid item md={12} xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input style={{height:'100px',width:'100px'}} type="color" name="" id="img"  {...register('rgba')}/>
                      </Grid>
                      {/* <Grid item md={8} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input type="file" name="" id="img" onChange={previewImg}/>
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