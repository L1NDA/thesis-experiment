import React, { Component }  from 'react';
import './style.css';
import Button from "./Button.js"


class Home extends Component {

  render() {
    return (
      <div className="homepage-ender">
         <div className="title-ender">Project Ender</div>
         <div className="subtitle-ender">Linda Qin, qinx@college.harvard.edu</div>
         <div className="consent-info">
           You are being asked to participate in a research study on the effectiveness of a new mathematical parsing tool, nicknamed "Ender." The purpose of the study is to examine how efficiently this tool may help people understand mathematical notation in readings in comparison with current reading methods. Please read the following before agreeing to be in the study.

          <br></br><br></br>
          If you agree to be in this study, you will be asked to read through two different selections of text, with and without this tool. After some time passes, you will be asked a couple questions about the text and about your experience reading it. You will also be asked to answer demographic questions. There are no known risks, benefits or compensation for completing this study. Your responses will be strictly anonymous. The total time for this study is estimated to be around 30 minutes.

          <br></br><br></br>

          The decision to participate in this study is entirely up to you. You may refuse to participate in the study at any time without affecting your relationship with the investigators of this study or Harvard University. Your decision will not result in any loss of benefits to which you are otherwise entitled. You have the right not to answer any single question, as well as to withdraw completely from the study at any point during the process. However, you will not be able to withdraw your responses from the study after you have submitted your responses, as your participation remains anonymous.

          <br></br><br></br>
          You have the right to ask questions about this research study and to have those questions answered after the research is completed. If you have any further questions about the study, feel free to contact Linda Qin at qinx@college.harvard.edu. If you like, a summary of the results of the study will be sent to you. If you have any other concerns about your rights as a research participant that have not been answered, or if you have any problems or concerns that occur as a result of your participation, please contact kgajos@eecs.harvard.edu.

          <br></br><br></br>
          If you would like to keep a copy of this document for your records, please print or save this page now. You may also contact the researcher to request a copy.
         </div>

         <div className="consent-ender">
           <b>By clicking “Yes, I consent,”  you indicate that you have read and <br></br>understood the above and volunteer to participate in this study. </b>
         </div>

         <Button text="Yes, I consent" link="/description"></Button>
      </div>

    );
  }
}

export default Home;
