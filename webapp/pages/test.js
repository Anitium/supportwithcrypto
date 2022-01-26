import React, { useState } from 'react'

const Calculator = ({}) => {

  const [dollar, setDollar] = useState('100');
  const [crypto, setCrypto] = useState('1');

  const handleDollarChange = (e) => {
    setDollar(e.target.value);
    setCrypto( parseInt(e.target.value)/100 );
  };

  const handleCryptoChange = (e) => {
    if(e.target.value.length>0) {
      setDollar(parseInt(e.target.value)*100);
      setCrypto(e.target.value);
    } else {

    }
  };

  console.log('--- render');
  return (
      <fieldset className="p-4">
        <legend>Enter dollars:</legend>
        <input className='border-2 border-gray-800'
          value={dollar}
          onChange={handleDollarChange} 
        />
        <br/>
        <p>ETHER</p>
        <br/>
        <input 
          className='border-2 border-gray-800'
          value={crypto} 
          onChange={handleCryptoChange} 
        />
      </fieldset>
    );
  
}

export default Calculator;  
