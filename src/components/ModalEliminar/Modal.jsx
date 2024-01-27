import * as React from 'react';
// import { useEffect ,useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
// import {useForm} from 'react-hook-form'
// import Button from '@mui/material/Button';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function AlertDialog({openEliminar,handleCloseEliminar,idProduct,Delete,borradoLogico,DeletePermanente}) {

  
  const resetModal=()=>{
    // alert('reset modal')
    handleCloseEliminar()
    // setValue("nombre","")
    // setValue("img_nombre","")
    // setValue("id","")
  }
  const eliminarClick=()=>{
    resetModal()
    if(borradoLogico){
      Delete(idProduct)
    }else{
      DeletePermanente(idProduct)
    }
  }


  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog   
      </Button> */}
      <Dialog
        open={openEliminar}
        onClose={handleCloseEliminar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <form action="" onSubmit={handleSubmit(gesSubmit)}> */}
          <DialogTitle id="alert-dialog-title">
            
            <Grid container spacing={2}>
                <Grid item xs={11}>
                {"Eliminar"}
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
                  
                      <Grid item xs={12}>
                        {borradoLogico?<span>SEGURO QUIERES ELIMINAR ESTE ARCHIVO?</span>:<span>EL ARCHIVO SELECCIONADO SERA BORRADO PERMANENTEMENTE DEL SISTEMA.
                        SEGURO QUIERES ELIMINAR ESTE ARCHIVO?</span>}
                          
                      </Grid>
                      
                      

                </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Grid container spacing={2}>
              
              
                <Grid item xs={9}>
                  <Button  type='submit' onClick={resetModal}>CANCELAR</Button>
                </Grid>
                <Grid item xs={1}>
                  <Button  type='submit' color="error" onClick={eliminarClick}>ELIMINAR</Button>
                </Grid>
              

            </Grid>
          
        </DialogActions>
        {/* </form> */}
      </Dialog>
    </>
  );
}