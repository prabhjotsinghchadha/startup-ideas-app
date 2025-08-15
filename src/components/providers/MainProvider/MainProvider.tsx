import { ReactNode } from 'react';

import ReduxProvider from '../ReduxProvider';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => <ReduxProvider>{children}</ReduxProvider>;
