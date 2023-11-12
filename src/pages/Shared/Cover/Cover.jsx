const Cover = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero h-[60vh]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center bg-black opacity-60 text-white w-3/4 h-1/2">
        <div className=" text-white ">
          <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
            {title}
          </h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};
export default Cover;
