import {supabase} from '../../../services/config/config.js'
import {tablaBD} from './config.js'
export const Insert=async(data)=>{
    // var dataRes
    console.log(data)
    const { error } = await supabase
  .from(tablaBD)
  .insert(
    data
    )
    return true
}

