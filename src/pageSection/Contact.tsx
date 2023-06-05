const Contact = () => {
  return (
    <section
      id="contact"
      className="my_container flex min-h-screen flex-col justify-center gap-8 bg-gradient-to-b from-black to-gray-800 pt-4 text-white md:h-screen md:pt-0"
    >
      <div>
        <h2 className="mb-2 max-w-screen-md border-b-2 pb-1 pl-1 text-4xl font-semibold md:w-2/3 md:text-5xl">
          Contact
        </h2>
        <p>Submit the form below to get in touch with me</p>
      </div>

      <div>
        <form
          action="https://getform.io/f/5047f652-95b9-4c27-9b71-84cc7e570dac"
          method="POST"
          className="grid gap-3 md:w-1/2"
        >
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name here"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email here"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your Message here"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:border-sky-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-fit rounded-lg bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white duration-300 hover:scale-110"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
