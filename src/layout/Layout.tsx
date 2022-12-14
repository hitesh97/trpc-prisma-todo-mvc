import { AppShell } from '@mantine/core';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
import footerMockData from '../components/mockData/footerData';

export default function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element {
  return (
    <AppShell padding={0} navbar={<AppHeader />} footer={<AppFooter data={footerMockData.data} />}>
      {children}
    </AppShell>
  );
}
