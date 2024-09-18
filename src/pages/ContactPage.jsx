import Contact from '../components/Contact';
import { HeroSection } from '../components/HeroSection';
const data = [
  {
    icon: <ion-icon name='map-outline'></ion-icon>,
    title: 'Enter Your Address',
    des: 'Street No 4 Gulshan-e-Madina Colony Near Al-Hanif School Super Chowk,Lodhran',
  },
  {
    icon: <ion-icon name='time-outline'></ion-icon>,
    title: 'Opening Hours',
    des: 'Mon - Fri: 10:00am - 05:00pm',
  },
  {
    icon: <ion-icon name='call-outline'></ion-icon>,
    title: 'Contact Directly',
    des: '+923083728960, +923004633604',
  },
];
export const ContactPage = () => {
  return (
    <div>
      <HeroSection subHeading='Contact page sub title' heading='Contact Us' />
      <div
        className=' font-extrabold sm:text-3xl text-center sm:px-10 md:px-24 md:text-4xl my-5 text-xl
          lg:text-4xl lg:px-0 2xl:text-5xl'
      >
        <h1>
          <span className='text-blue-800'> We Are</span> Here For You
        </h1>
      </div>

      <div className='grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 px-7 '>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-white shadow-md py-5 px-4 rounded-2xl lg:py-16 lg:px-10'
            >
              <div className=' text-center pb-7 '>
                <div className='text-blue-600 text-3xl font-bold pb-4'>
                  {item.icon}
                </div>
                <h4 className='text-base font-bold'> {item.title}</h4>
              </div>
              <p className='text-[#616161] pb-5 text-center'>{item.des}</p>
            </div>
          );
        })}
      </div>
      <Contact />
    </div>
  );
};
