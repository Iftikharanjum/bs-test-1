import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

export default function HeroBanner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Transform Your Career</span>
                    <span className="block text-primary-400">with AI-Powered Learning</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Master in-demand skills with personalized learning paths, expert mentorship, and AI-driven guidance. Join thousands of successful graduates in tech.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <button 
                      onClick={() => navigate('/register')}
                      className="block w-full rounded-md px-5 py-3 bg-primary-500 text-base font-medium text-white shadow hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:px-10"
                    >
                      Start Your Journey
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0">
                  <div className="w-full rounded-lg shadow-xl overflow-hidden">
                    {!isPlaying ? (
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                      >
                        <img
                          className="w-full object-cover"
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                          alt="Learning environment"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircleIcon className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        width="100%"
                        height="400px"
                        playing={isPlaying}
                        controls={true}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}