import icon1 from '../images/software-service-img1-1.png';
import icon2 from '../images/software-service-img02.png';
import icon3 from '../images/software-service-img03.png';
const data = [
  {
    icon: icon1,
    title: 'Data Analytic',
    des: 'Squad development is the process creang learn web applications for to internet pros websites and web applications',
  },
  {
    icon: icon2,
    title: 'Cloud Solutions',
    des: 'Squad development is the process creang learn web applications for to internet pros websites and web applications',
  },
  {
    icon: icon3,
    title: 'Cyber Security',
    des: 'Squad development is the process creang learn web applications for to internet pros websites and web applications',
  },
];
export const Services = () => {
  return (
    <>
      <div className='bg-[url(/home/dev/office/react/tailwind-practice/src/images/software-service-bg.png)] bg-cover bg-no-repeat bg-center pb-40 pt-16 '>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:py-7 lg:justify-between gap-7 lg:gap-1  2xl:px-72'>
          <div
            className=' font-extrabold sm:text-3xl text-center sm:px-10 md:px-24 md:text-4xl px-7 text-xl
          lg:text-4xl lg:px-0 2xl:text-5xl'
            data-aos='fade-right'
          >
            <h1>
              <span className='text-blue-800'> Our Dynamic</span> Design and
              Strategy Squad
            </h1>
          </div>
          <div className='text-center py-10 lg:py-2' data-aos='fade-left'>
            <button className='bg-blue-700 text-white text-nowrap mt-3  hover:text-black text-base rounded-3xl rounded-tl-lg py-3 px-4 md:ml-4 duration-500'>
              Learn More
            </button>
          </div>
        </div>
        <div
          className='grid grid-cols-1 gap-14 sm:mx-20 md:grid-cols-2 lg:grid-cols-3 px-7'
          data-aos='zoom-in-down'
        >
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className='bg-white shadow-md py-5 px-4 rounded-2xl lg:py-16 lg:px-10'
              >
                <div className='flex gap-5 items-center pb-7'>
                  <img
                    className='cursor-pointer transition ease-in-out hover:scale-110 duration-1000'
                    src={item.icon}
                    alt=''
                  />
                  <h4 className='text-base font-bold'> {item.title}</h4>
                </div>
                <p className='text-[#616161] pb-5'>{item.des}</p>
                <div>
                  <a className='text-base' href='#'>
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
