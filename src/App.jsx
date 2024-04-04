import './App.css'
import EducationInfo from './components/education';
import GeneralInfo from './components/general-info'
import { useState } from 'react';
import PracticalExperience from './components/practical';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <h1>Build a CV</h1>

      <h2>About You</h2>
      <GeneralInfo 
        isActive={activeSection === 0}
        onSubmit={() => setActiveSection(null)}
        onEdit={() => setActiveSection(0)}
      />

      <h2>Education Information</h2>
      <EducationInfo
        isActive={activeSection === 1}
        onSubmit={() => setActiveSection(null)}
        onEdit={() => setActiveSection(1)}
      />

      <h2>Practical Experience</h2>
      <PracticalExperience
        isActive={activeSection === 2}
        onSubmit={() => setActiveSection(null)}
        onEdit={() => setActiveSection(2)}
      />
    </>
  )
}

export default App


/* 
  TODO:

  - "edit" button to appear only after info has been "submitted"; all fields should be editable by default
  - retain and display info after hitting "submit"
  - Decide what to do about sections that aren't fully filled out
  - Allow to add multiple of the same type (ie multiple Educations, multiple Experiences)
  - Format pretty on Big Submit
*/