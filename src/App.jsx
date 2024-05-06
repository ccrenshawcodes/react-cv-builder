import './App.css'
import EducationData from './components/education';
import GeneralInfo from './components/general-info'
import PracticalExperience from './components/practical';
import exampleData from './placeholders';
import AboutYouDisplay from './components/about-display';
import EducationDisplay from './components/education-display';
import ExperienceDisplay from './components/experience-display';
import { useState } from 'react';

function App() {

  const [aboutYou, setAboutYou] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(exampleData.educationInfo);
  const [experience, setExperience] = useState(exampleData.experienceInfo);

  const handleEducationChange = (index, key, value) => {
    setEducation((prevState) => {
      return prevState.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [key]: value,
          };
        }
        return entry;
      })
    })
  }

  const handleExperienceChange = (index, key, value) => {
    setExperience((prevState) => {
      return prevState.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [key]: value,
          };
        }
        return entry;
      })
    })
  }

  console.log(education);
  console.log(experience);


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
            onChange={handleEducationChange}
          />

          <h2>Practical Experience</h2>
          <PracticalExperience 
            data={experience}
            onChange={handleExperienceChange}
          />

          <button>Submit</button>
        </div>

        <div className="outputs">
          <AboutYouDisplay data={aboutYou} />
          <h2>Education</h2>
          <EducationDisplay data={education[0]} />
          <h2>Experience</h2>
          <ExperienceDisplay data={experience[0]} />
        </div>
      </div>

    </>
  )
}

export default App
