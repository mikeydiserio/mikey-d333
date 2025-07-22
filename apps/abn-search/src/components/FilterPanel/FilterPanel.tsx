import React from 'react';
import {
  activeOnly,
  employeeSizeOptions,
  gstRegistered,
  industryOptions,
  revenueOptions,
  stateOptions,
} from '../../mocks/content';
import * as S from './FilterPanel.styles';

export interface FilterState {
  activeOnly: string[];
  gstRegistered: string[];
  industries: string[];
  employeeSizes: string[];
  states: string[];
  revenueBands: string[];
}

export interface FilterPanelProps {
  filters: FilterState;
  setFilters: (newFilters: FilterState) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
  handleCheckboxChange: any;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  setFilters,
  filters,
  onResetFilters,
  onApplyFilters,
  handleCheckboxChange,
}) => {
  return (
    <S.Panel>
      <S.FilterHeading>Refine Results</S.FilterHeading>
      <S.FilterGroup>
        <S.FilterOptions>
          {activeOnly.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`active-checkbox-${opt}`}
                checked={filters.activeOnly.includes(opt)}
                onChange={() => handleCheckboxChange('activeOnly', opt)}
              />
              <label htmlFor={`active-checkbox-${opt}`}>Active entities only</label>
            </S.FilterRow>
          ))}
          <S.FilterRow>
            {gstRegistered.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`gst-${opt}`}
                checked={filters.gstRegistered.includes(opt)}
                onChange={() => handleCheckboxChange('gstRegistered', opt)}
              />
              <label htmlFor={`gst-${opt}`}>{opt}</label>
            </S.FilterRow>
          ))}
          </S.FilterRow>
        </S.FilterOptions>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterTitle>
          <i className="fas fa-industry"></i> Industry
        </S.FilterTitle>
        <S.FilterOptions>
          {industryOptions.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`ind-${opt}`}
                checked={filters.industries.includes(opt)}
                onChange={() => handleCheckboxChange('industries', opt)}
              />
              <label htmlFor={`ind-${opt}`}>{opt}</label>
            </S.FilterRow>
          ))}
        </S.FilterOptions>
      </S.FilterGroup>
      <S.FilterGroup>
        <S.FilterTitle>
          <i className="fas fa-industry"></i> Revenue band
        </S.FilterTitle>
        <S.FilterOptions>
          {revenueOptions.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`rev-${opt}`}
                checked={filters.revenueBands.includes(opt)}
                onChange={() => handleCheckboxChange('revenueBands', opt)}
              />
              <label htmlFor={`rev-${opt}`}>{opt}</label>
            </S.FilterRow>
          ))}
        </S.FilterOptions>
      </S.FilterGroup>
      <S.FilterGroup>
        <S.FilterTitle>
          <i /> States
        </S.FilterTitle>
        <S.FilterOptions>
          {stateOptions.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`state-${opt}`}
                checked={filters.states.includes(opt)}
                onChange={() => handleCheckboxChange('states', opt)}
              />
              <label htmlFor={`state-${opt}`}>{opt}</label>
            </S.FilterRow>
          ))}
        </S.FilterOptions>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterTitle>
          <i /> Employee size
        </S.FilterTitle>
        <S.FilterOptions>
          {employeeSizeOptions.map(opt => (
            <S.FilterRow key={opt}>
              <input
                type="checkbox"
                id={`empsiz-${opt}`}
                checked={filters.employeeSizes.includes(opt)}
                onChange={() => handleCheckboxChange('employeeSizes', opt)}
              />
              <label htmlFor={`empsiz-${opt}`}>{opt}</label>
            </S.FilterRow>
          ))}
        </S.FilterOptions>
      </S.FilterGroup>

      {/* <S.ApplyButton
        onClick={onApplyFilters}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition mt-4"
      >
        Apply Filters
      </S.ApplyButton>
      <button
        onClick={onResetFilters}
        className="w-full text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition mt-2"
      >
        Reset
      </button> */}
    </S.Panel>
  )
}

export default FilterPanel
