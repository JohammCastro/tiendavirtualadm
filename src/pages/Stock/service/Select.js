import {supabase} from '../../../services/config/config.js'
import {tablaBD} from './config.js'
export const Select=async(categoria=null)=>{
    var dataRes
    const { data, error } = await supabase
    .from(tablaBD)
    .select('id,status,cantidad,productos!inner(nombre,img_url,id),generos!inner(nombre,id),precios!inner(nombre,id),categorias!inner(nombre,id),clasificacion!inner(nombre,id),usos!inner(nombre,id),colores!inner(nombre,id),tallas!inner(nombre)')
    // .eq('countries.name', 'Indonesia')
    console.log(data)
    console.log(error)
    var dataNewArr=[]
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        var dataNew={
            id:item.id,
            status:item.status,
            cantidad:item.cantidad,
            img_url:item.productos.img_url,
            categorias:item.categorias.nombre,
            clasificacion:item.clasificacion.nombre,
            colores:item.colores.nombre,
            generos:item.generos.nombre,
            precios:item.precios.nombre,
            productos:item.productos.nombre,
            tallas:item.tallas.nombre,
            usos:item.usos.nombre
        }
        dataNewArr.push(dataNew)
    }
    console.log(dataNew)
    dataRes=dataNewArr
    // if(categoria!=null){
    //     const { data, error } = await supabase
    //     .from(tablaBD)
    //     .select('')
    //     .eq('categoria', categoria)
    //     dataRes=data
    //     if(error!=null){
    //         console.log(error)
    //     }
    // }else{
    //     const { data, error } = await supabase
    //     .from(tablaBD)
    //     .select('')
    //     dataRes=data
    //     if(error!=null){
    //         console.log(error)
    //     }


    // }
    return dataRes
}

export const SelectId=async(id=null)=>{
    const { data, error } = await supabase
        .from(tablaBD)
        .select('')
        .eq('id', id)
    return data
}
