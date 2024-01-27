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
    }else{
        const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        dataRes=data
        if(error!=null){
            console.log(error)
        }
        // .eq('categoria', categoria)
        // console.log(error)

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

export const SelectName=async(name=null)=>{
    const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        .eq('nombre', name)
    return data
}
