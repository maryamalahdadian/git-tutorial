import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  
   
  return (  
    
    <Box className='select'
    >
    <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    id
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'rows',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>5</option>
    <option value={20}>20</option>
    <option value={30}>10</option>
  </NativeSelect>
</FormControl>
    </Box>
  );
}
