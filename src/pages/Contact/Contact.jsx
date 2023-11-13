import Cover from "../Shared/Cover/Cover";
import contactCover from "../../assets/contact/banner.jpg";
import PageTitle from "../../components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <div>
      <PageTitle title="Bistro Boss | Contact"></PageTitle>
      <Cover
        img={contactCover}
        title="CONTACT US"
        subTitle="Would you like to try a dish?"
      />
    </div>
  );
};
export default Contact;
