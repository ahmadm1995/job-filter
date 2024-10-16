import BarCard from "./BarCard";
import { useContext } from 'react'
import { MyContext } from '../MyContext'


function BarContainer() {
    const {selectedPill, handleRemoval,handleClear} = useContext(MyContext);
    return ( 
    <>
        { selectedPill.length !=0  ? 
        <BarCard 
        selectedPill={selectedPill}
        handleRemoval={handleRemoval}
        handleClear={handleClear}
        /> 
        : null}
    </>
     );
}

export default BarContainer;