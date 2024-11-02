import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Header = () => {
  return (
    <Box>
      <Grid container sx={{ height: "70px", backgroundColor: "black", alignItems: "center", borderTopRightRadius: "0.375rem", borderTopLeftRadius: "0.375rem" }}>
        <Grid size={3} sx={{ justifyContent: "center" }}>
          <img src='https://www.flaticon.com/media/dist/min/img/logos/flaticon-color-negative.svg' className='block mx-auto' alt="...icon"></img>
        </Grid>
        <Grid size={6} sx={{ backgroundColor: "rgba(225,225,225,0.4)", height: "100%" }}>
          <ul className='flex text-white justify-between h-full w-10/12 mx-auto items-center'>
            <li className='text-xl'>Home</li>
            <li className='text-xl'>Shop</li>
            <li className='text-xl'>About us</li>
            <li className='text-xl'>Contact</li>
          </ul>
        </Grid>
        <Grid size={3}>
          <button className='block bg-lime-200 w-28 h-11 text-xl rounded-lg mx-auto'>Contact Us</button>
        </Grid>
      </Grid>

      <Grid container sx={{
        marginTop: "4px", height: "600px",
        backgroundImage: "url(https://m.media-amazon.com/images/I/61Rx9tHudUL._AC_UF1000,1000_QL80_.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "0",
        backgroundRepeat: "no-repeat",
      }}>
        <Grid size={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className='w-6/12 bg-stone-400/[0.5] h-60 rounded-lg'>
            <div className='w-11/12 m-auto h-5/6 flex flex-col justify-center'>
              <h4 className='text-xl text-white text-center'>Power Reserve</h4>
              <div className='w-4/5 h-32 m-auto text-center border-lime-500 border-2 rounded-full text-white flex flex-col justify-center'>
                <span className='block text-2xl'>180</span>
                <span className='block text-2xl text-slate-100'>km/hr</span>
              </div>
              <h2 className='text-white text-center text-xl'>UNTRUPTED</h2>
            </div>
          </div>
        </Grid>
        <Grid size={6}>
          <div className='h-3/5 bg-stone-400/[0.5]'>
            <div className="flex flex-col justify-center text-white h-full text-7xl text-center italic ">
              <h1>Drive Luxury</h1>
              <h1>Onwards</h1>
            </div>
          </div>
          <div className='bg-stone-400/[0.5] mt-28 h-14 rounded-lg'>
            <ul className='flex text-white w-10/12 h-full mx-auto items-center justify-between'>
              <li className='text-xl'><span>Brand</span>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </li>
              <li className='text-xl'><span>Model</span>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </li>
              <li className='text-xl'><span>Type</span>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </li>
              <li>
                <button className='block bg-lime-200 w-28 h-11 text-xl rounded-lg mx-auto text-black'>Get Start</button>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid size={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p className='w-9/12 text-white text-base text-justify'>
              Eleviate your fashion journey with hilly loom, where luxury meets personilized style and seemelles shoping
            </p>
        </Grid>
      </Grid>
    </Box>
  )
}
