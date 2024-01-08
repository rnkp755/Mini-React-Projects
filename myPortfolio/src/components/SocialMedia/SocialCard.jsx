import React from 'react'
import { Link } from 'react-router-dom'
function SocialCard(props) {
      const {
            type = "Social Media",
            profilePic = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            userName = "hackerraushan",
            profileURL = "https://linkedin.com/in/hackerraushan",
            followers = 0,
            connections = 0,
            repos = 0,
            posts = 0,

      } = props
      return (
            <div class="flex font-sans m-2 dark:bg-[#010409] rounded-2xl">
                  <div class="flex-none w-48 relative">
                        <img src={profilePic} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div class="flex-auto p-6">
                        <h1 class="flex-auto text-xl font-bold text-black dark:text-white text-center">
                              {type}
                        </h1>
                        <div class="flex flex-wrap">

                              <h1 class="flex-auto text-lg font-semibold text-slate-900 dark:text-slate-200 cursor-pointer hover:text-slate-400">
                                    <Link to={profileURL}>
                                          {userName}
                                    </Link>
                              </h1>
                              <a
                                    class="text-lg font-semibold text-slate-500 dark:text-slate-300 hover:cursor-pointer hover:text-slate-800 dark:hover:text-white"
                                    href={profileURL}
                              >
                                    Visit {type}
                              </a>

                        </div>

                        {type === "Github" ? (
                              <>
                                    <p class="text-lg font-semibold text-slate-900 dark:text-slate-200">
                                          Followers: <span>{followers}</span>
                                    </p>
                                    <p class="text-lg font-semibold text-slate-900 dark:text-slate-200">
                                          Repositories: <span>{repos}</span>
                                    </p>
                              </>
                        ) : (
                              <>
                                    <p class="text-lg font-semibold text-slate-900 dark:text-slate-200">
                                          Connections: <span>{connections}</span>
                                    </p>
                                    <p class="text-lg font-semibold text-slate-900 dark:text-slate-200">
                                          Posts: <span>{posts}</span>
                                    </p>
                              </>
                        )}
                  </div>
            </div>
      )
}

export default SocialCard