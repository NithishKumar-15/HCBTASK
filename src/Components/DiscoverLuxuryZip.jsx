import React from 'react'
import Grid from '@mui/material/Grid2';
import LogoutIcon from '@mui/icons-material/Logout';

export const DiscoverLuxuryZip = () => {
    return (
        <div className='bg-slate-900 pt-8 text-white'>
            <h1 className='text-center text-5xl'>DISCOVER LUXURY ZIP</h1>
            <Grid container sx={{ height: "450px", marginTop: '60px' }} spacing={2}>
                <Grid size={4} sx={{
                    backgroundImage: "url(https://media.istockphoto.com/id/182057878/photo/hot-sports-car.webp?b=1&s=612x612&w=0&k=20&c=unhJC0Jd81U-3DcDoKmh8oiA4HmZnfyh4vD_VbL74l0=)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <div className='h-3/6 w-2/4 flex flex-col justify-center items-center bg-stone-400/[0.5] rounded-full'>
                        <h1 className='text-5xl'>Luxuryzip</h1>
                        <h1 className='text-5xl'>CARE</h1>
                    </div>
                </Grid>

                <Grid size={4} sx={{ height: "98%" }}>
                    <div className='bg-discoverluxurybgimg1 h-2/4 bg-cover'>
                        <div className='h-3/5'>

                        </div>
                        <h1 className='text-center text-xl font-bold'>Experience Luxzip Luxury</h1>
                        <div className='flex justify-center'>
                            <span className='font-bold'>Learn More</span>
                            <LogoutIcon sx={{ marginLeft: "6px", fontSize: "30px"}}></LogoutIcon>
                        </div>
                    </div>

                    <div className='h-2/4 bg-discoverluxurybgimg2 bg-cover mt-2'>
                        <div className='h-3/5'>

                        </div>
                        <h1 className='text-center text-xl font-bold'>Experience Luxzip Luxury</h1>
                        <div className='flex justify-center'>
                            <span className='font-bold'>Learn More</span>
                            <LogoutIcon sx={{ marginLeft: "6px", fontSize: "30px" }}></LogoutIcon>
                        </div>
                    </div>
                </Grid>

                <Grid size={4} sx={{
                    backgroundImage: "url(https://media.istockphoto.com/id/1220103996/photo/generic-red-sports-car-moving-at-high-speed-on-racetrack.jpg?s=612x612&w=0&k=20&c=v9ay9_PnV6n3xmbXt-uKcmFNaqnC6fDKrNSFKr3Nxqw=)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <h1 className='mt-10 text-center text-5xl'>DESTINATION BY </h1>
                    <h1 className='text-center text-2xl'>BY LUXURYZIP</h1>
                </Grid>
            </Grid>
        </div>
    )
}
