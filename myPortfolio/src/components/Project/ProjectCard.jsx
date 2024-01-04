import React from 'react'

function ProjectCard(props) {
      const {
            details = {
                  projectTitle: "Project",
                  imageLink: "https://images.pexels.com/photos/2533311/pexels-photo-2533311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  githubLink: "https://github.com/rnkp755",
                  techStacks: ["React.js", "MongoDB", "Node.js"],
                  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste adipisci porro culpa, distinctio maxime cupiditate autem recusandae nam atque, voluptatum fugit officiis at mollitia incidunt? Blanditiis fuga quidem maxime tenetur voluptatem quas illum eum enim eligendi ducimus. Eveniet distinctio voluptate, vero obcaecati maiores fugit cum aspernatur. Ratione consectetur vitae quibusdam."
            }
      } = props
      return (
            <div className="flex font-sans m-2">
                  <div className="flex-none w-48 relative">
                        <img src={details.imageLink} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-auto p-6">
                        <div className="flex flex-wrap">
                              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    {details.projectTitle}
                              </h1>
                              <a
                                    className="text-lg font-semibold text-slate-500 hover:cursor-pointer hover:text-slate-800"
                                    href={details.githubLink}
                              >
                                    Visit Github
                              </a>
                              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-0.5">
                                    <div className="flex items-baseline">
                                          <div className="space-x-2 flex text-sm">
                                                {details.techStacks.map((techStack) => {
                                                      return (
                                                            <label key={techStack}>
                                                                  <div className="h-5 pl-3 pr-3 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white text-xs">
                                                                        {techStack}
                                                                  </div>
                                                            </label>
                                                      )
                                                })}
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <p className="text-sm text-slate-700">
                              {details.desc}
                        </p>

                  </div>
            </div>
      )
}

export default ProjectCard
