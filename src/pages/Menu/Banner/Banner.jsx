import img from '../../../assets/menu/banner.jpg'
const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center bg-black opacity-60 text-white w-3/4 h-1/2">
          <div className=" text-white ">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">OUR MENU</h1>
            <p>Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
