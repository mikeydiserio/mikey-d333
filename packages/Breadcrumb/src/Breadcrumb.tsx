import React from 'react';
import * as S from './Breadcrumb.styles';

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <S.BreadcrumbNav aria-label="breadcrumb">
      <S.BreadcrumbList>
        {items.map((item, index) => (
          <S.BreadcrumbItem key={index}>
            {index < items.length - 1 ? (
              <S.BreadcrumbLink href={item.href}>{item.label}</S.BreadcrumbLink>
            ) : (
              <S.BreadcrumbCurrent aria-current="page">{item.label}</S.BreadcrumbCurrent>
            )}
            {index < items.length - 1 && <S.BreadcrumbSeparator />}
          </S.BreadcrumbItem>
        ))}
      </S.BreadcrumbList>
    </S.BreadcrumbNav>
  );
};
