import React from 'react'
import Heading from '../shared/Heading.jsx'
import ProductsRow1 from './ProductsRow1.jsx'
import ProductsRow2 from './ProductsRow2.jsx'
import img1 from '../../assets/product/p-1.jpg'
import img2 from '../../assets/product/p-2.jpg'
import img3 from '../../assets/product/p-3.jpg'
import img4 from '../../assets/product/p-4.jpg'
import img5 from '../../assets/product/p-5.jpg'
import img6 from '../../assets/product/p-7.jpg'
import img7 from '../../assets/product/p-9.jpg'


const productsData = [
  {
    id : 1, 
    img : img1,
    title : "Boat Headphone",
    price : "120",
    aosDelay : "0",
  },
  {
    id : 2, 
    img : img2,
    title : "Rocky Mountain",
    price : "120",
    aosDelay : "200",
  },
  {
    id : 3, 
    img : img3,
    title : "Googles",
    price : "320",
    aosDelay : "400",
  },
  {
    id : 4, 
    img : img4,
    title : "Boat Headphone",
    price : "220",
    aosDelay : "600",
  },
]

const productsData2 = [
  {
    id : 1, 
    img : img5,
    title : "Boat Headphone",
    price : "250",
    aosDelay : "0",
  },
  {
    id : 2, 
    img : img6,
    title : "Rocky Mountain",
    price : "190",
    aosDelay : "200",
  },
  {
    id : 3, 
    img : img7,
    title : "Googles",
    price : "170",
    aosDelay : "400",
  },
  {
    id : 4, 
    img : img5,
    title : "Boat Headphone",
    price : "340",
    aosDelay : "600",
  },
]

const Products = () => {
  return (
    <div>
      <div className='container'>
        {/* Header Section */}
        <Heading title="Our Products"
          subtitle="Explore our Products"/>

        {/* Body Section */}
        <ProductsRow1 products={productsData}/>
        <ProductsRow2 products={productsData2} />
      </div>
    </div>
  )
}

export default Products