import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const BrandLogo = () => {
  return (
    <Box sx={{height:"100px",backgroundColor:"rgba(44, 40, 40 )"}}>
        <div className='w-5/6 mx-auto'>
        <Stack direction="row" sx={{justifyContent:"space-between",alignItems:'center'}}>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Mercedes-Benz.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/BMW.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Audi.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Ford.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Jaguar.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Tesla.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Aston-Martin.png' className='h-full' width={100}></img>
            <img src='https://www.izmostock.com/wp-content/uploads/2015/12/Lexus.png' className='h-full' width={100}></img>
        </Stack>
        </div>
    </Box>
  )
}
