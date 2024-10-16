import { useEffect, useState } from 'react'
import jobData from '../src/data.json'
import bgHeader from './assets/bg-header-desktop.svg'
import JobContainer from './components/JobContainer'
import loopStudios from './assets/loop-studios.svg'
import photosnap from './assets/photosnap.svg'
import manage from './assets/manage.svg'
import account from './assets/account.svg'
import myHome from './assets/myhome.svg'
import faceit from './assets/faceit.svg'
import shortly from './assets/shortly.svg'
import insure from './assets/insure.svg'
import eyeCam from './assets/eyecam-co.svg'
import theairfilter from './assets/the-air-filter-company.svg'
import BarContainer from './components/BarContainer'
import { MyContext } from './MyContext'
import './App.css'


function App() {
  
  const [jobsData, setJobsData] = useState(jobData)
  const [selectedPill, setSelectedPill] = useState([]);


  
  const handleClick = (event) => {

    const pillSelected = event.target.textContent
    const isDuplicate = selectedPill.some(pill=>pill.selected === pillSelected)
    
    if(!isDuplicate){
      setSelectedPill((prev) => 
      [
        ...prev,
        {selected: pillSelected}
      ]
    )}


  };

  const handleRemoval = (pillSelected) => {
    
   
    const updatedPills = selectedPill.filter(pill => pill.selected !== pillSelected);
        setSelectedPill(updatedPills);

  };

  const handleClear = () => {
    
   setSelectedPill([])
   
  };

  useEffect(() => {
    let updatedJobsData = jobData;

    // Check if there are selected pills
    if (selectedPill.length > 0) {
      // Extract selected values
      const selectedPillValues = selectedPill.map(pill => pill.selected);
      
      console.log("Selected Pill Values:", selectedPillValues); // Debugging line

      // Filter jobs based on the selected criteria
      updatedJobsData = jobData.filter(job => {
        // Combine the job's role, level, and languages into a single array
        const jobCriteria = [job.role, job.level, ...job.languages];

        console.log("Job Criteria:", jobCriteria); // Debugging line

        // Check if all selected values are included in the job's criteria
        return selectedPillValues.every(value => jobCriteria.includes(value));
      });
    }

  setJobsData(updatedJobsData);




  
    // Map over the filtered jobsData and assign icons
    updatedJobsData = updatedJobsData.map(item => {
      let icon;
      switch (item.company) {
        case 'Photosnap':
          icon = photosnap;
          break;
        case 'Manage':
          icon = manage;
          break;
        case 'Account':
          icon = account;
          break;
        case 'MyHome':
          icon = myHome;
          break;
        case 'Loop Studios':
          icon = loopStudios;
          break;
        case 'FaceIt':
          icon = faceit;
          break; 
        case 'Shortly':
          icon = shortly;
          break;
        case 'Insure':
          icon = insure;
          break;
        case 'Eyecam Co.':
          icon = eyeCam;
          break; 
        case 'The Air Filter Company':
          icon = theairfilter;
          break; 
        default:
          icon = ''; // Default icon or leave it blank
      }
  
      // Return the modified object with the correct icon
      return { ...item, icon };
    });
  
    // Update the state with the filtered and icon-updated data
    setJobsData(updatedJobsData);
  }, [selectedPill]); // Trigger this effect whenever selectedPill changes
  

  return (
    <MyContext.Provider value={{jobsData, handleClick, handleRemoval, selectedPill,handleClear}}>
        <div className='flex flex-col'>
          <div className="w-full mb-[76px] relative">
            <img className="w-full bg-customCyan" src={bgHeader} alt="Header Background" />
            <div className='flex flex-col absolute w-full top-full transform -translate-y-1/2 z-10'>
              <BarContainer />
            </div>
          </div>
          
          <JobContainer />
          

          
        </div>
      </MyContext.Provider>
  );
  
  
}

export default App
