import React from 'react';
import { ApplicationLayout } from '../ApplicationLayout';

export interface StaticLayoutProps {
  heading?: string;
}

export const StaticLayout: React.FunctionComponent<StaticLayoutProps> = ({ heading, children }) => (
  <ApplicationLayout heading={heading}>{children}</ApplicationLayout>
);
