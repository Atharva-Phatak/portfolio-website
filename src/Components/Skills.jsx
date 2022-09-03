import React from 'react'
import SkillComponent from './skillsComponent'
import PageSection from './PageSection'
import { languages,DataScience, WebDevelopement, DataScienceMisc } from './skillsConfig'

const Skills = () => {

    const titles = {
    "Languages" : languages , 
    "Data Science" : DataScience, 
    "Web Developement" :WebDevelopement, 
    "Version Control and Data Science Tools" : DataScienceMisc
    }

    
    return (
        <PageSection 
        name = "Skills"
        title = "Skills"
        >
                {Object.keys(titles).map((key, indx) => (
                    <SkillComponent title={key} skills={titles[key]} />
                ))}

        </PageSection>
    )
}

export default Skills