import React, { useState } from 'react'
import Blockies from "react-blockies";
import colors from 'tailwindcss/colors'

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
    <>
        <div className='flex w-12 '>
          <Blockies className=" max-h-12 min-w-full border-4 border-gray-500 rounded-full " seed={'AABBCCDDEE'}   scale={10}
          color={colors.blue[500]} bgColor={colors.cyan[500]} />
        </div>
    </>
    );
  
}

export default Calculator;  
