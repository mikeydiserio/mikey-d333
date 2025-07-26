/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import Header from '@mikey-d333/header';
import { NextRequest } from 'next/server';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createClient } from '../..//utils/supabase/client';
import DetailModal from '../../components/DetailModal';
import FilterPanel from '../../components/FilterPanel';
import Pagination from '../../components/Pagination';
import ResultsPanel from '../../components/ResultsPanel';

export const ResultsAndFilters = styled.div`
  display: flex;
  margin-top: 60px;
  flex-flow: row nowrap;
  width: 100%;
`

export const PageContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
`

export const HeaderWrapper = styled.header`
  flex-flow: row nowrap;
  text-align: left;
  color: black;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
`

export interface SearchResult {
  abn?: string;
  acn?: string;
  abn_status?: string;
  abn_status_from_date?: string;
  legal_name?: string;
  business_name?: string; // Removed | null to match expected type
  entity_type?: string;
  gst_status?: string;
  gst_status_from_date?: string;
  state?: string;
  postcode?: string;
  employeeCount?: number;
  revenueBand?: string;
}
export interface Filters {
  activeOnly: string[]
  gstRegistered: string[]
  industries: string[]
  employeeSizes: string[]
  states: string[]
  revenueBands: string[]
}

export const hints = [
  'Science',
  'Technology',
  'Hospitality',
  'Retail',
  'Education'
]


// The custom useDebounce hook remains the same
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export const Homepage =  () => {
  const supabase = createClient();

  // State management
  const [results, setResults] = useState<SearchResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);  const [filters, setFilters] = useState<Filters>({
    activeOnly: [],
    gstRegistered: [],
    industries: [],
    employeeSizes: [],
    states: [],
    revenueBands: [],
  });

  const debouncedQuery = useDebounce(query, 500); // Debounce the query input

  // Constants
  const ITEMS_PER_PAGE = 500;

  useEffect(() => {
  // Fetch data from Supabase
  const fetchResults = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Calculate pagination range
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      // Build the query
      const { data, error: queryError, count } = await supabase
        .from('entities') // Changed from 'products'
        .select('*')
        // .limit(1000)
        .range(from, to);


      if (queryError) {
        throw queryError;
      }

      setResults(data as SearchResult[] || []);
      setTotalPages(Math.ceil((count || 0) / ITEMS_PER_PAGE));
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
    fetchResults();

  }, [debouncedQuery]); // Add all dependencies that should trigger a refetch


  // Reset all filters
  const handleResetFilters = () => {
    setFilters({
      activeOnly: [],
      gstRegistered: [],
      industries: [],
      employeeSizes: [],
      states: [],
      revenueBands: [],
    });
    setCurrentPage(1);
  };

  const handleResultClick = (result: SearchResult) => {
    setSelectedResult(result)
  }

  const handleCheckboxChange = (
    filterGroupName: 'industries' | 'employeeSizes' | 'states' | 'revenueBands',
    value: string,
  ) => {
    const currentValues = filters[filterGroupName]
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value]
    setFilters({
      ...filters,
      [filterGroupName]: newValues,
    })
  }

  // Render component
  return (
    <PageContainer>
      <Header
        searchTerm={query}
        setSearchTerm={setQuery}
        hints={hints}
      />
      <ResultsAndFilters>
          <ResultsPanel
            results={results}
            handleResultClick={handleResultClick}
            loading={isLoading}
            error={error}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            handleCheckboxChange={handleCheckboxChange}
            onApplyFilters={() => setCurrentPage(1)}
            onResetFilters={handleResetFilters}
          />
      </ResultsAndFilters>
      <>
      {selectedResult && (
          <DetailModal
            result={selectedResult}
            onClose={() => setSelectedResult(null)}
        />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </>
    </PageContainer>
  );
}

export default Homepage;

export const getStaticProps = async (req: NextRequest) => {
  console.log(req)
  return {
    props: {
      // Pass any props needed for the initial render
    },
  };
};
