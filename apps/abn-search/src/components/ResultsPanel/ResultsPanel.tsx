import { useEffect, useState } from 'react'
import { Select } from '../../components/ui'
import { sortOptions } from '../../mocks/content'
import type { SearchResult } from '../../types'
import { ResultItem } from './ResultItem'
import * as S from './ResultsPanel.styles'

interface ResultsPanel {
  results?: SearchResult[]
  handleResultClick: (result: SearchResult) => void
  error: unknown
  loading: boolean
  searchTerm?: string
}
export const ResultsPanel = ({
  results,
  handleResultClick,
  loading,
  error,
  searchTerm
}: ResultsPanel) => {
  const [sortOrder, setSortOrder] = useState('')

  const [orderedResults, setOrderedResults] = useState(results)

  // This useEffect hook will re-run whenever 'results' or 'sortOrder' changes
  useEffect(() => {
    // Start with a mutable copy of the results
    const sortedResults = results

    if (sortOrder) {
      // Split 'name-asc' into ['name', 'asc']
      const [key, direction] = sortOrder.split('-');

      // Define the allowed keys for sorting
      type SortableKeys = 'legal_name' | 'revenueBand' | 'employeeCount'; // Add more as needed
      const keyToCompare: SortableKeys =
        key === 'name'
          ? 'legal_name'
          : (key as SortableKeys);

      sortedResults?.sort((a, b) => {
        const valA = a[keyToCompare];
        const valB = b[keyToCompare];

        // Handle cases where values might be null or undefined
        if (valA == null || valB == null) return 0;

        let comparison = 0;
        // For string comparison (like name)
        if (typeof valA === 'string' && typeof valB === 'string') {
          comparison = valA.localeCompare(valB);
        }
        // For numeric comparison (like revenue or employees)
        else if (typeof valA === 'number' && typeof valB === 'number') {
          comparison = valA - valB;
        }
        // If direction is 'desc', reverse the comparison result
        return direction === 'desc' ? comparison * -1 : comparison;
      });
    }
    // Update the state with the newly sorted array
    setOrderedResults(sortedResults);
  }, [sortOrder, results]); // Dependency array

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const renderSkeletonLoading = () => {
    return <S.SkeletonLoading />
  }

  return (
    <S.ResultsColumn>
      {loading && <div>Loading...</div>}

      <S.ResultsContainer>
        <S.ResultsHeader>
          <S.ResultsTitle>
            {orderedResults?.length ? (
              <p>
                showing <span>{orderedResults?.length || 0}</span> results for
                {searchTerm}
              </p>
            ) : (
              <p>Try searching for something</p>
            )}
          </S.ResultsTitle>

          <S.ResultsSort>
            <Select
              id="sortBy"
              name="sortBy"
              label="Sort By"
              options={sortOptions}
              value={sortOrder}
              onChange={(e) => {
                handleSort(e)
              }}
            />
          </S.ResultsSort>
        </S.ResultsHeader>
      </S.ResultsContainer>
      {loading && renderSkeletonLoading()}
      <S.ResultsList>
        {orderedResults &&
          orderedResults?.length > 0 &&
          orderedResults?.map((result: SearchResult) => (
            <ResultItem
              key={result.abn}
              result={result}
              onClick={() => handleResultClick(result)}
            />
          ))}
      </S.ResultsList>
          </S.ResultsColumn>

  )
}

export default ResultsPanel
