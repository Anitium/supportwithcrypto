import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classutils';

const InputField = ({label, field}) => {
return (
    <>
      <div className="field relative">
          <label className="top-0 left-0 absolute pt-2 px-3 text-left text-xs text-gray-600 font-normal">{label}
          </label>
          <input className={classNames('w-full border rounded-md border-swc-left pt-7 pb-2 px-3 hover:ring-swc-right text-base ')}
            type="text" defaultValue={field}>
          </input>
      </div>
    </>
  );
}

InputField.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string
};
  
export default InputField;