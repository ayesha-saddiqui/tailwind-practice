/* eslint-disable react/prop-types */

export const HeroSection = ({ subHeading, heading }) => {
  return (
    <div className='h-[500px] bg-[url(/home/dev/office/react/tailwind-practice/src/images/pages-bg.jpg)] bg-cover bg-no-repeat px-16  py-20 text-center text-white sm:py-16 md:p-24 lg:p-32 relative'>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#020842c2]'>
        <h2 className='my-12 sm:mt-16 md:mt-24'>
          <span className='rounded bg-blue-600 px-4 text-center sm:px-6 md:px-8 lg:px-10'>
            {subHeading}
          </span>
        </h2>
        <h1 className='mt- text-3xl font-bold sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl'>
          {heading}
        </h1>
      </div>
    </div>
  );
};
