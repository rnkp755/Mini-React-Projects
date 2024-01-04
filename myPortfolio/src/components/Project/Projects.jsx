import React from 'react'
import ProjectCard from './ProjectCard'

function projects() {
      const firstProjectDetails = {
            projectTitle: "eCommerce App",
            imageLink: "https://images.pexels.com/photos/2533311/pexels-photo-2533311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            githubLink: "https://github.com/rnkp755",
            techStacks: ["React.js", "MongoDB", "Node.js"],
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste adipisci porro culpa, distinctio maxime cupiditate autem recusandae nam atque, voluptatum fugit officiis at mollitia incidunt? Blanditiis fuga quidem maxime tenetur voluptatem quas illum eum enim eligendi ducimus. Eveniet distinctio voluptate, vero obcaecati maiores fugit cum aspernatur. Ratione consectetur vitae quibusdam."
      }
      return (
            <div className='w-2/3 mx-auto'>
                  <ProjectCard details={firstProjectDetails} />
                  <ProjectCard />
                  <ProjectCard />
            </div>
      )
}

export default projects
