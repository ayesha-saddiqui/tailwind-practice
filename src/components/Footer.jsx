export const Footer = () => {
  return (
    <>
      <div className='bg-[url(/home/dev/office/react/tailwind-practice/src/images/software-footer-bg.png)] bg-cover bg-no-repeat bg-center pb-20 pt-16 text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mx-3 2xl:mx-[321px] items-center '>
          <div className='px-4 py-4'>
            <h2 className='text-3xl   font-bold py-5'>awaL soLutioN</h2>
            <p className='mb-4 font-sans'>
              Data Science such a so that service man techno software
              development.
            </p>
            <div className='flex gap-1 items-center mb-5 '>
              <div className=' size-8 pl-[7px] pt-[8px] rounded-full bg-gradient-to-r from-blue-900 to-blue-500 mx-3 p-3 text-white sm:size-16"'>
                <ion-icon name='paper-plane-outline'></ion-icon>
              </div>
              <p>contact@info.com</p>
            </div>
            <div className='flex gap-1 items-center mb-3 '>
              <div className=' size-8 pl-[7px] pt-[8px] rounded-full bg-gradient-to-r from-blue-900 to-blue-500 mx-3 p-3 text-white sm:size-16"'>
                <ion-icon name='call-outline'></ion-icon>
              </div>
              <p>+806 (000) 88 99</p>
            </div>
          </div>
          {/* 2nd */}
          <div className='px-4 py-4'>
            <h4 className='pb-4 text-2xl font-medium'>Company</h4>
            <ul>
              <li className='mb-4'>__ About Us</li>
              <li className='mb-4'>__ Our Services</li>
              <li className='mb-4'>__ Our Team</li>
              <li className='mb-4'>__ Our NewsLetter</li>
            </ul>
          </div>
          {/* 3rd */}
          <div className='px-4 py-4'>
            <h4 className='pb-4 text-2xl font-medium'>Company</h4>
            <ul>
              <li className='mb-4'>__ Cloud solutions</li>
              <li className='mb-4'>__ Data warehouse</li>
              <li className='mb-4'>__ Data management</li>
              <li className='mb-4'>__ Data science</li>
            </ul>
          </div>
          {/* 4th */}
          <div className='px-4 py-4'>
            <h4 className='pb-4 text-2xl font-medium'>Our NewsLetter</h4>
            <div className='w-full mb-4'>
              <label className='text-base placeholder:text-white sm:text-lg lg:text-xl'>
                Your Email
              </label>
              <input
                type='text'
                placeholder='AwalSolution@example.com'
                className='shadow-card mt-3 w-full rounded-xl bg-white py-2 pl-3 sm:py-3'
              />
            </div>
            <label className='text-base   sm:text-lg lg:text-xl'>
              Your Phone
            </label>
            <input
              type='text'
              placeholder='+8250-3560 6565'
              className='shadow-card mb-5 mt-3 w-full rounded-xl bg-white py-2 pl-3 sm:py-3'
            />
            <div className='flex gap-5 items-center'>
              <h3 className='text-xl'>Social Media</h3>
              <div className='flex gap-3'>
                <div className=' size-8 pl-[7px] pt-[8px] rounded-full bg-gradient-to-r from-blue-500 to-blue-900 mx-3 p-3 text-white sm:size-16"'>
                  <ion-icon name='logo-whatsapp'></ion-icon>
                </div>
                <div className=' size-8 pl-[7px] pt-[8px] rounded-full bg-gradient-to-r from-blue-500 to-blue-900 mx-3 p-3 text-white sm:size-16"'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </div>
                <div className=' size-8 pl-[7px] pt-[8px] rounded-full bg-gradient-to-r from-blue-500 to-blue-900 mx-3 p-3 text-white sm:size-16"'>
                  <ion-icon name='logo-slack'></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=' bg-gradient-to-r from-blue-900 to-blue-600 px-8 py-4'
          data-aos='flip-up'
        >
          <div className='flex w-full flex-col items-center justify-between gap-2 ] py-2 lg:flex-row lg:bg-transparent'>
            <div>
              Copyright © 2024 <a href='#'>Awal Solution</a>, All rights
              reserved.
            </div>
            <ul className='flex  list-disc gap-8 marker:text-white items-center'>
              <li>
                <a href='#'>Terms of Up</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
