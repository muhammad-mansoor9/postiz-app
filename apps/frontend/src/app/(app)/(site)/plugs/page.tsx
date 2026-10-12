import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
<<<<<<< HEAD
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'InferenceCore Creators Studio' : 'Gitroom'} Plugs`,
  description: '',
};
=======

>>>>>>> upstream/main
export default async function Index() {
  return redirect('/settings?tab=plugs');
}
