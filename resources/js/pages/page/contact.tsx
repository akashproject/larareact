import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import InnerBanner from '@/components/inner-banner';
import { User, Mail, Phone, FileText, MessageSquare, Send, CheckCircle2, MapPin, Clock, Headset } from 'lucide-react';

export default function ContactPage({ contentMain }: { contentMain?: any }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("data", data)
        post('/larareact/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title={contentMain?.title || contentMain?.name || 'Contact Us'} />
            <div className="flex flex-col gap-8 py-4">
                <InnerBanner contentMain={contentMain} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left Side: Empowering Heading & Contact Information */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-[#1a7b7eff] dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
                                    <Headset className="h-3.5 w-3.5" />
                                    Admissions & Support
                                </span>
                                <h2
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a7b7eff] dark:text-teal-400 leading-tight"
                                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                                >
                                    Empowering Students' Employability with Desired Skills
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Have a question or need course guidance? Connect with our expert admissions team today to explore career-focused learning paths.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#1a7b7eff] dark:text-teal-400 shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</h4>
                                        <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</h4>
                                        <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">info@example.com</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Address</h4>
                                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">Kolkata, West Bengal, India</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Working Hours</h4>
                                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">Mon - Sat: 9 AM - 7 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form Card */}
                        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">

                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    Get In Touch
                                </h3>
                                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                                    We would love to hear from you. Send us a message and we will get back to you shortly.
                                </p>
                            </div>

                            {wasSuccessful && (
                                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                    <p className="text-xs sm:text-sm font-medium">
                                        Thank you! Your message has been sent successfully.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Enter your full name"
                                            className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${errors.name
                                                ? 'border-red-500 focus:ring-red-500'
                                                : 'border-slate-300 dark:border-slate-700 focus:border-[#1a7b7eff] focus:ring-[#1a7b7eff]'
                                                } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white transition-colors outline-none focus:ring-2 focus:ring-opacity-20`}
                                        />
                                    </div>
                                    {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Enter your email"
                                                className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${errors.email
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-slate-300 dark:border-slate-700 focus:border-[#1a7b7eff] focus:ring-[#1a7b7eff]'
                                                    } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white transition-colors outline-none focus:ring-2 focus:ring-opacity-20`}
                                            />
                                        </div>
                                        {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                                <Phone className="h-4 w-4" />
                                            </div>
                                            <input
                                                type="text"
                                                id="phone"
                                                required
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                placeholder="Enter phone number"
                                                className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${errors.phone
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-slate-300 dark:border-slate-700 focus:border-[#1a7b7eff] focus:ring-[#1a7b7eff]'
                                                    } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white transition-colors outline-none focus:ring-2 focus:ring-opacity-20`}
                                            />
                                        </div>
                                        {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <FileText className="h-4 w-4" />
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            placeholder="Enter subject"
                                            className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${errors.subject
                                                ? 'border-red-500 focus:ring-red-500'
                                                : 'border-slate-300 dark:border-slate-700 focus:border-[#1a7b7eff] focus:ring-[#1a7b7eff]'
                                                } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white transition-colors outline-none focus:ring-2 focus:ring-opacity-20`}
                                        />
                                    </div>
                                    {errors.subject && <p className="mt-1 text-xs text-red-600 font-medium">{errors.subject}</p>}
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3.5 left-3.5 text-slate-400 pointer-events-none">
                                            <MessageSquare className="h-4 w-4" />
                                        </div>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            placeholder="Write your message..."
                                            className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${errors.message
                                                ? 'border-red-500 focus:ring-red-500'
                                                : 'border-slate-300 dark:border-slate-700 focus:border-[#1a7b7eff] focus:ring-[#1a7b7eff]'
                                                } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white transition-colors outline-none focus:ring-2 focus:ring-opacity-20`}
                                        />
                                    </div>
                                    {errors.message && <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a7b7eff] hover:bg-[#156467ff] active:bg-[#104e50ff] text-white px-6 py-3.5 text-base font-semibold shadow-md transition-all duration-150 cursor-pointer disabled:opacity-50"
                                    >
                                        {processing ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
