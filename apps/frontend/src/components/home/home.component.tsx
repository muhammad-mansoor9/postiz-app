import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';

// Operator details shown on the page
const COMPANY_NAME = 'InferenceCore';

const platforms = [
  { identifier: 'x', name: 'X' },
  { identifier: 'linkedin', name: 'LinkedIn' },
  { identifier: 'instagram', name: 'Instagram' },
  { identifier: 'facebook', name: 'Facebook' },
  { identifier: 'threads', name: 'Threads' },
  { identifier: 'tiktok', name: 'TikTok' },
  { identifier: 'youtube', name: 'YouTube' },
  { identifier: 'pinterest', name: 'Pinterest' },
  { identifier: 'reddit', name: 'Reddit' },
  { identifier: 'bluesky', name: 'Bluesky' },
  { identifier: 'mastodon', name: 'Mastodon' },
  { identifier: 'discord', name: 'Discord' },
  { identifier: 'slack', name: 'Slack' },
  { identifier: 'telegram', name: 'Telegram' },
  { identifier: 'gmb', name: 'Google Business' },
  { identifier: 'dribbble', name: 'Dribbble' },
  { identifier: 'medium', name: 'Medium' },
  { identifier: 'devto', name: 'Dev.to' },
  { identifier: 'hashnode', name: 'Hashnode' },
  { identifier: 'wordpress', name: 'WordPress' },
  { identifier: 'lemmy', name: 'Lemmy' },
  { identifier: 'nostr', name: 'Nostr' },
  { identifier: 'twitch', name: 'Twitch' },
  { identifier: 'vk', name: 'VK' },
];

const features = [
  {
    title: 'Calendar scheduling',
    description:
      'Drag and drop posts on a weekly, monthly or list calendar and let them publish automatically at the right time.',
  },
  {
    title: 'One post, every channel',
    description:
      'Write once and customize the text, media and settings for each network before publishing everywhere at once.',
  },
  {
    title: 'AI assistance',
    description:
      'Generate captions, images and full post ideas with the built-in AI assistant, or connect your own agent through the MCP server and API.',
  },
  {
    title: 'Analytics',
    description:
      'Track impressions, engagement and follower growth for every connected channel from a single dashboard.',
  },
  {
    title: 'Team collaboration',
    description:
      'Invite your team, assign roles, leave comments on drafts and review posts before they go live.',
  },
  {
    title: 'Media library',
    description:
      'Upload images and videos once, reuse them across posts and design visuals with the built-in editor.',
  },
  {
    title: 'Auto actions',
    description:
      'Automatically repost, add a comment after publishing or trigger actions when a post reaches an engagement goal.',
  },
  {
    title: 'Public API & webhooks',
    description:
      'Automate your publishing from n8n, Make or your own code using the public API and webhooks.',
  },
];

const steps = [
  {
    title: 'Connect your channels',
    description:
      'Link your social accounts securely with each platform’s official login.',
  },
  {
    title: 'Create your posts',
    description:
      'Write, design and preview your content, or let AI draft it for you.',
  },
  {
    title: 'Schedule and relax',
    description:
      'Pick a time slot and your posts are published automatically, then measure the results.',
  },
];

const faq = [
  {
    question: 'What is this service?',
    answer:
      'It is a social media scheduling tool. You connect your social accounts, create posts on a calendar and they are published automatically at the time you choose.',
  },
  {
    question: 'Which platforms are supported?',
    answer:
      'More than 30 networks and chat platforms, including X, LinkedIn, Instagram, Facebook, TikTok, YouTube, Pinterest, Threads, Reddit, Bluesky, Mastodon, Discord, Slack and Telegram.',
  },
  {
    question: 'Can I post the same content to multiple channels?',
    answer:
      'Yes. Write one post, select the channels you want and adjust the content per channel when a network needs something different.',
  },
  {
    question: 'Can I work with my team?',
    answer:
      'Yes. You can invite team members to your workspace, give them roles and collaborate on posts with comments and previews.',
  },
  {
    question: 'Can I use it with AI agents?',
    answer:
      'Yes. The built-in AI assistant can draft posts and images, and the MCP server and public API let external agents and automation tools schedule posts for you.',
  },
  {
    question: 'How is my data handled?',
    answer:
      'We only use the data needed to provide the service. You can read the full details in our Privacy Policy.',
  },
];

