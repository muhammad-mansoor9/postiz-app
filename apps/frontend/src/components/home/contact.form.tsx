'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { Button } from '@gitroom/react/form/button';
import { Input } from '@gitroom/react/form/input';
import { Textarea } from '@gitroom/react/form/textarea';
import { useMemo, useState } from 'react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { ContactDto } from '@gitroom/nestjs-libraries/dtos/contact/contact.dto';
import { useVariables } from '@gitroom/react/helpers/variable.context';
import { loadRecaptchaToken } from '@gitroom/frontend/components/preview/comments.components';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const { recaptchaSiteKey } = useVariables();
  const resolver = useMemo(() => {
    return classValidatorResolver(ContactDto);
  }, []);
  const form = useForm<Inputs>({
    resolver,
  });
  const fetchData = useFetch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError('');
    setLoading(true);
    try {
      let recaptchaToken: string | undefined;
      if (recaptchaSiteKey) {
        const token = await loadRecaptchaToken(recaptchaSiteKey).catch(
          () => null
        );
        if (!token) {
          setError('Captcha verification failed, please try again.');
          return;
        }
        recaptchaToken = token;
      }

      const response = await fetchData('/public/contact', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          ...(recaptchaToken ? { recaptchaToken } : {}),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        const message = Array.isArray(body?.message)
          ? body.message[0]
          : body?.message;
        setError(
          response.status === 429
            ? 'Too many messages, please try again later.'
            : message || 'Could not send your message, please try again.'
        );
        return;
      }

      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-newBgColorInner border border-newBorder rounded-[12px] p-[24px] text-[15px] leading-[1.6]">
        Thank you for reaching out! We received your message and will get back
        to you by email as soon as possible.
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-newBgColorInner border border-newBorder rounded-[12px] p-[24px] flex flex-col gap-[8px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
          <Input label="Name" name="name" placeholder="Your name" />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
          />
        </div>
        <Input
          label="Subject"
          name="subject"
          placeholder="How can we help?"
        />
        <Textarea
          label="Message"
          name="message"
          placeholder="Write your message..."
        />
        {!!error && <div className="text-red-400 text-[14px]">{error}</div>}
        <div className="flex">
          <Button
            type="submit"
            className="flex-1 !h-[52px] !rounded-[10px]"
            loading={loading}
          >
            Send message
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
