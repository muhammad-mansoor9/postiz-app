import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { HomeComponent } from '@gitroom/frontend/components/home/home.component';

export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? 'InferenceCore Creators Studio' : 'Gitroom'
  } - Schedule your social media posts`,
  description:
    'Plan, schedule and publish posts to 30+ social networks from one calendar, with analytics, team collaboration and AI assistance.',
};

export default async function HomePage() {
  const cookieStore = await cookies();
  return (
    <HomeComponent
      isLoggedIn={!!cookieStore.get('auth')}
      dashboardUrl={!!process.env.IS_GENERAL ? '/launches' : '/analytics'}
    />
  );
}
