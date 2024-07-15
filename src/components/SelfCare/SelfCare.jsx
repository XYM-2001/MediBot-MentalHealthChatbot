import React from 'react';
import { FiClock } from 'react-icons/fi';

const SelfCare = () => {
  const resources = [
    {
      title: 'Mindfulness for Beginners',
      time: '10 min read',
      subtitle: 'Introduction to Mindfulness',
      image: '/public/water drop.jpg',
      link: 'https://www.mindful.org/meditation/mindfulness-getting-started/',
    },
    {
      title: 'Meditation Techniques',
      time: '20 min video',
      subtitle: 'Learn Meditation',
      image: '/public/meditate.jpg',
      link: 'https://www.youtube.com/watch?v=inpok4MKVLM',
    },
    {
      title: 'Nature Scenery',
      time: '5 min view',
      subtitle: 'Relax with Nature',
      image:  '/public/nature.jpg',
      link: 'https://www.youtube.com/watch?v=lP6M8hIo5ok',
    },
    {
      title: 'Stress Management',
      time: '15 min read',
      subtitle: 'Managing Stress Effectively',
      image: '/public/stress.jpg',
      link: 'https://www.helpguide.org/articles/stress/stress-management.htm',
    },
    {
      title: 'Journaling for Mental Health',
      time: '8 min read',
      subtitle: 'Benefits of Journaling',
      image:  '/public/mental.jpg',
      link: 'https://www.verywellmind.com/the-benefits-of-journaling-for-stress-management-3144611',
    },
    {
      title: 'Yoga for Beginners',
      time: '30 min video',
      subtitle: 'Basic Yoga Poses',
      image: '/public/yoga.jpg',
      link: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
    },
    {
      title: 'Healthy Eating Habits',
      time: '12 min read',
      subtitle: 'Tips for a Balanced Diet',
      image: '/public/healthy_eating.jpg',
      link: 'https://www.healthline.com/nutrition/healthy-eating-tips',
    },
    {
      title: 'Breathing Exercises',
      time: '5 min video',
      subtitle: 'Calm Your Mind with Breathing',
      image: '/public/breathing.jpg',
      link: 'https://www.youtube.com/watch?v=sJ04nsiz_M0',
    },
    {
      title: 'Positive Thinking',
      time: '10 min read',
      subtitle: 'The Power of Positive Thinking',
      image: '/public/positive_thinking.jpg',
      link: 'https://www.success.com/7-practical-tips-to-achieve-a-positive-mindset/',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-300 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">Self-Care Resources</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={resource.image} alt={resource.title} className="rounded-md mb-4 h-40 object-cover" />
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{resource.title}</h2>
    <div className="flex items-center text-gray-600 mb-2">
      <FiClock className="mr-2" />
      <span>{resource.time}</span>
    </div>
    <h3 className="text-gray-700 mb-4">{resource.subtitle}</h3>
    <button
      onClick={() => window.open(resource.link, '_blank')}
      className="mt-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Start
    </button>
  </div>
);

export default SelfCare;
