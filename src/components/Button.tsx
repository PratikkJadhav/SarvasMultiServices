import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline-dark' | 'outline-light';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  'outline-dark': 'btn-outline-dark',
  'outline-light': 'btn-outline-light',
};

export default function Button({ href, children, variant = 'primary', arrow = false, className = '' }: ButtonProps) {
  return (
    <a href={href} className={`group ${variantClass[variant]} ${className}`}>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />}
    </a>
  );
}
