import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_dWsy78JZ_Ey8hFAE1Sg4DWrtfA4d5J6kP');

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'anuragpal63866@gmail.com',
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
