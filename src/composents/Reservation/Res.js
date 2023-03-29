import React, { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleStepOneClick = () => {
    setProgress(33);
  };

  const handleStepTwoClick = () => {
    setProgress(66);
  };

  const handleStepThreeClick = () => {
    setProgress(100);
  };

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-numbers">
          <div className="progress-number">1</div>
          <div className="progress-number">2</div>
          <div className="progress-number">3</div>
        </div>
      </div>
      <div className="progress-buttons">
        <button onClick={handleStepOneClick}>Step 1</button>
        <button onClick={handleStepTwoClick}>Step 2</button>
        <button onClick={handleStepThreeClick}>Step 3</button>
      </div>
    </div>
  );
}

export default ProgressBar;
