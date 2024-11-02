import Grid from '@mui/material/Grid2';
import { Container } from '@mui/system'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


export const Footer = () => {
    return (
        <div>
            <div className='bg-black'>
                <Container sx={{ height: "50px" }}>
                    <div className='h-full flex items-center'>
                        <img src='https://www.flaticon.com/media/dist/min/img/logos/flaticon-color-negative.svg' className='block' alt="...icon" width={200}></img>
                    </div>
                </Container>
            </div>
            <hr />
            <div className='bg-black'>
                <Container sx={{ height: "300px" }}>
                    <Grid container sx={{ height: "100%", alignItems: "center", color: "white" }}>
                        <Grid size={4} sx={{ color: "white" }}>
                            <div>
                                <LocationOnIcon></LocationOnIcon>
                                <span className='inline-block ms-2'>217 Ash, Dr. St Josh</span>
                            </div>
                            <div>
                                <LocalPhoneIcon></LocalPhoneIcon>
                                <span className='inline-block ms-2'>122345456</span>
                            </div>
                        </Grid>

                        <Grid size={4}>
                            <ul>
                                <li className='text-3xl'>Shop</li>
                                <li className='text-xl mt-2'>Sports Car</li>
                                <li className='text-xl mt-2'>Electric</li>
                                <li className='text-xl mt-2'>hybrid</li>
                            </ul>
                        </Grid>

                        <Grid size={4}>
                            <ul>
                                <li className='text-3xl'>Company</li>
                                <li className='text-xl mt-2'>About Us</li>
                                <li className='text-xl mt-2'>Our Services</li>
                                <li className='text-xl mt-2'>Contact Us</li>
                                <li className='text-xl mt-2'>Privacy</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <hr />

            <div className='bg-black'>
                <Container sx={{ height: "50px" }}>
                    <div className='h-full flex items-center text-white justify-between'>
                        <h1>@Luxury zip car sell,All Rights Reserved 20224</h1>
                        <div>
                            <span>Follow Us</span>
                            <FacebookIcon sx={{ fontSize: "35px",marginLeft:"20px"}}></FacebookIcon>
                            <InstagramIcon sx={{ fontSize: "35px" }}></InstagramIcon>
                            <XIcon sx={{ fontSize: "35px" }}></XIcon>
                            <YouTubeIcon sx={{ fontSize: "35px" }}></YouTubeIcon>
                        </div>
                    </div>
                </Container>
            </div>
            <hr />
            <div className='bg-black h-20 rounded-b-lg'>

            </div>
        </div>
    )
}
