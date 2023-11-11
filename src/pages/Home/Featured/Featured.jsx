import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="relative">
      <div
        className="bg-fixed  my-20 py-20"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-800  opacity-50"></div>

        <div className="text-orange-600 z-10"></div>

        <div className="md:flex justify-center items-center h-full pb-20 mt-12 pt-12 px-10 md:px-36 text-white relative z-10">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p className="font-bold mt-5 md:mt-0">Aug 20, 2029</p>
            <p className="uppercase text-2xl font-semibold">
              Where can I get some?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-5 z-20 right-0 left-0 text-white">
        <SectionTitle
          subHeading="check it out"
          mainHeading="Featured Item"
        ></SectionTitle>
      </div>
    </div>
  );
};

export default Featured;
