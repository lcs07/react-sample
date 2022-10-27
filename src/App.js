import React, {useState, useEffect} from 'react';

import App1 from './components/App1';
import App2 from './components/App2';
import {Test} from './components/test';
// import * as TestComp from './components/test';

function App() {
  const [isTest, setIsTest] = useState(true);
  const [isApp1, setIsApp1] = useState(true);
  const [isApp2, setIsApp2] = useState(false);

  const handleClickApp2 = (e) => {
    e.preventDefault();

    setIsApp1(false);
    setIsApp2(true);

    return false;
  };

  useEffect(() => {
    console.log(`isApp1 : '${isApp1}', isApp2 : '${isApp2}'`);
  }, [isApp1, isApp2]);

  return (
    <>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();

            setIsTest(!isTest);

            return false;
          }}
        >Test</button>
        <a
          href='/app1'
          onClick={(e) => {
            e.preventDefault();

            setIsApp1(true);
            setIsApp2(false);

            return false;
          }}
        >App1</a>
        <a
          href='/app2'
          onClick={handleClickApp2}
        >App2</a>
      </div>
      <div>
        {/* {false && <Test />}
        {true && <App1 />}
        {false && <App2 />} */}

        {/** Test 컴포넌트 */}
        {isTest && <Test />}
        {/* {isTest && <TestComp.Test />} */}

        {/** App1 컴포넌트 */}
        {isApp1 && <App1 />}

        {/** App2 컴포넌트 */}
        {isApp2 && <App2 />}
      </div>
    </>
  );
}

export default App;
