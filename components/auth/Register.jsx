'use client';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { z } from 'zod';
import axios from 'axios';

export function Register() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [errors, setErrors] = useState({});

  const registerStep1Schema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    day: z.number().min(1, 'Select a valid day').max(31, 'Select a valid day'),
    month: z
      .number()
      .min(1, 'Select a valid month')
      .max(12, 'Select a valid month'),
    year: z
      .number()
      .min(1900, 'Select a valid year')
      .max(2025, 'Select a valid year'),
  });

  const registerStep2Schema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

  const handleNext = () => {
    try {
      registerStep1Schema.parse({
        name,
        email,
        day,
        month,
        year,
      });

      setErrors({});
      setStep(2);
    } catch (err) {
      console.log(err);
      if (err instanceof z.ZodError) {
        const newErrors = {};
        for (const issue of err.issues) {
          newErrors[issue.path[0]] = issue.message;
        }
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      registerStep2Schema.parse({ password });

      const response = await axios.post('/api/register', {
        name,
        email,
        password,
        dateOfBirth: `${year}-${month}-${day}`,
      });

      window.location.href = '/home';
    } catch (err) {
      console.log(err);
      if (err instanceof z.ZodError) {
        const newErrors = {};
        newErrors.password = err.issues[0].message;
        setErrors(newErrors);
      } else {
        console.error('Submit error:', err);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="mt-2 w-full rounded-2xl border-2 border-gray-500 bg-black p-2 text-center font-semibold text-white hover:bg-gray-700"
      >
        Create account
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {step === 1 && (
              <div className="flex min-h-[400px] flex-col items-center">
                <Logo />
                <h2 className="mt-4 text-2xl font-semibold">
                  Create your account
                </h2>

                <input
                  className="mt-4 w-full rounded-lg border p-2"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}

                <input
                  className="mt-3 w-full rounded-lg border p-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}

                <p className="mt-4 w-full text-left text-sm text-gray-600">
                  <span className="font-semibold">Date of birth</span>
                  <br />
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business.
                </p>

                <div className="mt-3 grid w-full grid-cols-3 gap-2">
                  <select
                    className="rounded-lg border p-2"
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }).map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className="rounded-lg border p-2"
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    className="rounded-lg border p-2"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 80 }).map((_, i) => (
                      <option key={i} value={2025 - i}>
                        {2025 - i}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.day || errors.month || errors.year) && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.day || errors.month || errors.year}
                  </p>
                )}

                <button
                  onClick={handleNext}
                  className="mt-6 w-full rounded-2xl bg-[#4C9EEB] p-2 text-center font-semibold text-white hover:bg-gray-700"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="flex min-h-[400px] flex-col items-center">
                <div className="relative mb-4 flex w-full justify-center">
                  <button
                    onClick={() => setStep(1)}
                    className="absolute left-0 p-1 text-gray-500 hover:text-gray-700"
                  >
                    <ArrowLeftIcon className="h-6 w-6" />
                  </button>
                  <Logo />
                </div>
                <h2 className="mb-4 text-2xl font-semibold">Create password</h2>
                <input
                  className="w-full rounded-lg border p-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}

                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full rounded-2xl bg-[#4C9EEB] p-2 text-center font-semibold text-white hover:bg-gray-700"
                >
                  Create account
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
