import {supabase} from '../../../services/config/config.js'

export const ProductsDelete=async(id)=>{
    // var dataRes
    // alert('update service')
    // console.log(data)
    // console.log(id)
    const { error } = await supabase
  .from('productos')
  .update({status:0})
  .eq('id', id)
}

