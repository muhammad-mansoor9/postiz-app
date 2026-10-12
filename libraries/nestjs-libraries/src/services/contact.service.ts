import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailService } from '@gitroom/nestjs-libraries/services/email.service';
import { RecaptchaService } from '@gitroom/nestjs-libraries/services/recaptcha.service';
import { ContactDto } from '@gitroom/nestjs-libraries/dtos/contact/contact.dto';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

@Injectable()
export class ContactService {
  constructor(
    private _emailService: EmailService,
    private _recaptchaService: RecaptchaService
  ) {}

  async sendMessage(body: ContactDto, ip: string) {
    if (!process.env.CONTACT_EMAIL || !this._emailService.hasProvider()) {
      throw new BadRequestException('Contact form is not available');
    }

    await this._recaptchaService.verify(body.recaptchaToken, ip);

    // the subject is used both as the mail header and inside the html body
    await this._emailService.sendEmail(
      process.env.CONTACT_EMAIL,
      `Contact form: ${body.subject.replace(/[\r\n<>]/g, ' ')}`,
      `<p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
       <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
       <p style="white-space: pre-wrap">${escapeHtml(body.message)}</p>`,
      'top',
      body.email
    );

    return { success: true };
  }
}
