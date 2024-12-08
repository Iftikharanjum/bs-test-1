import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { RegistrationFormData } from '../types';

const schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  linkedIn: z.string().url('Invalid LinkedIn URL'),
  experience: z.string(),
  interests: z.array(z.string()).min(1, 'Select at least one interest'),
  background: z.string().min(50, 'Please provide more details about your background'),
});

const interests = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'AI/ML',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
];

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Start Your Learning Journey</h2>
          <p className="mt-2 text-gray-600">Fill out the form below to begin your transformation</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('firstName')}
                placeholder="Enter your first name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('lastName')}
                placeholder="Enter your last name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="your.email@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register('phone')}
              placeholder="+1 (555) 000-0000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile URL <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">linkedin.com/in/</span>
              </div>
              <input
                type="url"
                {...register('linkedIn')}
                placeholder="your-profile"
                className="block w-full pl-32 rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Example: https://linkedin.com/in/your-profile</p>
            {errors.linkedIn && (
              <p className="mt-1 text-sm text-red-600">{errors.linkedIn.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <select
              {...register('experience')}
              defaultValue=""
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="" disabled>Select your experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Areas of Interest <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">Select all that apply</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    value={interest}
                    {...register('interests')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">{interest}</label>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="mt-1 text-sm text-red-600">{errors.interests.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="background" className="block text-sm font-medium text-gray-700">
              Professional Background <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('background')}
              rows={4}
              placeholder="Tell us about your current role, relevant experience, and what you hope to achieve through this program..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-gray-400"
            />
            <p className="mt-1 text-xs text-gray-500">Minimum 50 characters required</p>
            {errors.background && (
              <p className="mt-1 text-sm text-red-600">{errors.background.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}