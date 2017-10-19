import React from 'react';

const name = 'filter';
const values = ['all', 'uncompleted', 'completed'];

const Filter = ({filter}) => (
  <form name={name}>
    <fieldset>
      {
        values.map((value) => (
          <label key={value}>
            <input
              type="radio"
              name={name}
              value={value}
              checked={value === filter}
            />
            {value}
          </label>
        ))
      }
    </fieldset>
  </form>
);

export default Filter;
