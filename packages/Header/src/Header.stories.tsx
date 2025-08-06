import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { useSession } from '@/components/SessionProvider';
import { useToast } from '@/components/Toast/ToastProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { supabase } from '@/integrations/supabase/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { vi, Mock } from 'vitest'; // Import vi and Mock

// Mock the hooks and supabase for Storybook
vi.mock('@/components/SessionProvider', () => ({
  useSession: vi.fn(),
}));
vi.mock('@/components/Toast/ToastProvider', () => ({
  useToast: vi.fn(),
}));
vi.mock('@/theme/ThemeProvider', () => ({
  useTheme: vi.fn(),
}));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signOut: vi.fn(),
    },
  },
}));
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // No specific argTypes needed as it relies on global context/mocks
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedOut: Story = {
  render: () => {
    (useSession as unknown as Mock).mockReturnValue({ user: null, session: null, isLoading: false });
    (useToast as unknown as Mock).mockReturnValue({ showToast: vi.fn(), dismissToast: vi.fn() });
    (useTheme as unknown as Mock).mockReturnValue({ theme: 'light', toggleTheme: vi.fn() });
    (supabase.auth.signOut as unknown as Mock).mockResolvedValue({ error: null });
    (useRouter as unknown as Mock).mockReturnValue({ push: vi.fn() });
    return <Header />;
  },
};

export const LoggedIn: Story = {
  render: () => {
    (useSession as unknown as Mock).mockReturnValue({
      user: { email: 'test@example.com' },
      session: { user: { email: 'test@example.com' } },
      isLoading: false,
    });
    (useToast as unknown as Mock).mockReturnValue({ showToast: vi.fn(), dismissToast: vi.fn() });
    (useTheme as unknown as Mock).mockReturnValue({ theme: 'light', toggleTheme: vi.fn() });
    (supabase.auth.signOut as unknown as Mock).mockResolvedValue({ error: null });
    (useRouter as unknown as Mock).mockReturnValue({ push: vi.fn() });
    return <Header />;
  },
};

export const LoggedInDarkTheme: Story = {
  render: () => {
    (useSession as unknown as Mock).mockReturnValue({
      user: { email: 'test@example.com' },
      session: { user: { email: 'test@example.com' } },
      isLoading: false,
    });
    (useToast as unknown as Mock).mockReturnValue({ showToast: vi.fn(), dismissToast: vi.fn() });
    (useTheme as unknown as Mock).mockReturnValue({ theme: 'dark', toggleTheme: vi.fn() });
    (supabase.auth.signOut as unknown as Mock).mockResolvedValue({ error: null });
    (useRouter as unknown as Mock).mockReturnValue({ push: vi.fn() });
    return <Header />;
  },
};