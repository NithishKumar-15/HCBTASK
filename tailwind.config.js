/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'discoverluxuryimg1':"url('https://media.istockphoto.com/id/182057878/photo/hot-sports-car.webp?b=1&s=612x612&w=0&k=20&c=unhJC0Jd81U-3DcDoKmh8oiA4HmZnfyh4vD_VbL74l0=')",
        'discoverluxuryimg2':"url('https://media.istockphoto.com/id/1446257941/photo/red-sports-car-driving-on-a-mountain-road.jpg?s=612x612&w=0&k=20&c=5kjGPRWtZNMRzZF28YeaIa5UEAgCZzbmyJYwQcmfeYU=')"
      }
    },
  },
  plugins: [],
}

