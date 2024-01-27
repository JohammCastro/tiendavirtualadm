import {supabase} from '../../../services/config/config.js'
import {tablaBD} from './config.js'
export const Select=async(categoria=null)=>{
    var dataRes
    if(categoria!=null){
        const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        .eq('categoria', categoria)
        dataRes=data
        if(error!=null){
            console.log(error)
        }
        console.log(data)
    }else{
        const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        dataRes=data
        if(error!=null){
            console.log(error)
        }
        // .eq('categoria', categoria)
        // console.log(error
        console.log(data)

    }
    return dataRes
}

export const SelectId=async(id=null)=>{
    const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        .eq('id', id)
    return data
}
