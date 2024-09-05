import { useState } from "react";
import Step from './Step'

function App() {
  const [activeStep,setActiveStep]=useState(0)
    
 const steps=['step 1','Step 2','Step 3','Step 4','Step 5']
    
    
     return (
    <div>
        <h1>Step progress bar</h1>
      <Step
        setActiveStep={setActiveStep}
        steps={steps}
        activeStep={activeStep} 
      />
    </div>
  );
}

export default App
