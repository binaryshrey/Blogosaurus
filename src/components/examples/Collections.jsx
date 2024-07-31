import logo from '../../assets/logo.svg';
import dummy1 from '../../assets/dummy1.webp';
import dummy2 from '../../assets/dummy2.webp';
import dummy3 from '../../assets/dummy3.webp';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className=" bg-gray-900">
      <header>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8" src={logo} alt="" />
            </a>
            <h4 className="ml-2 text-white sm:text-2xl">Blogosaurus</h4>
          </div>
        </nav>
      </header>

      <div className="p-8 ">
        <div>
          <div className="mx-auto max-w-2xl py-12 sm:py-12 lg:py-12">
            <div className="text-center font-serif">
              <p className="text-white text-xl font-serif">The Blog</p>
              <p className="text-white text-5xl mt-8 font-serif">Writings from our team</p>
              <p className="text-white text-base font-serif mt-8">The latest industry news, interviews, technologies and resources</p>
            </div>
          </div>
          <Link to="/posts/dynamic-routing">
            <img src={dummy1} alt="dummy" className=" w-screen" />
            <div className="flex justify-between ">
              <div className="mt-8 w-1/3">
                <p className="text-white text-4xl font-semibold font-serif">Dynamic Routing and Static Generation</p>
                <p className="text-white text-xl font-serif mt-4">March 16, 2020</p>
              </div>
              <div className="mt-8 w-2/5">
                <p className="text-white text-base font-serif ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
              </div>
            </div>
          </Link>
          <p className="mt-40 text-white text-6xl font-serif">More Stories</p>
          <div className="mt-8 flex justify-between">
            <div className="mr-12">
              <Link to="/posts/pre-render">
                <img src={dummy2} alt="dummy" className=" w-screen" />
                <p className="text-white text-2xl font-semibold font-serif mt-8">Learn How to Pre-render Pages Using Static Generation</p>
                <p className="text-white text-sm font-serif mt-4">March 16, 2020</p>
                <p className="text-white text-base font-serif mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
              </Link>
            </div>
            <div className="ml-8">
              <Link to="/posts/static-generation">
                <img src={dummy3} alt="dummy" className=" w-screen" />
                <p className="text-white text-2xl font-semibold font-serif mt-8">Preview Mode for Static Generation Using Blogosaurus</p>
                <p className="text-white text-sm font-serif mt-4">March 16, 2020</p>
                <p className="text-white text-base font-serif mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-40 pb-40">
          <hr class="my-2 border-t-2 border-gray-300" />
        </div>
        <p className="text-white text-5xl mt-8 font-serif pb-40 ">Statically Generated with Blogosaurus.</p>
      </div>
    </div>
  );
};

export default Collections;
