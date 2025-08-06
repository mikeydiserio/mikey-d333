import React from 'react';
import * as S from './Avatar.styles';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(!src);

    const handleImageError = () => {
      setImageError(true);
    };

    return (
      <S.AvatarWrapper ref={ref} {...props}>
        {!imageError && src ? (
          <S.AvatarImage src={src} alt={alt} onError={handleImageError} />
        ) : (
          <S.AvatarFallback>{fallback}</S.AvatarFallback>
        )}
      </S.AvatarWrapper>
    );
  }
);

Avatar.displayName = 'Avatar';