const Section: FC<{
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}> = ({ id, title, subtitle, children }) => (
  <section
    id={id}
    className="w-full max-w-[1200px] mx-auto px-[16px] py-[64px] flex flex-col gap-[40px]"
  >
    <div className="flex flex-col gap-[12px] text-center items-center">
      <h2 className="text-[32px] md:text-[40px] font-[600] leading-[1.2]">
        {title}
      </h2>
      {!!subtitle && (
        <p className="text-[16px] text-newTextColor/60 max-w-[640px]">
          {subtitle}
        </p>
      )}
    </div>
    {children}
  </section>
);

const PrimaryButton: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="text-white bg-btnPrimary rounded-[8px] h-[48px] px-[24px] flex items-center justify-center text-[15px] font-[600] hover:opacity-90 transition-opacity"
  >
    {children}
  </Link>
);

const SecondaryButton: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="border border-newBorder bg-newBgColorInner rounded-[8px] h-[48px] px-[24px] flex items-center justify-center text-[15px] font-[600] hover:bg-newBgLineColor transition-colors"
  >
    {children}
  </Link>
);

type HomeNavigation = {
  isLoggedIn: boolean;
  dashboardUrl: string;
};

export const HomeHeader: FC<HomeNavigation> = ({
  isLoggedIn,
  dashboardUrl,
}) => (
  <header className="sticky top-0 z-[10] bg-newBgColor/90 backdrop-blur border-b border-newBorder">
    <div className="max-w-[1200px] mx-auto px-[16px] h-[72px] flex items-center justify-between gap-[16px]">
      <Link href="/" aria-label="Home">
        <LogoTextComponent />
      </Link>
      <nav className="hidden md:flex items-center gap-[32px] text-[15px] text-newTextColor/70">
        <a href="/#features" className="hover:text-newTextColor">
          Features
        </a>
        <a href="/#platforms" className="hover:text-newTextColor">
          Platforms
        </a>
        <a href="/#faq" className="hover:text-newTextColor">
          FAQ
        </a>
        <Link href="/contact" className="hover:text-newTextColor">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-[12px]">
        {!isLoggedIn && (
          <Link
            href="/auth/login"
            className="text-[15px] font-[600] px-[12px] hover:underline"
          >
            Sign in
          </Link>
        )}
        <Link
          href={isLoggedIn ? dashboardUrl : '/auth'}
          className="text-white bg-btnPrimary rounded-[8px] h-[40px] px-[16px] flex items-center text-[14px] font-[600] hover:opacity-90 transition-opacity"
        >
          {isLoggedIn ? 'Go to dashboard' : 'Get started'}
        </Link>
      </div>
    </div>
  </header>
);

export const HomeFooter: FC<HomeNavigation> = ({
  isLoggedIn,
  dashboardUrl,
}) => (
  <footer className="border-t border-newBorder mt-[32px]">
    <div className="max-w-[1200px] mx-auto px-[16px] py-[32px] flex flex-col md:flex-row gap-[16px] items-center justify-between text-[14px] text-newTextColor/60">
      <div>
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-[24px]">
        <Link href="/privacy" className="hover:text-newTextColor">
          Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-newTextColor">
          Contact
        </Link>
        <Link
          href={isLoggedIn ? dashboardUrl : '/auth/login'}
          className="hover:text-newTextColor"
        >
          {isLoggedIn ? 'Dashboard' : 'Sign in'}
        </Link>
      </div>
    </div>
  </footer>
);

