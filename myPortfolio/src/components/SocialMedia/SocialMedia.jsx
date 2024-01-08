import React from 'react'
import SocialCard from './SocialCard'
import { useLoaderData } from 'react-router-dom'

function SocialMedia() {
      const data = useLoaderData();

      return (
            <div className='w-2/3 mx-auto'>
                  <SocialCard
                        type="Github"
                        profilePic={data.avatar_url}
                        userName={data.login}
                        profileURL={data.html_url}
                        followers={data.followers}
                        repos={data.public_repos}
                  />
                  <SocialCard
                        type="LinkedIn"
                        userName="rnkp755"
                        profileURL="https://linkedin.com/in/hackerraushan"
                        connections="248"
                        posts="3"
                  />
            </div>
      )
}

export default SocialMedia

export const githubInfoLoader = async () => {
      const response = await fetch('https://api.github.com/users/rnkp755')
      return response.json();
}
