'use client'
import React, { useEffect } from 'react'
import { SearchResult } from '../../types'
import {
  formatABN,
  formatRevenueBand
} from '../../utils/helpers'
import * as S from './DetailModal.styles'

interface DetailModalProps {
  onClose: () => void
  result: SearchResult
  children?: React.ReactNode
}

export const DetailModal: React.FC<DetailModalProps> = ({
  result,
  onClose,
  children
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <S.ModalHeader>
          <h2>{result?.business_name}</h2>
          <h2>{result?.legal_name}</h2>
          <S.ModalCloseButton onClick={onClose}>&times;</S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <S.DetailSection>
            <h3>Detailed Entity Information</h3>
            <S.DetailGrid>
              <S.DetailItem>
                <S.DetailLabel>Legal Name{result.legal_name}</S.DetailLabel>
                <S.DetailValue>Business Name: {result?.business_name}</S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>ABN</S.DetailLabel>
                <S.DetailValue>
                  {result.abn && formatABN(result.abn)}
                </S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>Industry</S.DetailLabel>
                <S.DetailValue>{result?.industry}</S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>ABN Status</S.DetailLabel>
                <S.DetailValue>Status: <strong>{result.abn_status}</strong></S.DetailValue>
              </S.DetailItem>
            </S.DetailGrid>
          </S.DetailSection>

          <S.DetailSection>
            <h3>Business Address</h3>
            <S.DetailGrid>
              <S.DetailItem>
                <S.DetailLabel>State</S.DetailLabel>
                <S.DetailValue>{result?.state}</S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>Postcode</S.DetailLabel>
                <S.DetailValue>{result?.postcode}</S.DetailValue>
              </S.DetailItem>
            </S.DetailGrid>
          </S.DetailSection>

          <S.DetailSection>
            <h3>Business Operations</h3>
            <S.DetailGrid>
              <S.DetailItem>
                <S.DetailLabel>Employee Count</S.DetailLabel>
                <S.DetailValue>
                  {result?.employeeCount || 'Not listed'}
                </S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>Revenue Band</S.DetailLabel>
                <S.DetailValue>
                  {result?.revenueBand
                    ? formatRevenueBand(result?.revenueBand)
                    : 'Not listed'}
                  </S.DetailValue>
              </S.DetailItem>
            </S.DetailGrid>
          </S.DetailSection>

          <S.DetailSection>
            <h3>Business Names</h3>
            <S.BusinessNamesList>
            </S.BusinessNamesList>
          </S.DetailSection>

          <S.DetailSection>
            <h3>Registration Details</h3>
            <S.DetailGrid>
              <S.DetailItem>
                <S.DetailLabel>ABN Effective From</S.DetailLabel>
                <S.DetailValue>
                  {result?.abn_status_from_date}
                </S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>GST Effective From</S.DetailLabel>
                <S.DetailValue>
                  {result?.gst_status_from_date}
                </S.DetailValue>
              </S.DetailItem>
              { children && children}
            </S.DetailGrid>
          </S.DetailSection>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}
export default DetailModal
