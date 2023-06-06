import { useState } from 'react';
import './Calculations.css';
import ManualCalculation from './ManualCalculation';

const Calculations = () => {
  const [ heightFeet, setHeightFeet ] = useState('');
  const [ heightInch, setHeightInch ] = useState('');
  const [ mphSpeed, setMphSpeed ] = useState('');
  const [ mpmMinute, setMpmMinute ] = useState('');
  const [ mpmSecond, setMpmSecond ] = useState('');
  const [ result, setResult ] = useState(0);

  const [ showManual, setShowManual ] = useState(false);
  const [ showEstimate, setShowEstimate ] = useState(true);
  const [ focusmanualButton, setFocusManualButton ] = useState(false);
  const [ focusEstimateButton, setFocusEstimateButton ] = useState(true);

  const [ showGetButton, setShowGetButton ] = useState(true);
  const [ showResult, setShowResult ] = useState(false);

  const [ showMinuteMile, setShowMinuteMile ] = useState(true);
  const [ showMileHour, setShowMileHour ] = useState(false);
  const [ focusMinuteMileButton, setFocusMinuteMileButton ] = useState(true);
  const [ focusMileHourButton, setFocusMileHourButton ] = useState(false);

  const toggleManualEstimate = (event: any) => {
    if (event.target.name === 'manual') {
        setShowManual(true);
        setShowEstimate(false);
        setFocusManualButton(true),
        setFocusEstimateButton(false)
    } else {
        setShowManual(false);
        setShowEstimate(true);
        setFocusManualButton(false),
        setFocusEstimateButton(true);
    }
  }

  return (
    <>
      <div className="Calculations">
        <button
          name='estimate'
          className={`estimate-tab ${showEstimate ? 'focused' : ''}`}
          onClick={toggleManualEstimate}
        >
          Estimate
        </button>

        <button
          name='manual'
          className={`manual-tab ${showManual ? 'focused' : ''}`}
          onClick={toggleManualEstimate}
        >
          Manual
        </button>

        { showManual ?
        <ManualCalculation
          setResult={setResult}
          setShowResult={setShowResult}
          setShowManual={setShowManual}
        /> : ''}

        {/* Bring in Estimate calc */}
        {/* Bring in results component */}

      </div>
    </>
  )
}

export default Calculations;
