const NotFoundPage = () => {
  return (
    <div className="flex min-h-dvh flex-col justify-between bg-gradient-to-br from-[#121212] to-[#0C0E10] text-white">
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-6xl font-bold">404</h1>
      </div>
      <div className="flex flex-col items-center mb-4">
        <p className="text-xl">Real men test in production</p>
        <p className="mt-2">
          You might want to check the URL or return to the homepage.
        </p>
        <a
          href="/"
          className="mt-4 px-4 py-2 bg-[#ED4245] text-white rounded hover:bg-[#C72A2A] transition duration-300"
          data-umami-event="went-to-homepage-from404"

        >
          Go to Homepage
        </a>
      </div>
      <footer className="p-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
