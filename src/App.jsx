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
  const [visibleSidebar, setVisibleSidebar] = useState(true);

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

  const handleShowHide = () => {
    const inputsSection = document.querySelector('.inputs');
    if (visibleSidebar === true) {
      inputsSection.style.cssText = 'display: none;';
      setVisibleSidebar(false);
    } else {
      inputsSection.style.cssText = 'display: block;';
      setVisibleSidebar(true);
    }
  }

  const handleReset = () => {
    setAboutYou(exampleData.personalInfo);
    setEducation(exampleData.educationInfo);
    setExperience(exampleData.experienceInfo);
  }

  const handlePrint = () => {
    window.print();
  }

  return (
    <>
      <div className="main-page">
        <div className="inputs">
          <h1>Build a CV</h1>
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
          
          <div className="editing-buttons">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleShowHide}>Submit</button>
          </div>
        </div>

        <div className="outputs">
          <div className="output-display">
            <AboutYouDisplay data={aboutYou} />
            <EducationDisplay data={education[0]} />
            <ExperienceDisplay data={experience[0]} />
          </div>
          {!visibleSidebar && (
              <div className="display-buttons">
                <button className="edit" onClick={handleShowHide}>Edit</button>
                <button className="print-cv" onClick={handlePrint}>Print</button>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default App

/* 
  TODO:

  Big:
    - investigate and fix the 'key' related console error
    - Allow adding multiple 'education' and 'experience' sections - ? (if not I should simplify the change handlers)
    - Consolidate handle functions ??

  Small:
    - 'responsibilities' should be a long text - not worth it to me - textarea can't be used with [value]. May be worth looking into in the future
    - 'degree level' should be a dropdown - same deal here as above. Probably worth looking into in the future but will be more than a super quick fix
    - 'dates' fields should have a date picker? (use a library?)
    - Format phone number (use a library?) - Idk why type="tel" didn't work for me

*/