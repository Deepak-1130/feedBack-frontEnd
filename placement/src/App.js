import logo from './logo.svg';
import './App.css';
import ShowCompany from './Components/ShowCompany';
import CompanyCard from './Cards/CompanyCard';
// import CompanyCard from './Components/Cards/CompanyCard';
import CompanyRegister from './Components/CompanyRegistration';
import PlacedStudentCard from './Cards/PlacedStudentCard';
import PlacedStudent from './Components/PlacedStudent';
function App() {
  // const detail={
  //       "student": {
  //           "registerNumber": 1002,
  //           "firstName": "Arun",
  //           "lastName": "Raj",
  //           "departments": "IT",
  //           "passedOutYear": 2024,
  //           "fatherName": "Suresh",
  //           "motherName": "Meena",
  //           "fatherOccupation": "Business",
  //           "motherOccupation": "Housewife",
  //           "parentNumber": 9876543211,
  //           "studentNumber": 9000000002,
  //           "emailId": "arun.raj@gmail.com",
  //           "nativePlace": "Madurai",
  //           "historyOfArrears": 1,
  //           "cgpa": 7
  //       },
  //       "company": {
  //           "companyId": 1,
  //           "companyName": "TCS",
  //           "branch": "IT",
  //           "email": null,
  //           "mobileNo": null,
  //           "histOfArrear": false,
  //           "lastHighestPackage": 120,
  //           "logoPicPath": null,
  //           "companyType": "IT",
  //           "description": "IT services company"
  //       },
  //       "placedstatus": "Placed",
  //       "offerPath": "1002offer.pdf",
  //       "placedId": 1
  //   }
  return (
  
    <>
   {/* <CompanyCard/> */}
    <PlacedStudent/>
   <CompanyRegister/>
   </>
  );
}

export default App;
