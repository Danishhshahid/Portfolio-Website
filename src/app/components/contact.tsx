import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="w-auto h-[4px] bg-[#cb6ce6]"></div>
      <section className="text-gray-300 body-font relative bg-gray-900">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#cb6ce6]">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Passionate about finance, technology, and innovation—exploring AI
              and blockchain to shape the future. Let’s connect!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#cb6ce6] focus:bg-white focus:ring-2 focus:ring-[#cb6ce6] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#cb6ce6] focus:bg-white focus:ring-2 focus:ring-[#cb6ce6] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#cb6ce6] focus:bg-white focus:ring-2 focus:ring-[#cb6ce6] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#cb6ce6] border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 rounded-lg text-lg transition duration-300 ease-in-out">
                  Submit Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-700 text-center">
                <a
                  href="mailto:Danishhshahid@gmail.com"
                  className="text-[#cb6ce6] hover:underline"
                >
                  Danishhshahid@gmail.com
                </a>
                <p className="leading-normal my-5">
                  Defense Phase 2.
                  <br />
                  Karachi South, 75600
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
