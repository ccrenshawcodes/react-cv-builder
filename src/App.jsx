import './App.css'
import EducationInfo from './components/education';
import GeneralInfo from './components/general-info'
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <h1>Hello there</h1>
      <GeneralInfo 
        title="About You"
        isActive={activeSection === 0}
        onSubmit={() => setActiveSection(null)}
      />
      <EducationInfo
        title="Education Information"
        isActive={activeSection===1}
        onSubmit={() => setActiveSection(null)}
      />
    </>
  )
}

export default App
