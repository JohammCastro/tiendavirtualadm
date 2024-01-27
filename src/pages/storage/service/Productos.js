import {supabase} from '../../../services/config/config.js'

export const ProductsSelect=async(categoria=null)=>{
    var dataRes
    if(categoria!=null){
        const { data, error } = await supabase
        .from('categorias')
        .select('')
        .eq('categoria', categoria)
        dataRes=data
        if(error!=null){
            console.log(error)
        }
    }else{
        const { data, error } = await supabase
        .from('productos')
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
        .from('productos')
        .select('')
        .eq('id', id)
    return data
}
