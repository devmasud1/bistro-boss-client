const SectionTitle = ({subHeading, mainHeading}) => {
    return(
        <div className="w-1/2 lg:w-3/12 mx-auto text-center">
            <h2 className="text-base md:text-xl text-orange-600 mb-3">----{subHeading}----</h2>
            <h1 className="text-2xl lg:text-4xl border-y-2 border-teal-600 py-4">{mainHeading}</h1>
        </div>
    )}
export default SectionTitle;