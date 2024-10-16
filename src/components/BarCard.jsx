import x from '../assets/Combined-Shape.svg'

function BarCard({selectedPill, handleRemoval, handleClear}) {
  
    return (
    <div className="h-[72px] w-[1110px] bg-white rounded-md shadow-lg place-self-center justify-start items-center flex pl-[40px]">
        
        
        {selectedPill.map((pill, i) => (
            <div key={i} className="flex items-center">
                <h1 className="font-heading font-bold text-[18px] bg-customBg text-customCyan h-[32px] pt-[5px] pb-[3px] pl-[9px] pr-[11px] rounded-md">{pill.selected}</h1>
                <h1 className="bg-customCyan h-[32px] w-[32px] ml-[-5px] rounded-r-md rounded-l-none flex justify-center items-center mr-[16px] hover:bg-black">
                    <img onClick={() => handleRemoval(pill.selected)} className="h-[16px] cursor-pointer" src={x} alt="x icon" />
                </h1>
            </div>
        ))}

        

        
        
        <h1 onClick={handleClear} className='font-heading font-bold text-[16px] cursor-pointer text-customCyan rounded-md self-center  mt-[25px] mb-[23px] ml-auto mr-[40px] hover:text-black'>Clear</h1>
    </div> 
    );
}

export default BarCard;