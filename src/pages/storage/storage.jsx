import * as React from 'react';
import {storageCreate,uploadImage,uploadAvatar,getAvatarTabla} from './service/InsertProductos.js'
import { useEffect ,useState} from 'react';
import {supabase} from '../../services/config/config.js'
import {Loading} from '../../components/Loading/Loading.jsx'





export function Storage() {
  
  const [avatarUrl, setAvatarUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const btnPrueba=()=>{
    // btnPruebaf()
  }

  const clickStorage=async(e)=>{
    alert('storage')
    // storageCreate()
    setLoading(true)
    const res=await uploadAvatar(e.target.files[0],e.target.files[0].name)
    setTimeout(() => {
      if(res==true){
        console.log('se cambio el avatar')
        setAvatarUrl("a")
        
      }
    }, 3000);
  }

  const subirImg=(e)=>{
    alert('subirImg')
    console.log(e.target.files[0].name)
    // uploadImage(e.target.files[0],e.target.files[0].name)
  }







  // llamada asincrona para traer el perfil de la tabla
  const efectGetAvatar=async()=>{
      
    const res = await getAvatarTabla()
    console.log(res)
    
    setAvatarUrl(res)
    // console.log(data)
  }

  useEffect(() => {
    setLoading(false)
    efectGetAvatar()
  }, [avatarUrl])

  

  return (
    <>
      {loading?<Loading open={true}/>:console.log('a')}
      <p style={{color:'black'}}>Storage Productos</p>
      {avatarUrl?<img src={avatarUrl} alt="" style={{height:'100px'}}/>:<p style={{color:'black'}}>sin imagen</p>}
      <br />
      <input type="file" name="" id="img" onChange={clickStorage}/>
    </>
  );
}
