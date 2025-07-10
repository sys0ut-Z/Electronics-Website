import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Services from './components/Services/Services'
import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch2-removebg-preview.png'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import { useEffect, useState } from 'react'

// import aos
import AOS from 'aos'
import 'aos/dist/aos.css' // import aos css

const banner1 = {
  discount: "30% off",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, doloribus!",
  bgColor: "#f42c37", /* shade of red,  #f423c7 -> shade of magenta */
  textColor : "text-[#f42c37]",
}

const banner2 = {
  discount: "30% off",
  title: "Happy Hours",
  date: "15 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, doloribus!",
  bgColor: "#2dcc6f", /* shade of green */
  textColor : "text-[#2dcc6f]"
}

function App() {
  
  // load AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing : "ease-in-sine",
      delay: 200,
      offset: 100,
      once: true,
    })
    AOS.refresh();
  }, [])

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  return (
    <div className='text-rose-500 bg-slate-100 dark:bg-gray-800/97 w-[100%]'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner bannerData={banner1} />
      <Products />
      <Banner bannerData={banner2} />
      <Blogs />
      <Partners />
      <Footer />

      {
        orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>  
      }
    </div>

  )
}

export default App
