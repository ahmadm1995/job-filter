

function JobCard( {id,company, position, postedAt, contract, location, icon, languages, role, level, handleClick, newJob, featured}) {
    
    return ( 
       
       <div key={id} className='flex h-[152px] w-full max-w-[1110px] bg-white rounded-md shadow-xl place-items-center place-self-center pl-[40px] pr-[40px] mb-[24px]'>
            <img className="h-[88px] w-[88px] mr-[24px]" src={icon}/>
            <div className='flex flex-col flex-grow'>
                <div className="flex">
                    <h1 className='font-heading font-bold text-[18px] text-customCyan mr-[15px]'>{company}</h1>
                    {newJob ? <h1 className='font-heading font-bold text-[14px] bg-customCyan text-white mr-[8px] rounded-2xl pt-[7px] pl-[8px] pr-[8px] pb-[3px]'>NEW!</h1>:null}
                    {featured ? <h1 className='font-heading font-bold text-[14px] bg-customBlack text-white rounded-2xl pt-[7px] pl-[8px] pr-[8px] pb-[3px]'>FEATURED</h1>:null}
                </div>
                <h1 className='font-heading font-bold text-[22px] '>{position}</h1>
                <h1 className='font-heading text-customGrey font-medium text-[18px]'>{`${postedAt} - ${contract} - ${location}`}</h1>
            </div>
            <div className='flex space-x-4 ml-auto'>
                <h1 onClick={handleClick} className='font-heading font-bold text-[18px] bg-customBg text-customCyan pt-[5px] pb-[3px] pl-[9px] pr-[8px] rounded-md cursor-pointer hover:bg-customCyan hover:text-white'>{role}</h1>
                <h1 onClick={handleClick} className='font-heading font-bold text-[18px] bg-customBg text-customCyan pt-[5px] pb-[3px] pl-[9px] pr-[8px] rounded-md cursor-pointer hover:bg-customCyan hover:text-white'>{level}</h1>
                {languages.map((language,i)=>(
                <h1 key={i} onClick={handleClick} className='font-heading font-bold text-[18px] bg-customBg text-customCyan pt-[5px] pb-[3px] pl-[9px] pr-[8px] rounded-md cursor-pointer hover:bg-customCyan hover:text-white'>{language}</h1>
                ))}
            </div>
      </div>
    );
}

export default JobCard
;