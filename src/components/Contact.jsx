const Contact = () => {
  return (
    <>
      <div className='bg-[url(/home/dev/office/react/tailwind-practice/src/images/team-bg.png)] bg-cover bg-no-repeat bg-center pt-16'>
        <div
          className=' font-extrabold sm:text-3xl text-center sm:px-10 md:px-24 md:text-4xl px-7 text-xl
          lg:text-4xl lg:px-0 2xl:text-5xl'
        >
          <h1 className='2xl:px-8 mb-20'>
            <span className='text-blue-800'> Feel Free</span> Contact Us Now
          </h1>
        </div>
        <div>
          <div className='mx-auto mt-12 flex max-w-screen-xl flex-col gap-6 px-5 pb-10  sm:mt-16  md:mt-24 lg:flex-row'>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>
                Send Us A Message
              </h2>
              <p className='mt-3 text-sm text-[#8a8d91] sm:text-base lg:text-lg'>
                Give us chance to serve and bring magic to your brand.
              </p>
              <form className='mt-6 sm:mt-10'>
                <div className='mb-5 flex flex-col gap-4 md:flex-row'>
                  <div className='w-full'>
                    <label className='text-base sm:text-lg lg:text-xl'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='shadow-card mt-3 w-full rounded-xl bg-blue-700 placeholder:text-white py-2 pl-3 sm:py-3 '
                    />
                  </div>
                  <div className='w-full'>
                    <label className='text-base placeholder:text-white sm:text-lg lg:text-xl'>
                      Your Email
                    </label>
                    <input
                      type='text'
                      placeholder='AwalSolution@example.com'
                      className='shadow-card mt-3 w-full rounded-xl bg-blue-700 placeholder:text-white py-2 pl-3 sm:py-3'
                    />
                  </div>
                </div>
                <label className='text-base  sm:text-lg lg:text-xl'>
                  Your Phone
                </label>
                <input
                  type='text'
                  placeholder='+8250-3560 6565'
                  className='shadow-card mb-5 mt-3 w-full rounded-xl bg-blue-700 placeholder:text-white py-2 pl-3 sm:py-3'
                />
                <label className='text-base sm:text-lg lg:text-xl'>
                  Message
                </label>
                <textarea
                  rows={5}
                  cols={40}
                  placeholder='How can we help you?'
                  className='shadow-card mt-3 w-full rounded-xl bg-blue-700 placeholder:text-white py-2 pl-3 sm:py-3'
                ></textarea>
              </form>
              <button className='bg-blue-700 text-white text-nowrap mt-10  text-base rounded-3xl rounded-tl-lg py-3 px-8 md:ml-4 lg:ml-10 duration-500'>
                Send Message
                <i className='fa-solid fa-arrow-up-long ml-2 rotate-45 sm:ml-4'></i>
              </button>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left'>
              <iframe
                loading='lazy'
                className='h-48 w-full rounded-xl sm:h-64 md:h-96 lg:h-full'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13886.098561400935!2d71.62053226738281!3d29.53021211580633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6420971a9d5b096b%3A0x460c41976e26683e!2sAwal%20Solution!5e0!3m2!1sen!2s!4v1723705882494!5m2!1sen!2s'
                title='London Eye, London, United Kingdom'
                aria-label='London Eye, London, United Kingdom'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
