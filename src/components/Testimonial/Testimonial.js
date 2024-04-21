import React from 'react'
import Slider from 'react-slick';
import test1 from '../../assets/test1.jpeg'
import test2 from '../../assets/test2.webp'
import test3 from '../../assets/test3.jpg'
import test4 from '../../assets/test4.webp'

const CarouselData = [
    {
        id:1,
        name: "Adelaide",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt porttitor mauris, sed vehicula risus porttitor vel. Ut ac pulvinar.",
        img: test1
    },
   {
        id:2,
        name: "Martin",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis massa nec mattis egestas. Suspendisse nec risus ut massa tempor.",
        img: test2
    },
    {
       id:3,
       name: "Ruth",
       testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum lacus, viverra et dapibus sit amet, vehicula sit amet nibh.",
       img: test3
   },
    {
       id:4,
       name: "Baabs",
       testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies vitae libero et interdum. Integer volutpat vestibulum tempus. Phasellus placerat",
       img: test4
   },
]

function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
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
    <div className='py-12'>
    <div className='container'>
        <div className=' mb-10 space-y-5'>
            <h1 data-aos="fade-up" className='text-center font-bold text-4xl font-cursive2'>Testimonials</h1>
        </div>

        <div data-aos="zoom-in">
            <Slider {...settings}>
                {CarouselData.map((data) => (
                    <div key={data.id} className='my-6'>
                        <div className='flex flex-col gap-4 py-8 px-6 mx-4 shadow-lg rounded-xl bg-primary/10 relative min-h-[300px]'>
                            <div className='mb-3'>
                                <img src={data.img} alt={data.name} className='w-20 h-20 rounded-full'/>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='mt-4 space-y-5'>
                                    <p className='text-xs text-gray-500'>{data.testimony}</p>
                                    <h1 className='text-xl font-cursive2 text-center'>~ {data.name}</h1>
                                   
                                </div>
                                
                            </div>
                            <p className='text-9xl text-gray-500 absolute right-0 top-0 font-serif'>,,</p>
                        </div>

                        
                    </div>
))}
            </Slider>
        </div>
    </div> 
</div>
)
}

export default Testimonial
