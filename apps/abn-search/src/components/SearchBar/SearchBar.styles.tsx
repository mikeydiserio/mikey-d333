import styled from "styled-components";

export const SearchIcon = styled.div`
  height: 24px;
  width: 24px;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 24px;
  border: 2px solid transparent;
  outline: none;
  border-radius: 12px 0 0 12px;
  transition: var(--transition);

  &:focus {
    outline: 2px solid #3700ff;
    border: 2px solid #3700ff;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;


export const HintBox = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #666;

  &:hover {
    color: #333;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const HintPill = styled.div`
  background-color: var(--gray-light);
  color: var(--dark);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  background-color: #d1dce9;

  &:hover {
    background-color: #d9d9d9;
  }
`


export const SearchButton = styled.button`
  background: #3700ff;
  color: white;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  cursor: pointer;
  transition: var(--transition);
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: rgba(79, 70, 229);
  }
  &:focus {
    outline: 2px solid rgba(79, 70, 229);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);

  &:focus-within {
    box-shadow: 0 0 0 2px var(--primary), var(--shadow-md);
  }
`;

export const SearchSuggestions = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow-y: auto;
  top: 30px;
`;

export const SuggestionItem = styled.div`
  color: black;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray);
  }
`;
