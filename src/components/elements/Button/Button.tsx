import * as React from 'react';

type ButtonPriority = 'primary' | 'secondary';
type ButtonSize = 'medium';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: ButtonPriority;
  size?: ButtonSize;
}

function getColor(priority: ButtonPriority): string {
  switch (priority) {
    case 'primary':
      return 'purple';
    case 'secondary':
      return '';
  }
}

function getPadding(size: ButtonSize): string {
  switch (size) {
    case 'medium':
      return 'px-10 py-3';
  }
}

export function Button(props: ButtonProps): React.ReactElement {
  const {
    children,
    className,
    priority = 'primary',
    size = 'medium',
    ...rest
  } = props;

  return (
    <button
      className={`
        ${className}
        border border-${getColor(priority)} rounded-full
        ${getPadding(size)}
        font-medium text-${getColor(priority)} text-xs uppercase
        hover:opacity-50
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
