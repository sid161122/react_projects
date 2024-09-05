function Step({ steps, activeStep, setActiveStep }) {
  function handleprev() {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handlenext() {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }

  function calculateCurrentStepWidth() {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  }

  return (
    <div>
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => (
              <div className={`step ${index <= activeStep ? 'active' : ''}`} style={{ width: calculateCurrentStepWidth() }} key={index}>
                {stepItem}
              </div>
            ))
          : null}

        <button disabled={activeStep === 0} onClick={handleprev}>
          Previous 
        </button>
            
        <button onClick={handlenext}   disabled={activeStep === steps.length - 1}
        >
          Next 
        </button>
    </div>
  );
}

export default Step;
