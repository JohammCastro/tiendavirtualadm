import {supabase} from '../../../services/config/config.js'

const tablaStorage='productos'
export const storageCreate=async()=>{
    // var dataRes
    // console.log(data)
    const { data, error } = await supabase
    .storage
    .createBucket('avatars', {
      public: false,
      allowedMimeTypes: ['image/png','image/jpg','image/jpeg',,'image/jfif'],
      fileSizeLimit: 15024
    })
}

export const uploadImage=async(avatarFile,name)=>{
  // var dataRes
  alert('upload (subida) image')
  console.log(avatarFile)
  console.log(name)
// const avatarFile = event.target.files[0]
const { data, error } = await supabase
  .storage
  .from(tablaStorage)
  .upload('public/'+name, avatarFile, {
    cacheControl: '3600',
    upsert: false
  })
}


export const getUrl=async(name)=>{
  
  const { data, error } = await supabase
  .storage
  .from(tablaStorage)
  .createSignedUrl('avatar/'+name, 31536000)
  console.log(data)
  console.log(error)
  return data
}

export const uploadAvatar=async(avatarFile,name)=>{
  alert('upload avatar')
  
  // verificar si existe un avatar asociado al perfil
  const { data, error } = await supabase
  .storage
  .from(tablaStorage)
  .list('avatar', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  console.log(data)
  // console.log(data[0].name)
  console.log(error)


  // condicional de la respuesta a la peticion
  if(data.length>0){

    const nameOldAvatar=data[0].name
    console.log(nameOldAvatar)
    // const avatarFile = event.target.files[0]
    
    // eliminar avatar viejo
    const { data2, error2 } = await supabase
    .storage
    .from('productos')
    .remove(['avatar/'+nameOldAvatar])
      console.log(data2)
      console.log(error2)


    // subida del avatar nuevo
    const { data3, error3 } = await supabase
    .storage
    .from(tablaStorage)
    .upload('avatar/'+name, avatarFile, {
      cacheControl: '3600',
      upsert: false
    })
    console.log(data3)
    console.log(error3)

    const res=await getUrl(name)
    
  }else{
    
    // subida del avatar nuevo
    const { data3, error3 } = await supabase
    .storage
    .from(tablaStorage)
    .upload('avatar/'+name, avatarFile, {
      cacheControl: '3600',
      upsert: false
    })
    console.log(data3)
    console.log(error3)

    const res=await getUrl(name)
  }
  return true
}

export const getAvatarTabla=async()=>{
  var avatarStatic='https://static.thenounproject.com/png/2222628-200.png'

  // busca un avatar asociado al perfil
  const { data, error } = await supabase
  .storage
  .from(tablaStorage)
  .list('avatar', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  console.log(data)
  console.log(error)
  var urlReturn
  // si existe img de perfil
  if(data[0].name!='.emptyFolderPlaceholder'){
    
    console.log(data[0].name)
    const url=await getUrl(data[0].name)
    console.log(url)
    urlReturn=url.signedUrl
  }else{
    urlReturn=avatarStatic
  }

  return urlReturn
}




