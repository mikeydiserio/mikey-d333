'use client'
import styled from 'styled-components'
import { SearchResult } from '../../types'
import { formatABN, getEmployeeSize } from '../../utils/helpers'
import * as S from './ResultsPanel.styles'


const CompanyDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 15px;
  position: relative;
  z-index: 1;
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`

const DetailValue = styled.span`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`

const CompanyTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto; /* Pushes tags to the bottom */
  padding-top: 20px;
  position: relative;
  z-index: 1;
`

const Tag = styled.span`
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
`

interface CompanyCardProps {
  result: SearchResult
  onClick: () => void
}

export const ResultItem: React.FC<CompanyCardProps> = ({ result, onClick }) => {
  return (
    <S.ResultsItem onClick={onClick}>
      <S.ResultItemContainer>
      <S.ResultsTitle>{result?.business_name}</S.ResultsTitle>
      <S.ResultsTitle>{result?.legal_name}</S.ResultsTitle>
      <CompanyDetailsGrid>
        <DetailItem>
          <DetailLabel>ABN</DetailLabel>
          <DetailValue>
            {result ? formatABN(result?.abn || 'No ABN Provided') : null}
            </DetailValue>
            <CompanyTags>
              <Tag>ABN Status: <strong>{result?.abn_status}</strong></Tag>

            </CompanyTags>
        </DetailItem>
        <DetailItem>
          <DetailLabel>Industry</DetailLabel>
          <DetailValue>{result?.industry || 'Not available'}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>Location</DetailLabel>
            <DetailValue>
            {result?.state || 'Not listed'}
          </DetailValue>
          </DetailItem>
          <DetailItem>
          <DetailLabel>Size (based on no of employees) </DetailLabel>
            <DetailValue>
            {result?.employeeCount ? getEmployeeSize(result?.employeeCount) : 'Not listed'}
          </DetailValue>
          </DetailItem>
          <DetailItem>
          <DetailLabel>Entity Type</DetailLabel>
            <DetailValue>
            {result.entity_type ? result?.entity_type : 'N/A'}
          </DetailValue>
        </DetailItem>
          <DetailLabel>Employee </DetailLabel>
            <DetailValue>
            {result?.state || 'Not listed'}
          </DetailValue>
      </CompanyDetailsGrid>
      </S.ResultItemContainer>
    </S.ResultsItem>
  )
}
export default ResultItem
