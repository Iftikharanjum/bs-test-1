import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from Our Graduates
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <p className="text-lg leading-8 text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-50"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                />
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}