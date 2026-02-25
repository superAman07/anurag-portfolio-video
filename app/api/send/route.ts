import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_dWsy78JZ_Ey8hFAE1Sg4DWrtfA4d5J6kP');

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'amanvishwa2806@gmail.com',
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error); // Check your terminal for this!
            return NextResponse.json({ error }, { status: 400 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Server Catch Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}