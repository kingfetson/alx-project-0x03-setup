// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx and components/layouts/Layout.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  buttonSize?: string;
  action?: () => void;
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}