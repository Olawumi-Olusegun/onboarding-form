
import React from 'react'
import PersonalInfoForm from './PersonalInfoForm';
import EducationBackgroundForm from './EducationBackgroundForm';
import ProgrammingExperienceForm from './ProgrammingExperienceForm';
import PreferredProgramingLanguageForm from './PreferredProgramingLanguageForm';
import TechnicalSkillsForm from './TechnicalSkillsForm';
import FormConfirmation from './FormConfirmation';


export default function StepForm() {
 
  const currentStep = 1;

  function renderFormStep(step: number) {
    if(step === 1) {
      return <PersonalInfoForm />
    } else if (step === 2) {
      return <EducationBackgroundForm />
    } else if (step === 3) {
      return <ProgrammingExperienceForm />
    } else if (step === 4) {
      return <PreferredProgramingLanguageForm />
    }else if (step === 5) {
      return <TechnicalSkillsForm />
    }else if (step === 6) {
      return <FormConfirmation />
    }
    else {
      return <></>;
    }
  }

  return <> {renderFormStep(currentStep)} </>
}