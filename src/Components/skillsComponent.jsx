import React from "react";

const SkillComponent = ({title, skills}) => {

    
    return (
    <div className="my-3">
        <p className='text-xl font-bold   border-blue-500 p-2 inline lg:border-b-4 sm:border-b-2'>
            {title}
        </p>
    <div className='grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0'>
    {skills.map(({id, src, title, style})=> (
        <div
        key = {id}
        className = {`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto'></img>
            <p className='mt-4'>{title}</p>
        </div>
    ))}
    </div>
    </div>
    )

}
export default SkillComponent;

