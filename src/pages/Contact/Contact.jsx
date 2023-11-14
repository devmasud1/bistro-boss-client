import Cover from "../Shared/Cover/Cover";
import contactCover from "../../assets/contact/banner.jpg";
import PageTitle from "../../components/PageTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      title: "phone",
      phone: "+38 (012) 34 56 789",
    },
    {
      title: "ADDRESS",
      phone: "+38 (012) 34 56 789",
    },
    {
      title: "WORKING HOURS",
      start: "Mon - Fri: 08:00 - 22:00",
      end: "Sat - Sun: 10:00 - 23:00",
    },
  ];
  return (
    <div>
      <PageTitle title="Bistro Boss | Contact"></PageTitle>
      <Cover
        img={contactCover}
        title="CONTACT US"
        subTitle="Would you like to try a dish?"
      />
      <SectionTitle subHeading="Visit Us" mainHeading="OUR LOCATION" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10 mx-5 lg:mx-0">
        {contactInfo.map((data, idx) => (
          <ContactCard data={data} key={idx}></ContactCard>
        ))}
      </div>

      <SectionTitle subHeading="Send Us a Message" mainHeading="CONTACT FORM" />
      <ContactForm/>
    </div>
  );
};
export default Contact;
