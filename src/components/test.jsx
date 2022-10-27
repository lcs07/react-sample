import React from 'react';

const testStr = 'test';

function Test(props) {
  const testData = props.testData ?? '';

  return (
    <p>{testStr} component {testData}</p>
  );
}

export {Test, testStr};
