import React from 'react';

export function getDisplayName<T>(WrappedComponent: React.ComponentType<T>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
