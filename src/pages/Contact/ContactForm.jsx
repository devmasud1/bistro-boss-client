const ContactForm = () => {
  return (
    <div className="bg-[#F3F3F3] p-20 my-16">
      <form className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered normal-case"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered normal-case"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="input input-bordered normal-case"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <input
            type="text"
            name="message"
            placeholder="Write your message here"
            className="input input-bordered normal-case"
            required
          />
        </div>
        <div className="text-center pt-5">
          <input
            className="btn btn-accent "
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
