import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class RecaptchaService {
  async verify(token: string | undefined, ip: string) {
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      return;
    }

    if (!token) {
      throw new BadRequestException('Captcha verification failed');
    }

    const result = await (
      await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
          remoteip: ip,
        }),
      })
    ).json();

    if (!result?.success) {
      throw new BadRequestException('Captcha verification failed');
    }
  }
}
