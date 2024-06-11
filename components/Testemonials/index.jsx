import React from 'react'

const Testemonial = () => {
  return (
    //   <section className="p-6">
    //       <div className="container max-w-xl mx-auto">
    //           <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
    //               <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
    //               <blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
    //               <div className="text-center dark:text-gray-600">
    //                   <p>Leroy Jenkins</p>
    //                   <p>CEO of Company Co.</p>
    //               </div>
    //               <div className="flex space-x-2">
    //                   <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
    //                   <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
    //                   <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
    //                   <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
    //               </div>
    //           </div>
    //       </div>
    //   </section>

      <section className="py-8 bg-white ">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
              <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                  <div className="relative text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                  </div>
                  <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                  <p>Leroy Jenkins</p>
              </div>
              <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                  <div className="relative text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                          <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                          <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                  </div>
                  <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                  <p>Leroy Jenkins</p>
              </div>
          </div>
      </section>
  )
}

export default Testemonial