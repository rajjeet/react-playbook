import React, { useMemo, useState } from 'react';

function expensiveOperation(loops) {
  for(let i = 0; i < loops * 100000000; i++){}
  return loops % 7 * 2 + 1;
}

export const MemoHook = () => {
  const [loops, setLoops] = useState(1);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const handleLoopCountChange = ({target: { value }}) => {
    setLoops(value);
  }
  const result =  useMemo(() => expensiveOperation(loops), [check1]);
  return (
    <div>
      <h2>Memo Hook</h2>
      <label htmlFor={'loop-count'}>Loop Count (load): </label>
      <input id={'loop-count'} type={"number"} onChange={handleLoopCountChange} value={loops} max={20} min={0} />
      <div>
        <h4>Result: {result}</h4>
        <div>Expensive operation only occurs when checkbox 1 is clicked! Else the value is memoized</div>
        <label htmlFor={'check-1'}>Checkbox 1</label>
        <input id={'check-1'} type="checkbox" value={check1} onChange={() => setCheck1(!check1)} />
        <label htmlFor={'check-2'} >Checkbox 2</label>
        <input id={'check-2'} type="checkbox" value={check2} onChange={() => setCheck2(!check2)} />
      </div>
    </div>
  );
};
