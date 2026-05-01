import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Email service configuration error' }, { status: 500 });
    }

    // Attempt to read logo for CID attachment
    let logoBuffer;
    try {
      const logoPath = path.join(process.cwd(), 'public/logo.png');
      logoBuffer = await fs.readFile(logoPath);
    } catch (e) {
      console.error('Logo file not found, sending without logo');
    }

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'pankajunagar007@gmail.com',
      reply_to: email,
      subject: `New Message: ${subject}`,
      attachments: logoBuffer ? [
        {
          filename: 'logo.png',
          content: logoBuffer,
          cid: 'logo'
        }
      ] : [],
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 40px; border: 1px solid #f0f0f0; border-radius: 12px; background-color: #ffffff; color: #1a1a1a;">
          <div style="margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid #f0f0f0;">
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
              <tr>
                <td style="padding-left: 16px; vertical-align: middle;">
                  <div style="font-size: 20px; font-weight: 900; color: #000; letter-spacing: -0.03em; text-transform: uppercase;">
                    Pankaj <span style="color: #038ec7;">Unagar</span>
                  </div>
                  <div style="font-size: 12px; color: #888; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 2px;">
                    Senior Web & Mobile Engineer
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <p style="font-size: 16px; font-weight: 500; margin-bottom: 24px;">Hey Pankaj,</p>
          
          <p style="font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 24px;">
            You have received a new inquiry regarding <strong>"${subject}"</strong> from your portfolio.
          </p>

          <div style="background: #fafafa; padding: 24px; border-radius: 8px; border: 1px solid #f0f0f0; margin-bottom: 32px;">
            <p style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</p>
            <div style="font-size: 15px; line-height: 1.7; color: #222;">
              ${message}
            </div>
          </div>

          <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #038ec7; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 15px; margin-bottom: 32px;">
            Reply to ${name}
          </a>

          <div style="border-top: 1px solid #f0f0f0; padding-top: 24px; color: #888; font-size: 14px;">
            <p style="margin: 0 0 4px 0;">Regards,</p>
            <p style="margin: 0; font-weight: 700; color: #000;">Portfolio System</p>
          </div>
          
          <p style="margin-top: 40px; text-align: center; font-size: 11px; color: #aaa;">
            Sent from your personal portfolio • ${new Date().toLocaleDateString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
