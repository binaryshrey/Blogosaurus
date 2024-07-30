import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Boost your productivity.</h4>
            <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Start using our app today.</h4>
            <p className="mt-6 text-lg leading-8 text-gray-600">Instantly write and share your thoughts.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/login" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
