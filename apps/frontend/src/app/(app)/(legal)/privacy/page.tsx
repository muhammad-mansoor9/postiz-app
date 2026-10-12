import { Metadata } from 'next';
import { ReactNode } from 'react';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'InferenceCore Creators Studio' : 'Gitroom'} Privacy Policy`,
  description: '',
};

// Operator details shown on the page
const COMPANY_NAME = 'InferenceCore';
const CONTACT_EMAIL = 'contact@inferencecore.co';
const LAST_UPDATED = 'September 30, 2026';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flex flex-col gap-[12px]">
    <h2 className="text-[20px] font-[600]">{title}</h2>
    <div className="flex flex-col gap-[8px] text-[15px] leading-[1.6] text-newTextColor/80">
      {children}
    </div>
  </section>
);

const Mail = () => (
  <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
    {CONTACT_EMAIL}
  </a>
);

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[32px] font-[600]">Privacy Policy</h1>
        <div className="text-[14px] text-newTextColor/60">
          Last updated: {LAST_UPDATED}
        </div>
      </div>

      <div className="text-[15px] leading-[1.6] text-newTextColor/80">
        This Privacy Policy explains how {COMPANY_NAME} (&quot;we&quot;,
        &quot;us&quot; or &quot;our&quot;) collects, uses, shares and protects
        personal data when you use this social-media scheduling, publishing and
        analytics service (the &quot;Service&quot;). By using the Service you
        acknowledge this Policy.
      </div>

      <Section title="1. Who We Are">
        <p>
          The Service is operated by {COMPANY_NAME}. For any privacy question or
          request, contact us at <Mail />.
        </p>
      </Section>

      <Section title="2. The Data We Collect">
        <p>
          <strong>Account data</strong> - name, email address, password (stored
          as a hash), profile picture, organisation name, role, language and
          timezone preferences, and the workspaces and permissions you belong
          to.
        </p>
        <p>
          <strong>Connected platform data</strong> - when you connect a social
          or messaging account, we receive via that platform&apos;s API the
          OAuth access and refresh tokens, the scopes you granted, the account
          username, identifier and profile picture, and the content and
          analytics needed to provide the Service (posts, comments, and
          post-level metrics such as impressions, views and reach).
        </p>
        <p>
          <strong>Content you upload</strong> - text, images, video, captions,
          links, schedules and any other content you create or upload to the
          Service.
        </p>
        <p>
          <strong>Logs</strong> - IP address, browser and device information,
          and error and usage logs needed to operate and secure the Service.
        </p>
      </Section>

      <Section title="3. How We Use the Data">
        <ul className="list-disc ps-[20px] flex flex-col gap-[4px]">
          <li>
            To provide the Service: authenticate you, store your content,
            publish it to the platforms you connect at the time you schedule,
            and show you analytics.
          </li>
          <li>To secure the Service and prevent abuse.</li>
          <li>
            To send service messages, such as failed-post and account
            notifications.
          </li>
        </ul>
        <p>
          We do not sell your data and we do not use your content or connected
          platform data for advertising.
        </p>
      </Section>

      <Section title="4. YouTube and Google Data">
        <p>
          The Service uses YouTube API Services. By connecting a YouTube
          channel you agree to the{' '}
          <a
            className="underline"
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Terms of Service
          </a>{' '}
          and the{' '}
          <a
            className="underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Privacy Policy
          </a>
          . You can revoke the Service&apos;s access to your Google data at any
          time at{' '}
          <a
            className="underline"
            href="https://security.google.com/settings/security/permissions"
            target="_blank"
            rel="noreferrer"
          >
            https://security.google.com/settings/security/permissions
          </a>
          .
        </p>
        <p>
          Our use of information received from Google APIs adheres to the{' '}
          <a
            className="underline"
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </Section>

      <Section title="5. AI Features">
        <p>
          If you use the optional AI features (for example caption or image
          generation), the prompts and inputs you choose to include are sent to
          the AI model provider that powers the feature, only to generate the
          result you asked for.
        </p>
      </Section>

      <Section title="6. Who We Share Data With">
        <ul className="list-disc ps-[20px] flex flex-col gap-[4px]">
          <li>
            The platforms you connect - your content is sent to the platform
            you choose to publish on, and analytics are received from it.
          </li>
          <li>
            Infrastructure providers that host and run the Service, under
            confidentiality and only for that purpose.
          </li>
          <li>
            Other members of your workspace, according to their role and
            permissions.
          </li>
          <li>Authorities, when we are legally required to.</li>
        </ul>
      </Section>

      <Section title="7. Data Retention and Deletion">
        <ul className="list-disc ps-[20px] flex flex-col gap-[4px]">
          <li>
            Account data is kept while your account is active and deleted after
            the account is closed.
          </li>
          <li>
            OAuth tokens are kept while the channel is connected and deleted
            when you disconnect it from the Service.
          </li>
          <li>
            Scheduled content is kept until it is published or you delete it.
          </li>
        </ul>
        <p>
          To delete your data, disconnect the channel or delete your account in
          the Service, or email <Mail /> with the account you want deleted and
          we will delete the associated data.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We use encryption in transit (TLS), access controls and other
          safeguards to protect your data. No system is fully secure and we
          cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="9. Your Rights">
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete or export your personal data, and to object to or
          restrict its processing. To exercise these rights, email <Mail />.
        </p>
      </Section>

      <Section title="10. Children">
        <p>
          The Service is intended for business use and is not directed to
          children under 18. If you believe a child has provided us with
          personal data, contact us at <Mail /> and we will delete it.
        </p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>
          We may update this Policy from time to time. The &quot;Last
          updated&quot; date above shows when it last changed.
        </p>
      </Section>
    </div>
  );
}
