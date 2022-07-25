import React from 'react'; //

const TestComp = (props) => {
  const { value = 'default' } = props;
  return <div>Hello from {value}</div>;
};

export default TestComp;
