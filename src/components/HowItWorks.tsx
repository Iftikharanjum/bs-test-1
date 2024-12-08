import { motion } from 'framer-motion';
import { 
  ClipboardDocumentCheckIcon, 
  MapIcon, 
  ComputerDesktopIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';
import { steps } from '../data/content';

const iconMap = {
  ClipboardDocumentCheckIcon,
  MapIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
};

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey to Success
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-0 right-0 hidden h-24 w-32 lg:block">
                      <div className="h-full w-full transform">
                        <div className="h-0.5 w-full bg-gray-200 mt-6"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}