import loopStudios from '../assets/loop-studios.svg'
import { useContext } from 'react'
import { MyContext } from '../MyContext'
import JobCard from './JobCard';


function JobContainer() {

    const {jobsData, handleClick} = useContext(MyContext);
    
    return ( 
    <>
        {jobsData.map((job,index)=>(
            <JobCard 
            key={index}
            id={index}
            icon ={job.icon}
            company={job.company}
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            role={job.role}
            level={job.level}
            newJob={job.new}
            featured={job.featured}
            handleClick={handleClick}

            />
        ))}
    </>
       
     );
}

export default JobContainer;