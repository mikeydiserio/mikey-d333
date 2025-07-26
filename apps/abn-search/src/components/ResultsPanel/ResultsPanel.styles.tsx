import styled from "styled-components";

export const ResultsContainer = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ResultsHeader = styled.div`
  padding: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-weight: 500;
  border-bottom: 2px solid #cfcfcf;
`;

export const ResultsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const ResultsSort = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  gap: 15px;
`;

export const SortSelect = styled.div`
  padding: 8px 15px;
  border: 1px solid var(--gray-light);
  background-color: white;
  cursor: pointer;
  outline: none;
`;


export const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  list-style-type: none;
  background: white;
  margin: 0;
  padding: 24px;
  height: auto;
`;

export const ResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const ResultsItem = styled.li`
  list-style-type: none;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid grey;
  padding: 12px 0;
  transition: all ease-in-out 200;


  &:hover {
    background-color: #f8fbfe;
  }
`;

export const ResultItemContainer = styled.div`
  padding-left: 24px;
`

export const ResultTitle = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary-dark);
`;

export const SkeletonLoading = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--gray-light);
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: var(--radius-md);
`;

export const SkeletonText = styled.div`
  width: 100%;
  height: 12px;
  margin-bottom: 10px;
`;


export const  DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const  DetailLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`

export const  DetailValue = styled.span`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`

export const  CompanyTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto; /* Pushes tags to the bottom */
  padding-top: 20px;
  position: relative;
  z-index: 1;
`

export const Tag = styled.span`
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
`


