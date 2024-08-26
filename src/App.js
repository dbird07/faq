import logo from './logo.svg';
import './App.css';
import React from 'react';
import QA from "./QA.js"


function App() {
  const data = [{question:"How Do I Record My Presentation with Multiple Presenters?", answer: "To effectively record your presentation with multiple presenters, we recommend utilizing Zoom. Before commencing the presentation, ensure that all cameras are activated to provide viewers with a clear view of each presenter. Initiate a Zoom meeting, invite your presenters, and utilize the recording feature to capture the entirety of the presentation seamlessly. After recording, you can easily upload the resulting MP4 file to Beaker Health for convenient access and sharing."},{question: " What if I Need to Pause My Presentation While Recording?", answer:"If you need to pause your presentation while recording, you can easily do so by locating the pause button underneath your video in the recording interface. This feature enables you to temporarily halt the recording and seamlessly resume from where you left off whenever you're ready to continue."}, {question:"Is it Possible to Edit My Recorded Presentation After It's Been Recorded?", answer:" No, it's not possible to edit a recorded presentation after it has been completed. This is why we emphasize the importance of practicing your presentation thoroughly beforehand. Practicing allows you to refine your delivery, become more familiar with your content, and minimize the need for extensive editing afterward. "}, {question:"Can I Add Visuals, Such As Slides or Images, to My Recorded Presentation?", answer:" Yes, after you have finished recording or uploading your presentation, you can add additional visuals such as slides or images to enhance your module. This can include incorporating images, websites, PDFs, or PowerPoint files into your presentation. By doing so, you can provide supplementary information, reinforce key points, or create a more engaging experience for your viewers."}, {question:" How Long Can I Record a Presentation For? Are There Any Limitations?",answer:" There are generally no limitations on the duration of your presentation recording. However, for optimal engagement and viewer retention, we recommend keeping the presentation between 45 minutes and an hour. This time frame allows you to convey your message effectively without overwhelming your audience. Remember to maintain a brisk pace, incorporate interactive elements, and focus on delivering concise and valuable content throughout the recording."}]
 
  const faqs = data.map(q=>{
    const key = Math.random()
    return <QA key = {key} question = {q.question} answer = {q.answer}/>



  })

  return (
    <div className="App">
      
      <header>
        {/* <div className="container"> */}
            
            
            
        {/* </div> */}
        <section id="faq" className="container">
        <h2>Frequently Asked Questions</h2>
       
      <hr/>

      </section>
      </header>
      
      <section id="faq" className="container">
        <p id ="info"> At Beaker Health, we recognize that imperfection is inherent, but the commitment to growth is paramount. 
Embracing this ethos, our FAQ section aims to address prevalent queries to enhance your experience. From 
troubleshooting hurdles to optimizing your journey with Beaker Health, we strive to provide comprehensive 
guidance.
        </p>
      </section>

      <div id = "questions">
        {faqs}


      </div>

     



    </div>
  );
}

export default App;
