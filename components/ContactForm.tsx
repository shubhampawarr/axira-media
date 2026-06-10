'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Social Media Management',
  'Meta Ads',
  'Google Ads',
  'SEO Optimization',
  'Website Development',
  'Branding & Design',
  'Google Business Listing',
  'Complete Digital Marketing',
  'Not Sure Yet',
];

const budgetOptions = [
  'Below ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  'Above ₹2,50,000',
  'Need guidance',
];

type FormState = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  function updateField(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send inquiry.');
      }

      setStatus({
        type: 'success',
        message:
          'Inquiry sent successfully. Axira Media will get back to you soon.',
      });

      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    'mt-1.5 w-full rounded-2xl border border-white/10 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]';

  const labelClass = 'text-[13px] font-bold text-slate-200';

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-[#93c5fd]">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={updateField}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name <span className="text-[#93c5fd]">*</span>
          </label>

          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={formData.businessName}
            onChange={updateField}
            placeholder="Your business name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp <span className="text-[#93c5fd]">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={updateField}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={updateField}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Needed <span className="text-[#93c5fd]">*</span>
          </label>

          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={updateField}
            className={`${inputClass} [&>option]:bg-[#071a3d] [&>option]:text-white`}
          >
            <option value="" disabled>
              Select a service
            </option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range <span className="text-[#93c5fd]">*</span>
          </label>

          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={updateField}
            className={`${inputClass} [&>option]:bg-[#071a3d] [&>option]:text-white`}
          >
            <option value="" disabled>
              Select budget range
            </option>

            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project Details <span className="text-[#93c5fd]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={updateField}
          placeholder="Tell us about your business, goals, target audience, location and what you want to improve."
          className="mt-1.5 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#93c5fd]"
        />
      </div>

      {status && (
        <div
          className={`rounded-2xl border px-3.5 py-2.5 text-sm font-semibold ${
            status.type === 'success'
              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
              : 'border-red-400/30 bg-red-400/10 text-red-200'
          }`}
        >
          <div className="flex items-start gap-2">
            {status.type === 'success' && (
              <CheckCircle2 className="mt-0.5 shrink-0" size={16} />
            )}

            <span>{status.message}</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-[#071a3d] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          <>
            Send Inquiry <ArrowRight size={17} />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Fields marked with * are required.
      </p>
    </form>
  );
}