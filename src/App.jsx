import './App.css'
import EducationData from './components/education';
import GeneralInfo from './components/general-info'
import PracticalExperience from './components/practical';
import exampleData from './placeholders';
import AboutYouDisplay from './components/about-display';
import SectionDisplay from './components/section-display';
import { useState } from 'react';

function App() {

  const [aboutYou, setAboutYou] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(exampleData.educationInfo);
  const [experience, setExperience] = useState(exampleData.experienceInfo);



  return (
    <>
      <h1>Build a CV</h1>

      <div className="main-page">
        <div className="inputs">
          <h2>About You</h2>
          <GeneralInfo
            data={aboutYou}
            onChange={setAboutYou}
          />

          <h2>Education Information</h2>
          <EducationData
            data={education}
            onChange={setEducation}
          />

          <h2>Practical Experience</h2>
          <PracticalExperience 
            data={experience}
            onChange={setExperience}
          />

          <button>Submit</button>
        </div>

        <div className="outputs">
          <AboutYouDisplay data={aboutYou} />
          <h2>Education</h2>
          <SectionDisplay data={education} />
          <h2>Experience</h2>
          <SectionDisplay data={experience} />
        </div>
      </div>

    </>
  )
}

export default App


/* 
  TODO:

  - 'degree level' should be a dropdown
  - Allow to add multiple of the same type (ie multiple Educations, multiple Experiences)
  - 'Education' and 'Experience' headers to show only after there's some info in those sections?
  - Reset button
  - 


  1. Get all the data displaying
  2. Format it nice with CSS or whatever
*/