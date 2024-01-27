import {supabase} from '../../../services/config/config.js'
import {tablaBD} from './config.js'
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
  // var dataRes
  // alert('update service')
  // console.log(data)
  // console.log(id)
  const { error } = await supabase
  .from(tablaBD)
  .delete()
  .eq('id', id)


//   const { error } = await supabase
// .from(tablaBD)
// .update({status:0})
// .eq('id', id)
}


