import {supabase} from '../../../services/config/config.js'

export const ProductsUpdate=async(data,id)=>{
    // var dataRes
    // alert('update service')
    // console.log(data)
    // console.log(id)
    const { error } = await supabase
  .from('productos')
  .update(data)
  .eq('id', id)
}

