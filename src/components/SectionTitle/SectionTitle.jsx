const SectionTitle = ({subHeading, mainHeading}) => {
    return(
        <div className="w-1/2 md:w-5/12 mx-auto text-center z-10 my-10">
            <h2 className="text-base md:text-xl text-orange-600 mb-3">----{subHeading}----</h2>
            <h1 className="w-full text-xl md:text-2xl lg:text-3xl border-y-2 border-teal-600 py-4 uppercase">{mainHeading}</h1>
        </div>
    )}
export default SectionTitle;