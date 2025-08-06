import React from 'react';
import * as S from './Article.styles';

export interface ArticleProps {
  title: string;
  author: string;
  date: string;
  children: React.ReactNode;
}

export const Article: React.FC<ArticleProps> = ({ title, author, date, children }) => {
  return (
    <S.ArticleWrapper>
      <S.ArticleHeader>
        <h1>{title}</h1>
        <p>By {author} on {date}</p>
      </S.ArticleHeader>
      <S.ArticleContent>{children}</S.ArticleContent>
    </S.ArticleWrapper>
  );
};
