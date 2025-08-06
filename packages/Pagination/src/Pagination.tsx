import React from 'react';
import * as S from './Pagination.styles';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </S.PaginationButton>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <S.PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </S.PaginationButton>
    </S.PaginationWrapper>
  );
};
