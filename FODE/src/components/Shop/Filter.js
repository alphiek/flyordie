import React from 'react'
import { FilterDropdown } from './shopStyles'

const Filter = () => {
  return (
     <label htmlFor='filter Options'>
      <FilterDropdown name='filterOptions'>
        <option value='tbc'>Options Here</option>
      </FilterDropdown>
     </label>
  )
}

export default Filter
