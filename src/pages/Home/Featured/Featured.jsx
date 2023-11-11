import img from '../../../assets/home/chef-service.jpg'

const Featured = () => {
  return (
    <div className='my-20'>
      <div
        className="hero max-h-[550px]"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-3/4 bg-slate-100 text-black py-10 my-20">
            <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Bistro Boss</h1>
            <p className=" lg:w-3/4 mx-auto mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
