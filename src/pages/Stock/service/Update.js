import {supabase} from '../../../services/config/config.js'
import {tablaBD,tablaStorage} from './config.js'
export const Update=async(data,id)=>{
    // var dataRes
    // alert('update service')
    // console.log(data)
    // console.log(id)
    const { error } = await supabase
  .from(tablaBD)
  .update(data)
  .eq('id', id)
}


export const UpdateImgUrlTABLA=async(data,img_nombre)=>{
  // var dataRes
  // alert('update service')
  // console.log(data)
  // console.log(id)
  const { error } = await supabase
  .from(tablaStorage)
.update(data)
.eq('img_nombre', img_nombre)
}