export const HomeComponent: FC<HomeNavigation> = ({
  isLoggedIn,
  dashboardUrl,
}) => {
  return (
    <div className="bg-newBgColor min-h-screen text-newTextColor flex flex-col">
      <HomeHeader isLoggedIn={isLoggedIn} dashboardUrl={dashboardUrl} />


      <main className="flex flex-col">
        <section className="w-full max-w-[1200px] mx-auto px-[16px] pt-[96px] pb-[64px] flex flex-col items-center text-center gap-[24px]">
          <div className="border border-newBorder bg-newBgColorInner rounded-full px-[16px] py-[6px] text-[13px] text-newTextColor/70">
            Schedule to 30+ social networks from one place
          </div>
          <h1 className="text-[40px] md:text-[64px] font-[600] leading-[1.1] max-w-[900px]">
            Your social media,{' '}
            <span className="text-btnPrimary">planned and published</span> on
            autopilot
          </h1>
          <p className="text-[18px] text-newTextColor/60 max-w-[680px]">
            Create, schedule and analyze posts for every channel in a single
            calendar. Collaborate with your team and let AI help you write
            better content, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-[12px] mt-[8px]">
            {isLoggedIn ? (
              <PrimaryButton href={dashboardUrl}>Go to dashboard</PrimaryButton>
            ) : (
              <>
                <PrimaryButton href="/auth">Start for free</PrimaryButton>
                <SecondaryButton href="/auth/login">
                  I already have an account
                </SecondaryButton>
              </>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-[12px] mt-[32px]">
            {platforms.slice(0, 12).map((p) => (
              <img
                key={p.identifier}
                src={`/icons/platforms/${p.identifier}.png`}
                alt={p.name}
                title={p.name}
                className="w-[40px] h-[40px] rounded-full"
              />
            ))}
          </div>
        </section>

        <Section
          title="How it works"
          subtitle="Go from idea to published post in three simple steps."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-newBgColorInner border border-newBorder rounded-[12px] p-[24px] flex flex-col gap-[12px]"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-btnPrimary text-white flex items-center justify-center font-[600]">
                  {index + 1}
                </div>
                <h3 className="text-[20px] font-[600]">{step.title}</h3>
                <p className="text-[15px] leading-[1.6] text-newTextColor/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="features"
          title="Everything you need to grow your audience"
          subtitle="All the tools to plan, publish and measure your social media in one workspace."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-newBgColorInner border border-newBorder rounded-[12px] p-[24px] flex flex-col gap-[8px]"
              >
                <h3 className="text-[18px] font-[600]">{feature.title}</h3>
                <p className="text-[15px] leading-[1.6] text-newTextColor/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="platforms"
          title="All your channels, one calendar"
          subtitle="Connect the networks where your audience lives and manage them side by side."
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[12px]">
            {platforms.map((p) => (
              <div
                key={p.identifier}
                className="bg-newBgColorInner border border-newBorder rounded-[12px] p-[16px] flex items-center gap-[12px]"
              >
                <img
                  src={`/icons/platforms/${p.identifier}.png`}
                  alt={p.name}
                  className="w-[32px] h-[32px] rounded-full"
                />
                <span className="text-[14px] font-[500]">{p.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="Frequently asked questions">
          <div className="w-full max-w-[800px] mx-auto flex flex-col gap-[12px]">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-newBgColorInner border border-newBorder rounded-[12px] px-[24px] py-[20px]"
              >
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center gap-[16px] text-[17px] font-[600]">
                  {item.question}
                  <span className="text-[24px] leading-none text-newTextColor/60 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-[12px] text-[15px] leading-[1.6] text-newTextColor/60">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section className="w-full max-w-[1200px] mx-auto px-[16px] py-[64px]">
          <div className="bg-btnPrimary text-white rounded-[16px] px-[24px] py-[56px] flex flex-col items-center text-center gap-[20px]">
            <h2 className="text-[32px] md:text-[40px] font-[600] leading-[1.2]">
              Ready to take control of your social media?
            </h2>
            <p className="text-[16px] text-white/80 max-w-[560px]">
              Create your account and schedule your first post in minutes.
            </p>
            <Link
              href={isLoggedIn ? dashboardUrl : '/auth'}
              className="bg-white text-[#0e0e0e] rounded-[8px] h-[48px] px-[24px] flex items-center justify-center text-[15px] font-[600] hover:opacity-90 transition-opacity"
            >
              {isLoggedIn ? 'Go to dashboard' : 'Get started for free'}
            </Link>
          </div>
        </section>
      </main>

      <HomeFooter isLoggedIn={isLoggedIn} dashboardUrl={dashboardUrl} />
    </div>
  );
};
