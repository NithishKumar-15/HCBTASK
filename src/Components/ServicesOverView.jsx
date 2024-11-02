import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';


export const ServicesOverView = () => {
    return (
        <div className='bg-slate-900 pt-20'>
            <Container sx={{ height: "500px" }}>
                <h1 className='text-white text-5xl text-center'>SERVICE OVERVIEW</h1>
                <Grid container spacing={5} sx={{ alignItems: "center", justifyContent: "center", marginTop: "50px", border: "1px solid rgb(152, 144, 144)", height: "60%", borderRadius: "145px" }}>

                    <Grid size={3} sx={{ height: "90%", border: "1px solid rgb(152, 144, 144)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(249, 246, 244,0.3)" }}>
                        <div className='w-4/5'>
                            <h1 className='text-white text-xl text-center'>Variety of cars</h1>
                            <p className='text-slate-300 text-justify text-sm'>Explore wide variety of cars sedans, SUV's, trucks, and electrical vehicles all in one place</p>
                        </div>
                    </Grid>

                    <Grid size={3} sx={{ height: "90%", border: "1px solid rgb(152, 144, 144)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(249, 246, 244,0.3)" }}>
                        <div className='w-4/5'>
                            <h1 className='text-white text-xl text-center'>Competative Pricing</h1>
                            <p className='text-slate-300 text-justify text-sm'>Experience Competative pricing with options tolerated to fit your budget and fit your needs</p>
                        </div>
                    </Grid>

                    <Grid size={3} sx={{ height: "90%", border: "1px solid rgb(152, 144, 144)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(249, 246, 244,0.3)" }}>
                        <div className='w-4/5'>
                            <h1 className='text-white text-xl text-center'>24/7 Support</h1>
                            <p className='text-slate-300 ext-justify text-sm'>Access relaible 24/7 support for assistance with any questions or issue encounter</p>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
