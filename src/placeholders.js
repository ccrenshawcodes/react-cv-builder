import { v4 as uuidv4 } from 'uuid';

const exampleData = {
    personalInfo: {
        name: '',
        email: '',
        phoneNumber: ''
    },
    educationInfo: [{
        nameOfSchool: '', 
        degreeLevel: '', 
        fieldOfStudy: '', 
        datesOfStudy: '',
        id: uuidv4()
    }],
    experienceInfo: [{
        nameOfCompany: '', 
        Title: '', 
        Responsibilities: '', 
        startEndDates: '',
        id: uuidv4()
    }]
}

export default exampleData;