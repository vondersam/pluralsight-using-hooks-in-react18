import DemoApp from './demoApp';
import { useState, useEffect } from 'react';

const localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
  function useMyState(initial) {
    const localStateValueIndexLocal = localStateValueIndex; // closure
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initial;
    }
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };
    localStateValueIndex++;
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  const [cnt, setcnt] = useState(0);
  useEffect(() => {
    console.log(localStateValues);
  }, [cnt]);
  function reRenderMe() {
    setcnt(cnt + 1);
  }
  localStateValueIndex = 0;
  return (
    <>
      <DemoApp useState={useMyState} />
    </>
  );
}
