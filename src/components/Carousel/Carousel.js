import React from 'react'
import Slider from 'react-slick'
import Benz from '../../assets/aboutcar.png'
import BMW from '../../assets/heroimage.png'
import Convertible from '../../assets/Convertible.png'
import Chevy from '../../assets/Chevy.webp'

 const CarouselData = [
     {
         id:1,
         name: "Benz",
         price: "200,000",
         img: Benz
     },
    {
         id:2,
         name: "BMW",
         price: "220,500",
         img: BMW
     },
     {
        id:3,
        name: "Convertible",
        price: "330,999",
        img: Convertible
    },
     {
        id:4,
        name: "Chevrolet",
        price: "190,999",
        img: Chevy
    },
 ]

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
      };

  return (
    <div className='py-12 bg-primary text-white'>
        <div className='container'>
            <div className=' mb-10 space-y-5'>
                <h1 data-aos="fade-up" className='text-center font-sans font-bold text-4xl'>Top Sellers</h1>
                <div data-aos="fade-up" data-aos-delay="200" className='text-center sm:max-w-sm mx-auto text-xs opacity-75'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est quam, ornare eget ultrices id, interdum vitae lacus. Morbi pellentesque enim vitae odio sodales hendrerit
                </div>
            </div>

            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {CarouselData.map((data) => (
                        <div key={data.id} className='my-16'>
                            <div className='flex flex-col gap-4 py-8 px-6 mx-4'>
                                <div className='mb-3 flex justify-center items-center'>
                                    <img src={data.img} alt={data.name} className='w-auto sm:max-w-[200px] md:max-w-[250px] h-[150px]'/>
                                </div>
                            </div>

                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3 text-center'>
                                    <h1 className='text-md'>{data.name}</h1>
                                    <p className='text-xl'>GH&#8373; {data.price}</p>
                                </div>
                            </div>
                        </div>
  ))}
                </Slider>
            </div>
        </div> 
    </div>
  )
}

export default Carousel



