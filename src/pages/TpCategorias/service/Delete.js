import {supabase} from '../../../services/config/config.js'
import {tablaBD} from './config.js'
import {tablaStorage} from './config.js'
export const Delete=async(id)=>{
    // var dataRes
    // alert('update service')
    // console.log(data)
    // console.log(id)
    const { error } = await supabase
  .from(tablaBD)
  .update({status:0})
  .eq('id', id)
}

export const DeletePermanente=async(id)=>{
  const permaDelete=async(id)=>{
    const { data, error } = await supabase
      .from(tablaBD)
      .delete()
      .eq('id', id)
      console.log(data)
      console.log(error)
  }
  console.log(id)
  // consultar la info
  const { data, error } = await supabase
  .from(tablaBD)
  .select('')
  .eq('id', id)

  console.log(data[0].img_nombre)
  // tiene una img asociada
  if(data[0].img_nombre!=null&&data[0].img_nombre!=undefined){
    // borrar la img del storage
    const { data2, error2 } = await supabase
    .storage
    .from(tablaStorage)
    .remove(['public/'+data[0].img_nombre])
      console.log(data2)
      console.log(error2)
    // borrar de la tabla bd
    permaDelete(id)
  }else{
    permaDelete(id)
  }
  



}
