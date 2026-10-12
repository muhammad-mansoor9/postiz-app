import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { ContactForm } from '@gitroom/frontend/components/home/contact.form';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'InferenceCore Creators Studio' : 'Gitroom'} Contact Us`,
  description: '',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[32px] font-[600]">Contact Us</h1>
        <div className="text-[15px] leading-[1.6] text-newTextColor/60">
          Have a question about the service, your account or a partnership?
          Send us a message and we will get back to you by email.
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
