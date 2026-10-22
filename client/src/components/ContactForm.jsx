import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Button from './Button';
import { sendContactMessage } from '../services/api';

const initialValues = { name: '', email: '', phone: '', message: '' };

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30';

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Please enter your name';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Please enter a valid email';
  if (!/^[+]?[\d\s-]{7,15}$/.test(v.phone)) errors.phone = 'Please enter a valid phone number';
  if (!v.message.trim()) errors.message = 'Please write a message';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setLoading(true);
    try {
      const data = await sendContactMessage(values);
      setStatus({ type: 'success', text: data.message });
      setValues(initialValues);
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea id={name} name={name} rows={5} value={values[name]} onChange={handleChange} className={fieldClass} {...props.attrs} />
      ) : (
        <input id={name} name={name} value={values[name]} onChange={handleChange} className={fieldClass} {...props.attrs} />
      )}
      {errors[name] && <p className="mt-1.5 text-xs text-rose-400">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="glass space-y-5 p-6 sm:p-8">
      {field('name', 'Your Name', { attrs: { type: 'text', placeholder: 'Enter your name', autoComplete: 'name' } })}
      {field('email', 'Email Address', { attrs: { type: 'email', placeholder: 'you@example.com', autoComplete: 'email' } })}
      {field('phone', 'Phone Number', { attrs: { type: 'tel', placeholder: '+91 98765 43210', autoComplete: 'tel' } })}
      {field('message', 'Message', { as: 'textarea', attrs: { placeholder: 'How can I help you?' } })}

      <Button type="submit" icon={FaPaperPlane} disabled={loading} className="w-full">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

      {status && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${
            status.type === 'success' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'
          }`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
