'use client'
import { SearchResult } from '../../types'
import * as S from './ResultsPanel.styles'

interface CompanyCardProps {
  result: SearchResult
  onClick: () => void
}

export const ResultItem: React.FC<CompanyCardProps> = ({ result, onClick }) => {
  return (
    <S.ResultsItem onClick={onClick}>
      <S.ResultItemContainer>
        {result?.business_name && <S.ResultsTitle>{result?.business_name}</S.ResultsTitle>}
        {result?.legal_name && <S.DetailLabel>{result?.legal_name}</S.DetailLabel>}
        <S.DetailItem>
          <S.CompanyTags>
            <S.Tag>ABN: <strong>{result?.abn}</strong></S.Tag>
            <S.Tag>ABN Status: <strong>{result?.abn_status}</strong></S.Tag>
            <S.Tag>From Date: <strong>{result?.abn_status_from_date}</strong></S.Tag>
          </S.CompanyTags>
        </S.DetailItem>
      </S.ResultItemContainer>
    </S.ResultsItem>
  )
}
export default ResultItem
