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
const LAST_UPDATED = 'October 25, 2026';

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

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    className="underline break-words"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const List = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc ps-[20px] flex flex-col gap-[4px]">{children}</ul>
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
        <List>
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
        </List>
        <p>
          We do not sell your data and we do not use your content or connected
          platform data for advertising.
        </p>
      </Section>

      <Section title="4. Google User Data We Access">
        <p>
          Sections 4 to 9 describe how we handle data received from Google
          APIs (&quot;Google user data&quot;). We only access it when you sign
          in with Google or connect a YouTube channel, and only with the
          permissions you approve on Google&apos;s consent screen. The Service
          uses YouTube API Services: by connecting a YouTube channel you agree
          to the{' '}
          <Link href="https://www.youtube.com/t/terms">
            YouTube Terms of Service
          </Link>
          , and Google&apos;s own handling of your data is described in the{' '}
          <Link href="https://policies.google.com/privacy">
            Google Privacy Policy
          </Link>
          .
        </p>
        <p>
          <strong>Sign in with Google</strong> - we receive your Google account
          ID, email address and basic profile. We keep only your Google account
          ID and email address, to create and identify your account.
        </p>
        <p>
          <strong>Connecting a YouTube channel</strong> - with your permission
          we access:
        </p>
        <List>
          <li>
            <strong>Basic Google profile</strong> - your Google account ID,
            name and profile picture, to identify the account you connect.
          </li>
          <li>
            <strong>YouTube channel information (read-only)</strong> - the
            channels you manage (ID, title, handle, profile image and subscriber
            count), and the views, likes, comments and favourites of videos you
            published through the Service.
          </li>
          <li>
            <strong>YouTube video upload</strong> - to upload the videos you
            schedule, with the title, description, tags, privacy setting,
            audience setting and thumbnail you choose.
          </li>
          <li>
            <strong>YouTube Analytics (read-only)</strong> - daily channel
            metrics such as views, watch time, average view duration, likes and
            subscribers gained or lost.
          </li>
        </List>
        <p>
          Google also issues us an access token and a refresh token so the
          Service can perform these actions for you.
        </p>
        <p>
          <strong>What we store</strong> - the access and refresh tokens, the
          channel ID, title, handle and profile image, and the YouTube link of
          each video you publish through the Service. Subscriber counts and
          analytics are not stored; analytics are fetched when you view them
          and cached for up to one hour.
        </p>
        <p>
          We do not read your other videos, comments, playlists or
          subscriptions, and we do not change or delete existing content on
          your channel.
        </p>
      </Section>

      <Section title="5. How We Use Google User Data">
        <p>We use Google user data only to:</p>
        <List>
          <li>sign you in and identify your account;</li>
          <li>
            let you choose which YouTube channel to connect and show its name
            and picture in the Service;
          </li>
          <li>upload the videos you schedule, at the time you choose;</li>
          <li>show channel and video analytics when you request them;</li>
          <li>
            keep your connection active and tell you when a channel needs to be
            reconnected.
          </li>
        </List>
        <p>
          Our use and transfer of information received from Google APIs adheres
          to the{' '}
          <Link href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </Link>
          , including the Limited Use requirements. We do not sell Google user
          data, use it for advertising, use it to assess credit-worthiness, or
          use it (or allow others to use it) to develop, improve or train
          generalised artificial intelligence or machine learning models.
        </p>
      </Section>

      <Section title="6. How We Share Google User Data">
        <p>We share Google user data only with:</p>
        <List>
          <li>
            <strong>YouTube</strong> - the videos and details you schedule are
            sent to YouTube for publishing.
          </li>
          <li>
            <strong>Your workspace</strong> - members you invite can see the
            connected channel, post to it and view its analytics, according to
            their role.
          </li>
          <li>
            <strong>Tools you authorise</strong> - if you create an API key or
            connect an external tool to the Service, it can list your channels,
            schedule posts and read analytics at your direction.
          </li>
          <li>
            <strong>Service providers</strong> - companies that host our
            servers, database, file storage, background processing and error
            monitoring, which process data on our behalf only to run the
            Service.
          </li>
          <li>
            <strong>AI provider</strong> - if you use the optional AI assistant,
            the names and pictures of your connected channels are sent to our AI
            provider (OpenAI) to answer your request. Your Google tokens and
            YouTube analytics are not sent.
          </li>
          <li>
            <strong>Legal requirements</strong> - when required by law or to
            protect the security of the Service and its users.
          </li>
        </List>
        <p>
          We never share Google user data with advertisers, data brokers or
          information resellers.
        </p>
      </Section>

      <Section title="7. How We Protect Google User Data">
        <List>
          <li>
            All data exchanged with Google, and between your browser and the
            Service, is encrypted in transit using HTTPS (TLS).
          </li>
          <li>
            Access and refresh tokens are kept on our servers, used only to
            communicate with Google on your behalf, and never displayed in the
            Service.
          </li>
          <li>
            Access to the Service requires signing in, and channel data is only
            available to members of the workspace that connected it, according
            to their permissions.
          </li>
          <li>
            Our Google credentials and other secrets are kept in server
            configuration, separate from our source code.
          </li>
          <li>
            Google sign-in and channel connection use OAuth 2.0, so we never see
            your Google password.
          </li>
        </List>
        <p>
          No system is fully secure and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="8. Retention and Deletion of Google User Data">
        <List>
          <li>
            Tokens and channel details are kept while the channel is connected
            to your workspace.
          </li>
          <li>Analytics are cached for up to one hour and not stored.</li>
          <li>
            Links to published videos are kept with your post history.
          </li>
          <li>
            Your Google account ID and email are kept while your account exists.
          </li>
        </List>
        <p>
          <strong>Removing a channel</strong> - the Service immediately stops
          using the channel and its tokens.
        </p>
        <p>
          <strong>Revoking access in your Google Account</strong> - the Service
          can no longer access your Google data, and the channel is shown as
          disconnected. Revoking access at Google stops future access; to also
          delete the data we already hold, delete your account or contact us.
        </p>
        <p>
          <strong>Deleting your account</strong> - the tokens, channel details
          and Google account details of the workspaces you own are deleted or
          irreversibly anonymised, so they can no longer be used or linked to
          you.
        </p>
        <p>
          You can also ask us to delete your Google user data at any time by
          emailing <Mail />.
        </p>
      </Section>

      <Section title="9. Your Choices and Contact">
        <List>
          <li>
            <strong>Revoke access</strong> at any time at{' '}
            <Link href="https://myaccount.google.com/connections">
              https://myaccount.google.com/connections
            </Link>
            .
          </li>
          <li>
            <strong>Remove a channel</strong> from your workspace in the
            Service.
          </li>
          <li>
            <strong>Delete your account</strong> from your settings in the
            Service.
          </li>
          <li>
            <strong>Request deletion</strong> of the Google user data we hold
            by emailing <Mail /> from your account email address.
          </li>
        </List>
      </Section>

      <Section title="10. AI Features">
        <p>
          If you use the optional AI features (for example caption or image
          generation), the prompts and inputs you choose to include are sent to
          the AI model provider that powers the feature, only to generate the
          result you asked for.
        </p>
      </Section>

      <Section title="11. Who We Share Data With">
        <List>
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
        </List>
      </Section>

      <Section title="12. Data Retention and Deletion">
        <List>
          <li>
            Account data is kept while your account is active and deleted or
            anonymised when you delete your account.
          </li>
          <li>
            OAuth tokens are kept while the channel is connected and are
            deleted or anonymised when you delete your account, or on request.
          </li>
          <li>
            Scheduled content is kept until it is published or you delete it.
          </li>
        </List>
        <p>
          To delete your data, remove the channel or delete your account in the
          Service, or email <Mail /> with the account you want deleted and we
          will delete the associated data.
        </p>
      </Section>

      <Section title="13. Security">
        <p>
          We use encryption in transit (TLS), access controls and other
          safeguards to protect your data. No system is fully secure and we
          cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="14. Your Rights">
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete or export your personal data, and to object to or
          restrict its processing. To exercise these rights, email <Mail />.
        </p>
      </Section>

      <Section title="15. Children">
        <p>
          The Service is intended for business use and is not directed to
          children under 18. If you believe a child has provided us with
          personal data, contact us at <Mail /> and we will delete it.
        </p>
      </Section>

      <Section title="16. Changes to This Policy">
        <p>
          We may update this Policy from time to time. The &quot;Last
          updated&quot; date above shows when it last changed. We will update
          this Policy before any change to how we use Google user data takes
          effect.
        </p>
      </Section>
    </div>
  );
}
