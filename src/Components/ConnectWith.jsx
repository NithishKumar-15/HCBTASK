import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const ConnectWith = () => {
    return (
        <div className='bg-slate-900 py-20'>
            <Container>
                <h1 className='text-white text-6xl font-semibold'>STAY CONNECTED WITH US  </h1>
                <Grid container sx={{ marginTop: "45px", height: "400px" }}>
                    <Grid size={6} sx={{ height: "100%" }}>
                        <p className='w-11/12 text-justify text-slate-300 h-2/4	'>stay connected with us to recieve the latest updates on new car models and exclusive promotions and valuable automative insights. Join our community and never miss out on exciting opportunity</p>
                        <div className='h-2/4 text-white flex w-2/5	justify-between	items-end'>
                            <FacebookIcon sx={{ fontSize: "35px" }}></FacebookIcon>
                            <InstagramIcon sx={{ fontSize: "35px" }}></InstagramIcon>
                            <XIcon sx={{ fontSize: "35px" }}></XIcon>
                            <YouTubeIcon sx={{ fontSize: "35px" }}></YouTubeIcon>
                        </div>
                    </Grid>
                    <Grid size={6} sx={{ height: "100%" }}>
                        <div className='h-full'>
                            <Grid container spacing={2} sx={{ height: "100%" }}>
                                <Grid size={6} sx={{
                                    height: "100p%",
                                    backgroundImage: "url(https://media.istockphoto.com/id/1167991014/photo/modern-blue-sports-car-in-a-gentle-light-on-black-background.jpg?s=612x612&w=0&k=20&c=szCbC--4de-XfIzSy9Q6vUTknUP9Are6SRRbBo74d0o=)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    justifyContent:"end"
                                }}>
                                    <div className='flex justify-end'>
                                    <FacebookIcon sx={{ fontSize: "35px", color:"white",margin:"10px"}}></FacebookIcon>
                                    </div>
                                </Grid>

                                <Grid size={6} sx={{
                                    height: "100p%",
                                    backgroundImage: "url(https://media.istockphoto.com/id/1304020215/photo/blue-sports-car-about-to-travel-through-tunnel-at-speed.jpg?s=612x612&w=0&k=20&c=_py5hUAshJPz2UKKhjcKcTzQIyk41u6ysniiOrx6VeA=)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}>

                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
