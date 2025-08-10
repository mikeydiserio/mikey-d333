import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import VideoPlayer from './video-player';

describe('VideoPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
