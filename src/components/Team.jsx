import team1 from '../images/software-team-img1.png';
import team2 from '../images/software-team-img3.png';
import team3 from '../images/software-team-img4.png';
const data = [
  {
    icon: team1,
    title: 'Jawad Ali',
    des: 'C.E.O',
  },
  {
    icon: team2,
    title: 'Ayesha Saddique',
    des: 'C.E.O',
  },
  {
    icon: team3,
    title: 'Iqbal Hassan',
    des: 'C.E.O',
  },
];

const Team = () => {
  return (
    <>
      <div>
        <div className='bg-[url(/home/dev/office/react/tailwind-practice/src/images/team-bg.png)] bg-cover bg-no-repeat bg-center pb-20 pt-16 '>
          <div
            className=' font-extrabold sm:text-3xl text-center sm:px-10 md:px-24 md:text-4xl px-7 text-xl
          lg:text-4xl lg:px-0 2xl:text-5xl'
          >
            <h1 className='2xl:px-8 mb-20'>
              " <span className='text-blue-800'> Meet Our</span> Expert The
              Trust From Client "
            </h1>
          </div>
          <div
            className='grid grid-cols-1 gap-14 items-center md:grid-cols-2 lg:grid-cols-3 mx-5 2xl:mx-24 mt-5'
            data-aos='zoom-in-down'
          >
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-[#ffffff] px-10 md:px-16 lg:px-20 2xl:px-36 rounded-3xl   border border-solid border-[rgba(30, 30, 30, 0.1)]'
                >
                  <div className='pt-4'>
                    <img
                      className='cursor-pointer transition ease-in-out hover:scale-110 duration-1000'
                      src={item.icon}
                      alt=''
                    />
                    <h4 className='text-base font-bold text-center py-3'>
                      {' '}
                      {item.title}
                    </h4>
                  </div>
                  <p className='text-[#616161] pb-5 text-center'>{item.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
