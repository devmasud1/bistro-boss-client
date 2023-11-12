import Cover from "../Shared/Cover/Cover";
import contactCover from "../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div>
      <Cover
        img={contactCover}
        title="CONTACT US"
        subTitle="Would you like to try a dish?"
      />
    </div>
  );
};
export default Contact;
