import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
};

function cleanValue(value: unknown) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = cleanValue(body.name);
    const businessName = cleanValue(body.businessName);
    const phone = cleanValue(body.phone);
    const email = cleanValue(body.email);
    const service = cleanValue(body.service);
    const budget = cleanValue(body.budget);
    const message = cleanValue(body.message);

    if (!name || !businessName || !phone || !service || !budget || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill all required fields.',
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. RESEND_API_KEY is missing.',
        },
        { status: 500 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #071a3d; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New Inquiry from Axira Media Website</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Business Name:</td>
            <td style="padding: 8px 0;">${businessName}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email || 'Not provided'}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Service Needed:</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>

          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Budget Range:</td>
            <td style="padding: 8px 0;">${budget}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <h3 style="margin-bottom: 8px;">Project Details</h3>
          <p style="white-space: pre-line; background: #f4f7fb; padding: 16px; border-radius: 12px;">
            ${message}
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Axira Media Website <onboarding@resend.dev>',
      to: ['shubhampawar.temporary@gmail.com'],
      subject: `New Inquiry: ${businessName} - ${service}`,
      replyTo: email || undefined,
      html: emailHtml,
    });

    if (error) {
      console.error('RESEND_EMAIL_ERROR:', error);

      return NextResponse.json(
        {
          success: false,
          message:
            typeof error === 'object' && error !== null && 'message' in error
              ? String(error.message)
              : 'Failed to send inquiry. Please try again.',
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully.',
      data,
    });
  } catch (error) {
    console.error('CONTACT_API_ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}