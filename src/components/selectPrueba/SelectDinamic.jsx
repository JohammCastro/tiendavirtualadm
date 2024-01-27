import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';

const options = [];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChangeInput=(newInputValue)=>{
    var options2=[];
    options2.push(newInputValue)
    console.log(options)
    setValue(options2)
    setInputValue(newInputValue);
  }

  useEffect(() => {
    // alert('efect')
    // setValue(options[0])
  }, [value])
  

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          handleChangeInput(newInputValue)
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      <input type="text" name="" id="" value={value !== null ? `${value}` : 'null'} />
    </div>
  );
}
