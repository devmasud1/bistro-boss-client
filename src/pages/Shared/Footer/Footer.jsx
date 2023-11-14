const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-evenly items-center text-slate-200 w-full mt-12">
      <div className="w-full lg:w-1/2 h-52 bg-[#1F2937] text-center py-8 space-y-1">
        <h2 className="text-3xl font-medium">CONTACT US</h2>
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>+88 123456789</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
      </div>
      <div className="w-full lg:w-1/2 h-52 bg-[#111827] text-center py-8 space-y-1">
        <h2 className="text-3xl font-medium">Follow US</h2>
        <p>Join us on social media</p>
      </div>
    </footer>
  );
};
export default Footer;
