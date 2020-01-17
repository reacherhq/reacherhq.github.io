import classNames from 'classnames';
import React from 'react';

type ButtonPriority = 'primary' | 'secondary';
type ButtonSize = 'medium';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
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
      return 'px-8 py-4';
  }
}

export function Button(props: ButtonProps): React.ReactElement {
  const {
    children,
    className,
    disabled,
    full,
    priority = 'primary',
    size = 'medium',
    ...rest
  } = props;

  const color = getColor(priority);

  return (
    <button
      className={classNames(
        className,
        full ? `bg-${color} text-white` : `text-${color}`,
        `border border-${color} rounded-full`,
        getPadding(size),
        'font-normal text-xs uppercase',
        'hover:opacity-50',
        disabled && 'cursor-not-allowed opacity-75 hover:opacity-75'
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
