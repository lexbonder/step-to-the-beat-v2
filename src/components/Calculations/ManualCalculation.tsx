import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import './Calculations.css'

interface IManualCalculation {
  setResult: Dispatch<SetStateAction<number>>
  setShowResult: Dispatch<SetStateAction<boolean>>
  setShowManual: Dispatch<SetStateAction<boolean>>
}

const ManualCalculation = ({setResult, setShowResult, setShowManual}: IManualCalculation) => {
  const [ manual, setManual ] = useState('');

  const calculateManual = (event: SyntheticEvent) => {
    event.preventDefault();
    const result = Number(manual) * 4;
    setResult(result);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.match(/^\d*$/)) {
      setManual(value);
    }
  };

  const handleGetSPM = () => {
    setShowManual(false);
    setShowResult(true)
  }

  return (
    <article className={`manual show`}>
      <h4 className='instructions'>
        Manual calculation is most accurate
        and takes less than a minute to do
      </h4>
      <ol>
        <li>Choose your favorite leg.</li>
        <li>
          Start walking or running at a comfortable pace.
        </li>
        <li>
          Count how many times you land on that leg in 30 seconds
        </li>
        <li>Enter that number below!</li>
      </ol>
      <form
        className='manual-input-form'
        onSubmit={calculateManual}>
        <input
          name='manual'
          className='manual-input'
          onChange={handleChange}
          value={manual}
        />
        <div className='button-wrapper'>
          <Link
            to='select-spm'
            className='buttons back-buttons show'
          >
              Cancel
          </Link>
          <button
            disabled={!manual}
            className='manual-button buttons show'
            onClick={handleGetSPM}
          >Get my SPM</button>
        </div>
      </form>
    </article>
  )
}

export default ManualCalculation;
