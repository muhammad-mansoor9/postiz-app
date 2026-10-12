import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import {
  HomeFooter,
  HomeHeader,
} from '@gitroom/frontend/components/home/home.component';

export default async function LegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('auth');
  const dashboardUrl = !!process.env.IS_GENERAL ? '/launches' : '/analytics';

  return (
    <div className="bg-newBgColor min-h-screen text-newTextColor flex flex-col">
      <HomeHeader isLoggedIn={isLoggedIn} dashboardUrl={dashboardUrl} />
      <main className="flex-1 w-full max-w-[800px] mx-auto px-[16px] py-[48px]">
        {children}
      </main>
      <HomeFooter isLoggedIn={isLoggedIn} dashboardUrl={dashboardUrl} />
    </div>
  );
}
