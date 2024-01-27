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
import {getAvatarTabla,uploadAvatar} from './service'
import {Loading} from '../../components/Loading/Loading.jsx'
import {useForm} from 'react-hook-form'
// import Button from '@mui/material/Button';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function AlertDialog({open,handleClose,actLogo}) {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [loading, setLoading] = useState(false)
  
  // el cambio del input file(onchange),el preview de la img
  const clickStorage=async(e)=>{
    const imgPrw=document.getElementById('imgDinamic')
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
  // click del guardar
  const clickStorage2=async()=>{
    const imgPrw=document.getElementById('imgDinamic')
    // setSearchLogo(true)
    // alert('storage2')
    const inpFile=document.getElementById('img')
    console.log(inpFile.files[0])
    resetModal()
    setLoading(true)
    // imgPrw.src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'
    
    const res=await uploadAvatar(inpFile.files[0],inpFile.files[0].name)
    setTimeout(() => {
      if(res==true){
        // console.log('se cambio el avatar')
        setAvatarUrl("a")
        
        setTimeout(() => {
          // alert('settimeout')
          actLogo()
        }, 500);
      }
    }, 3000);


  }

  
  
  const resetModal=()=>{
    // alert('reset modal')
    handleClose()
    
  }
  
  
  // llamada asincrona para traer el perfil de la tabla
  const efectGetAvatar=async()=>{
      
    const res = await getAvatarTabla()
    console.log(res)
    
    setAvatarUrl(res)
    // console.log(data)
  }

  useEffect(() => {
    setLoading(false)
    efectGetAvatar()
    // setSearchLogo(true)
  }, [avatarUrl])

  


  




  return (
    <>
      {loading?<Loading open={true}/>:console.log('no loading')}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
          <DialogTitle id="alert-dialog-title">
            
            <Grid container spacing={2}>
                <Grid item xs={11}>
                {"Editar Avatar"}
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
                  
                {/* {loading?<Loading open={true}/>:console.log('a')} */}
                {/* <p style={{color:'black'}}>Storage Productos</p> */}
                
                <br />
                


                      <Grid item xs={6} md={4}>
                        {avatarUrl?<img src={avatarUrl} id='imgDinamic' alt="" style={{height:'100px',width:'130px'}}/>:<p style={{color:'black'}}>sin imagen</p>}
                      </Grid>
                      <Grid item xs={6} md={8} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input type="file" name="" id="img" onChange={clickStorage}/>
                      </Grid>
                      

                </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={clickStorage2} type='submit'  style={{marginRight:'15px'}}>GUARDAR</Button>
        </DialogActions>
        
      </Dialog>
    </>
  );
}