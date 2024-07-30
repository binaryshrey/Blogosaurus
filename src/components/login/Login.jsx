import logo from '../../assets/logo.svg';
import login from '../../assets/login.svg';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { UserAuth } from '../../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { googleSignIn, githubSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await githubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (user != null) {
      //   saveUserDataIfNewUser(user);
      localStorage.setItem('email', JSON.stringify(user.email));
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
      <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <svg viewBox="0 0 1108 632" aria-hidden="true" className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
        <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fillOpacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z" />
        <defs>
          <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="h-screen flex flex-col">
        <div className="flex-none">
          <div className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <img className="h-8" src={logo} alt="logo" />
                </a>
                <h4 className="ml-2 text-white sm:text-2xl">Blogosaurus</h4>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex-1 h-screen flex flex-col">
          <div className="relative isolate px-6 ">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-44">
              <div className="text-center">
                <div className="flex-1 h-screen flex flex-col">
                  <div className="flex items-center justify-center flex-col mt-8">
                    <img src={login} alt="Login" />
                    <p className=" text-2xl mb-12 mt-4 text-white">Log into your account.</p>
                  </div>

                  <div className=" flex flex-col items-center justify-center p-8 space-y-2 items-center  ">
                    <button onClick={handleGoogleSignIn} type="button" className="text-black bg-white focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center border">
                      <img src={google} alt="Google" className="h-6 w-6 mr-4" />
                      Sign in with Google
                    </button>

                    <button onClick={handleGithubSignIn} type="button" className="text-black bg-white focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center border">
                      <img src={github} alt="github" className="h-6 w-6 mr-4" />
                      Sign in with Github
                    </button>
                  </div>

                  <div className="m-12 flex  justify-center">
                    <p className="text-white">
                      Don't have an account?{' '}
                      <Link to="/signup">
                        <span className="text-white">Create one.</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
