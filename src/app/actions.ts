'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ActionState {
    success: boolean;
    message?: string;
    errors?: {
        [K in keyof ContactFormData]?: string[];
    };
}

export async function sendEmailAction(prevState: ActionState, formData: FormData): Promise<ActionState> {
    // 1. Validate input
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your inputs.',
        };
    }

    const { name, email, message } = validatedFields.data;

    // 2. Setup Transporter
    // In a real app, use environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    // For this portfolio, we'll try to use env vars, or fallback/log if specific vars are missing.

    const hasEnvVars = process.env.SMTP_HOST && process.env.SMTP_USER;

    if (!hasEnvVars) {
        if (process.env.NODE_ENV === 'development') {
            console.log('--- EMAIL SIMULATION (Missing Env Vars) ---');
            console.log(`From: ${name} <${email}>`);
            console.log(`Message: ${message}`);
            console.log('-------------------------------------------');

            // Artificial delay to simulate network
            await new Promise(resolve => setTimeout(resolve, 1000));

            return {
                success: true,
                message: 'Email sent successfully (Simulated mode)',
            };
        }
        return {
            success: false,
            message: 'Server configuration error: Missing SMTP settings.',
        };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 3. Send Email
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address must often match the authenticated user
            replyTo: email, // Reply to the person who filled the form
            to: process.env.SMTP_USER, // Send to yourself
            subject: `Portfolio Contact: ${name}`,
            text: message,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2>New Message from Configuration Portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr/>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return {
            success: true,
            message: 'Message sent successfully!',
        };

    } catch (error) {
        console.error('Email sending failed:', error);
        return {
            success: false,
            message: 'Failed to send message. Please try again later.',
        };
    }
}
