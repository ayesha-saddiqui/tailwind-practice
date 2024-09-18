import about from '../images/software-about-img.png';
import team from '../images/seo.png';
export const About = () => {
  return (
    <>
      <div className='bg-white mt-10 text-center '>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:mx-28 '>
          <div
            className=' ml-3 sm:mx-28 md:mx-60 lg:mx-5 2xl:ml-16'
            data-aos='zoom-in'
          >
            <img src={about} alt='' />
          </div>
          <div className='sm:px-10 ' data-aos='fade-right'>
            <div
              className=' font-extrabold sm:text-3xl  sm:px-0 md:px-24 md:text-4xl px-0 text-xl
          lg:text-4xl lg:px-0 2xl:text-5xl'
            >
              <h1 className='my-5'>
                "<span className='text-blue-800'> Bringing</span> People
                Together For A Better Tomorrow"
              </h1>
            </div>
            <p className='text-[#616161] pb-5 px-2 sm:px-3 md:px-6 lg:px-10 sm:text-base md:text-lg lg:text-lg 2xl:pb-11'>
              Squad development is the process creang learn web aplications
              loream internet pros websites and web applications for you town.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center border-b-2 sm:border-b-2'>
              <div>
                <div className='flex gap-1  mb-3 '>
                  <div className='text-blue-700 px-3 text-xl'>
                    <ion-icon name='radio-button-on'></ion-icon>
                  </div>
                  <h4 className=' font-sans font-medium'>UI/UX Design</h4>
                </div>
                <p className='text-[#616161] pb-10 px-2 sm:px-2 sm:text-left md:px-6  sm:text-base md:text-lg lg:text-lg'>
                  Lorem ipsum dolor amet techno magna aliqua in design.
                </p>
              </div>
              <div>
                <div className='flex gap-1 mb-3'>
                  <div className='text-blue-700 px-3 text-xl'>
                    <ion-icon name='radio-button-on'></ion-icon>
                  </div>
                  <h4 className=' font-sans font-medium'>Development</h4>
                </div>
                <p className='text-[#616161] pb-10 px-2 sm:px-2 sm:text-left md:px-6  sm:text-base md:text-lg lg:text-lg'>
                  Lorem ipsum dolor amet techno magna aliqua in design.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 pt-7 pl-5 gap-1'>
              <div className=''>
                <img
                  className='rounded-full cursor-pointer transition ease-in-out hover:scale-110 duration-1000'
                  src={team}
                  alt=''
                />
              </div>
              <div className='text-left'>
                <p className='text-[#616161]   sm:px-2 sm:text-left md:px-0  sm:text-base md:text-lg lg:text-lg'>
                  Squad development is the process creang web minds lod
                </p>

                <div className=' py-5 flex gap-5'>
                  <h4 className=' font-sans font-medium'>Jawad Ali</h4>
                  <p className='text-[#616161]'> CEO at Awal Solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
