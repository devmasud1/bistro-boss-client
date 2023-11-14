const ContactCard = ({ data }) => {
  return (
    <div className="border">
      <div className="w-full h-10 bg-yellow-800"></div>
      <div className="flex flex-col flex-1 bg-slate-200 mx-5 text-center p-10 min-h-[160px]">
        <h2 className="md:text-xl uppercase font-medium">{data?.title}</h2>
        <h3>{data?.phone}</h3>
        <p>{data?.start && data?.start}</p>
        <p>{data?.end && data?.end}</p>
      </div>
    </div>
  );
};
export default ContactCard;
