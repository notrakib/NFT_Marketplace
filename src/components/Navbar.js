const Navbar = () => {
  return (
    <div className="h-24 border-b-2">
      <div className="flex flex-row h-24 items-center justify-around ml-32 mr-32">
        <h1 className="w-1/6 antialiased font-mono text-start text-xl text-custom-violet font-extrabold tracking-tighter">
          NFTERS
        </h1>

        <div className="w-2/6 flex flex-row h-24 items-center">
          <h1 className="text-xs antialiased text-center font-bold ml-8 hover:scale-125 transition duration-200 ease-in-out">
            Marketplace
          </h1>
          <h1 className="text-xs antialiased text-center font-bold ml-8 hover:scale-125 transition duration-200 ease-in-out">
            Resource
          </h1>
          <h1 className="text-xs antialiased text-center font-bold ml-8 hover:scale-125 transition duration-200 ease-in-out">
            About
          </h1>
        </div>

        <div className="w-3/6 flex flex-row h-24 items-center justify-end">
          <input
            className="w-34 h-10 text-xs border-2 pl-4 rounded-full ml-8"
            placeholder="Search"
          ></input>
          <button className="w-28 h-10 ml-8 text-xs rounded-full bg-custom-violet text-white">
            Upload
          </button>
          <button className="w-36 h-10 ml-8 text-xs font-bold rounded-full border-2 border-custom-violet text-custom-violet">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
