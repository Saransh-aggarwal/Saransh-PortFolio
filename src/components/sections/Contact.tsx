'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { sendEmailAction } from '@/app/actions';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('message', data.message);

            // Import dynamically to avoid server-on-client issues if any (though usually fine with 'use server')
            // or just import at top. We will import at top.
            const result = await sendEmailAction({ success: false }, formData);

            if (result.success) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                console.error(result.message);
                // Optionally set global error state here if you had one
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="container relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
                            Let's <span className="gradient-text">Collaborate.</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-text-secondary">
                            Have a vision? I'd love to help build it. Send a message
                            and let's start a conversation.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeInUp} className="glass-panel p-8 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-wider text-text-secondary ml-1">
                                        Your Name
                                    </label>
                                    <input
                                        {...register('name')}
                                        className="w-full bg-surface/50 border border-card-border rounded-2xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-all placeholder:text-text-secondary/40"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-xs text-accent mt-1">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-wider text-text-secondary ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        {...register('email')}
                                        className="w-full bg-surface/50 border border-card-border rounded-2xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-all placeholder:text-text-secondary/40"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-xs text-accent mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-wider text-text-secondary ml-1">
                                    Message
                                </label>
                                <textarea
                                    {...register('message')}
                                    rows={6}
                                    className="w-full bg-surface/50 border border-card-border rounded-2xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-all placeholder:text-text-secondary/40 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && <p className="text-xs text-accent mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-premium py-5 text-lg disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <span className="flex items-center gap-3">
                                        Send Message <Send size={20} />
                                    </span>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-primary font-bold">
                                    <CheckCircle size={20} /> Message Sent Successfully!
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />
        </section>
    );
}
