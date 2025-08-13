import type React from 'react';

export interface InsightCardData {
  title: string;
  insight: string;
  connection: string;
  potential: string;
  className?: string;
}

export interface PedagogyStepData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}