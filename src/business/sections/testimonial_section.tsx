import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialItem from "../components/testimonial_item";

export default function BusinessTestimonialSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

 const testimonials = [
    {
      testimonialImage: "https://res.cloudinary.com/drlcisipo/image/upload/v1721818529/Website%20images/Luis_Vives_pleeyc.jpg",
      testimonialName: "Luis Vives",
      testimonial: "I've used it to post a position, and I am impressed with how easy, intuitive, and effective Moil is. Within hours, we were able to connect with multiple great candidates for our position. I definitely recommend it and will keep using it."
    },
    {
      testimonialImage: "https://res.cloudinary.com/drlcisipo/image/upload/v1721818532/Website%20images/Liliana_Cervantes_g2gb0v.jpg",
      testimonialName: "Liliana Cervantes",
      testimonial: "Excellent platform whether to look for a job or to look for workers, I recommend it 100%"
    },
    {
      testimonialImage: "https://res.cloudinary.com/drlcisipo/image/upload/v1721818530/Website%20images/Miguel_Bustos_aktvri.jpg",
      testimonialName: "Miguel Bustos",
      testimonial: "100% RECOMMENDABLE !!. This platform helps me find employees when I need that extra help!"
    }
  ];


  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;

    console.log(currentSlide);

    return (
      <div className="flex items-center  gap-x-2">
        <button
          className={`${currentSlide < 1 ? 'disabled' : ''}`}
          onClick={() => previous()}
          disabled={currentSlide <= 1}
        >
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.305664" width="40" height="40" rx="20" fill="white" />
            <g clip-path="url(#clip0_9244_7652)">
              <path d="M20.0925 28.1011L12.9334 20.942L20.0925 13.7829L21.7402 15.4165L17.415 19.7417H27.5499V22.1423H17.415L21.7402 26.4605L20.0925 28.1011Z" fill="black" fill-opacity="0.67" />
            </g>
            <defs>
              <clipPath id="clip0_9244_7652">
                <rect width="24" height="24" fill="white" transform="translate(8.5 8.30566)" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <p className="text-[18px] leading-[1.4] text-white">{`${currentSlide} / ${testimonials.length}`}</p>


        <button
          className={`${currentSlide <= testimonials.length ? 'disabled' : ''}`}
          onClick={() => next()}
          disabled={currentSlide >= testimonials.length}
        >
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.305664" width="40" height="40" rx="20" fill="white" />
            <g clip-path="url(#clip0_9244_4770)">
              <path d="M20.9164 28.1011L19.2686 26.4676L23.5939 22.1423H13.459V19.7417H23.5939L19.2686 15.4236L20.9164 13.7829L28.0755 20.942L20.9164 28.1011Z" fill="black" fill-opacity="0.67" />
            </g>
            <defs>
              <clipPath id="clip0_9244_4770">
                <rect width="24" height="24" fill="white" transform="translate(8.5 8.30566)" />
              </clipPath>
            </defs>
          </svg>

        </button>
      </div>
    )
  }


  return (
    <div className="bg-[#5843BD] px-6 sm:px-8 md:px-12 lg:px-0 py-16 flex justify-center flex-col items-center gap-y-8 ">

      <p className="text-white text-[24px] md:text-[30px] lg:text-[36px] leading-[1.3] text-center font-medium">What our users are saying</p>

      <Carousel
        swipeable={true}
        draggable={true}
        renderButtonGroupOutside={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={typeof window !== 'undefined' && window.innerWidth < 500}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 0.8s ease"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType=
        {typeof window !== 'undefined' && window.innerWidth < 500 ? 'mobile' :
          typeof window !== 'undefined' && window.innerWidth < 1024 ? 'tablet' :
            'desktop'
        }
        customButtonGroup={<ButtonGroup />}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            testimonialImage={testimonial.testimonialImage}
            testimonialName={testimonial.testimonialName}
            testimonial={testimonial.testimonial}
          />
        ))}
      </Carousel>


    </div>
  )
}