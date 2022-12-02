const SignUpPage = () => {
  return (
    <form className="pt-8 pb-8 flex flex-col bg-white max-w-xl mx-auto pl-8 pr-8 rounded-lg shadow-sm h-96 border border-gray-200">
      <h1 className="text-2xl font-bold mb-8 text-center">Sign In</h1>
      <label className="flex flex-col">
        <span className="text-sm font-medium mb-1">Username</span>
        <input
          type="text"
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      <label className="mt-5">
        <span className="text-sm font-medium mb-1 block">Password</span>
        <input
          type="password"
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 shadow hover:opacity-80 mt-4 rounded-lg w-fit"
      >
        Sign in
      </button>
      {/* {error && <p>{error.message}</p>} */}
    </form>
  );
};

export default SignUpPage;
