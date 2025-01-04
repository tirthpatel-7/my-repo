import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white ">
  <div className="py-8 lg:py-16 px-4 mx-auto  max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-800">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-900 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-5">
          <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
      </form>
  </div>
</section>
  )
}

export default Contact
