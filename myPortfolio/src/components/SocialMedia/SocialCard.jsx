import React from 'react'
function SocialCard() {
      return (
            <div class="flex font-sans m-2">
                  <div class="flex-none w-48 relative">
                        <img src="https://images.pexels.com/photos/2533311/pexels-photo-2533311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div class="flex-auto p-6">
                        <div class="flex flex-wrap">
                              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                                    eCommerce App
                              </h1>
                              <a
                                    class="text-lg font-semibold text-slate-500 hover:cursor-pointer hover:text-slate-800"
                                    href="#"
                              >
                                    Visit Github
                              </a>
                              <div class="w-full flex-none text-sm font-medium text-slate-700 mt-0.5">
                                    <div class="flex items-baseline">
                                          <div class="space-x-2 flex text-sm">
                                                <label>
                                                      <div class="h-5 pl-3 pr-3 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white text-xs">
                                                            React.js
                                                      </div>
                                                </label>
                                                <label>
                                                      <div class="h-5 pl-3 pr-3 rounded-lg flex items-center justify-center font-semibold bg-slate-900 text-white text-xs">
                                                            MongoDB
                                                      </div>
                                                </label>
                                                <label>
                                                      <div class="h-5 pl-3 pr-3 rounded-lg flex items-center justify-center font-semibold bg-slate-900 text-white text-xs">
                                                            Node.js
                                                      </div>
                                                </label>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <p class="text-sm text-slate-700">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate blanditiis est ea. Nostrum, veritatis. Minima ipsa dolorem ea, deserunt cum nulla illum reprehenderit, accusantium pariatur error quasi optio ad, facere alias ipsam eaque repellat perspiciatis. Est optio porro rem nulla officiis quod error, dolorum molestias odit. Esse nostrum pariatur omnis?
                        </p>

                  </div>
            </div>
      )
}

export default SocialCard