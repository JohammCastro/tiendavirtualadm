import react, { useState } from 'react'
import { useEffect } from 'react'
import Select from 'react-select'

const arr=[
  {label:'prueba',value:'1'},
  {label:'prueba2',value:'2'},
  {label:'prueba3',value:'3'},
]

export const SelectDinamic=({id,edit,data})=>{
  const [info, setInfo] = useState([])
  const [render, setRender] = useState(false)

  

  const handleSelectChange=(value)=>{
    console.log(value)
    const inpSelect=document.getElementById(id).value=value.value
  }
  var DefaultData=''
  // useEffect(() => {
  //   console.log(deffaultValue)
  //   if(deffaultValue!=undefined){
  //     DefaultData=data[0]
  //   }
  //   console.log(data)
  //   console.log(DefaultData)
  //   // console.log(arr[0])
    
  // }, [])
  // useEffect(() => {
  //   console.log(deffaultValue)
  //   if(deffaultValue!=undefined){
  //     DefaultData=data[0]
  //   }
  //   console.log(data)
  //   console.log(DefaultData)
  //   // console.log(arr[0])
    
  // }, [data])
  useEffect(() => {
    // alert('use efect')
    console.log(data)
    // console.log(deffaultValue)
    setInfo(data)
    // DefaultData=deffaultValue==0?info[0].value:''
    // if(info.length>0){
    //   if(deffaultValue==0){
    //     DefaultData=info[0].value
    //   }
    // }
    console.log(DefaultData)
    setRender(true)
  }, [])

  // useEffect(() => {
  //   // alert('use efect info cambio')
  //   if(close===true){
  //     // alert('use efect render true')
  //     setRender(false)

  //   }
  // }, [close])
  
  

  return (
    <>
      {render?
      <>
        {edit?<><Select
          options={info}
          onChange={handleSelectChange}
          defaultValue={info[0]}
        /><input type="text" name="" style={{display:'none'}} id={id} value={info[0].value} />
        </>
        :
        <><Select
        options={info}
        onChange={handleSelectChange}
      /><input type="text" name="" style={{display:'none'}} id={id} /></>}
      </>:console.log('no data')}
    </>
  )
}