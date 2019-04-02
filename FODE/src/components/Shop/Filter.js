import React from 'react'
import { FilterDropdown } from './shopStyles'

const Filter = (props) => {
  return (
     <label htmlFor='filter Options'>
      <FilterDropdown name='filterOptions' onChange={props.handleMatch}>
       {props.filterList.map((item, i) => {
         let itemName = item
         let index = i
         return (
            <option key={index} value={itemName}>{itemName}</option>
         )
       })}
      </FilterDropdown>
     </label>
  )
}

export default Filter
