import React, {useState, useEffect, useMemo} from 'react'

const Calculator = ({}) => {

  const [dollar, setDollar] = useState('100');
  const [crypto, setCrypto] = useState('');

  const dol = useEffect(() => {
    setCrypto(dollar/100);
  }, [dollar]);

  return (
      <fieldset>
        <legend>Enter dollars:</legend>
        <input className='border-2 border-gray-800'
          value={dollar}
          onChange={event => setDollar(event.target.value)} 
        />
        <br/>
        <p>ETHER</p>
        <br/>
        <input className='border-2 border-gray-800'
          value={crypto} onChange={event => setCrypto(event.target.value)}
        />
      </fieldset>
    );
  
}

export default Calculator;  