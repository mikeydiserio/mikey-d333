'use client'

import * as S from './SearchBar.styles'

interface SearchBarProps {
  placeholder?: string
  query: string
  setQuery: (e: string) => void
  hints?: string[]
}


export default function SearchBar({
  placeholder = 'Enter company name, ABN or ACN...',
  query = '',
  setQuery,
  hints = [
  'Technology',
  'Healthcare',
  'Construction',
  'Sydney',
  'ABN number',
],
}: SearchBarProps) {

  return (
    <>
    <S.SearchBox>
      <S.SearchInput
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search companies"
      />

      {query && (
        <S.ClearButton
          type="button"
          className="clear-button"
          onClick={() => setQuery('')}
          aria-label="Clear search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </S.ClearButton>
      )}

        <S.SearchButton
          type="button"
          className="search-button"
          onClick={() => setQuery(query)}
          aria-label="Search"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span>Search</span>
      </S.SearchButton>
    </S.SearchBox>
      <S.HintBox>
          {hints.map(hint => {
            return (
              <S.HintPill key={hint} onClick={() => setQuery(hint)}>
                {hint}
              </S.HintPill>
            )
          })}
      </S.HintBox>
    </>

  )
}
