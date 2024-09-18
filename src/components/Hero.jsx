import hero from '../images/hero-img.png';

export const Hero = () => {
  return (
    <>
      <div className='bg-[url(/home/dev/office/react/tailwind-practice/src/images/hero-bg.png)] bg-cover bg-no-repeat bg-center pb-4 pt-24 '>
        <div className='grid grid-cols-1 md:grid-cols-2 md:py-7 lg:justify-between 2xl:gap-56 lg:gap-1  px-11'>
          <div
            className=' text-white px-3 lg:py-14 lg:pl-16 2xl:pl-48 lg:text-2xl transition ease-in-out hover:scale-110 duration-1000 2xl:pt-11'
            data-aos='fade-right'
          >
            <h5 className='text-sm font-semibold lg:text-2xl '>
              ________Welcome To Awal Solution
            </h5>
            <h1 className='text-xl font-extrabold py-4 sm:text-3xl md:text-4xl lg:text-4xl lg:py-10 '>
              Welcome to Awal Solution Freedom and Innovation in a Digital World
            </h1>
            <p className='lg:text-xl md:pb-5'>
              Techno real-time data management technologies techno software
              marketplaces winning customer data solutions world.
            </p>
            <button className='bg-white text-blue-700 text-nowrap mt-3  hover:text-black text-base rounded-3xl rounded-tl-lg py-3 px-8 md:ml-4 duration-500'>
              Get More
            </button>
          </div>
          <img className='pt-0 ' data-aos='fade-left' src={hero} alt='' />
        </div>
      </div>
    </>
  );
};
