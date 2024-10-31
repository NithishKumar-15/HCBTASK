import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import LogoutIcon from '@mui/icons-material/Logout';

export const OverView = () => {
    return (
        <div className='bg-black'>
            <Container sx={{height:"650px"}}>
                <Grid container sx={{height:"100%"}}>
                    <Grid size={6} sx={{height:"50%",display:"flex",color:"white",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1 className='text-5xl'>WE DOMINATED THE</h1>
                        <h1 className='text-5xl'>AUTOMATIVE FIELD</h1>
                    </Grid>
                    <Grid size={6} sx={{height:"50%",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <div className='w-3/4'>
                        <p className='text-justify text-slate-300'>We Dominate the automative filed, setting the benchmark in innovation, quality, and performance, consistently leading the market</p>
                        <div>
                            <span>Learn More</span>
                            <LogoutIcon sx={{marginLeft:"6px",fontSize:"35px"}}></LogoutIcon>
                        </div>
                        </div>
                    </Grid>
                    <Grid size={12} sx={{height:"50%"}}>
                        <img src='https://cdn.pixabay.com/photo/2023/08/10/17/39/lamborghini-8182099_640.jpg' width={"100%"} className="h-full"></img>
                    </Grid>
                </Grid>
            </Container>

            {/* <Container sx={{ height: "450px" }}>
                <Grid container sx={{ height: "100%" }}>
                    <Grid size={6} sx={{ height: "50%", display: "flex", color: "white", flexDirection: "column", justifyContent: "center" }}>
                        <h1 className='text-4xl w-full'>WE DOMINATED THE</h1>
                        <h1 className='text-4xl'>AUTOMATIVE FIELD</h1>
                    </Grid>
                    <Grid size={6} sx={{ height: "50%", color: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <p className='w-3/4	text-justify text-slate-300'>We Dominate the automative filed, setting the benchmark in innovation, quality, and performance, consistently leading the market</p>
                        <div className=''>
                            <span>Learn More</span>
                            <LogoutIcon></LogoutIcon>
                        </div>
                    </Grid>
                    <Grid size={12} sx>

                    </Grid>
                </Grid>
            </Container> */}
        </div>
    )
}
