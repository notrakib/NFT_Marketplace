import { useEffect, useState } from "react";

const Detail = () => {
  const [loading, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <></>}
      {!loading && (
        <div className="flex flex-row md:flex-col mt-16 ml-32 mr-32">
          <div className="flex flex-col w-1/2 md:w-full">
            <h1 className="font-extrabold text-3xl tracking-tighter mb-4">
              DISCOVER, AND COLLECT DIGITAL ART NFTS
            </h1>
            <h1 className="w-3/4 text-sm tracking-tighter mb-8">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </h1>
            <button className="w-36 h-12 mb-8 text-sm rounded-full bg-custom-violet text-white">
              Explore Now
            </button>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <h1 className="font-extrabold text-3xl tracking-tighter mr-4">
                  98k+
                </h1>
                <h1 className="text-sm tracking-tighter">Artwork</h1>
              </div>

              <div className="flex flex-col">
                <h1 className="font-extrabold text-3xl tracking-tighter mr-4">
                  12k+
                </h1>
                <h1 className="text-sm tracking-tighter">Auction</h1>
              </div>

              <div className="flex flex-col">
                <h1 className="font-extrabold text-3xl tracking-tighter">
                  15k+
                </h1>
                <h1 className="text-sm tracking-tighter">Artist</h1>
              </div>
            </div>
          </div>

          <div className="h-full w-1/2 md:w-full md:mt-12">
            <div className="h-80 rounded-3xl w-72 ml-auto mr-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
              <h1 className="font-semibold text-white text-xl tracking-tighter mb-4">
                Abstr Gradient NFT
              </h1>
              <div className="flex flex-row items-center">
                <h1 className="h-8 w-8 bg-white rounded-full"></h1>
                <h1 className="text-center ml-4 text-white text-sm">
                  Arkhan17
                </h1>
              </div>

              <div className="flex flex-row justify-between items-center pl-4 pr-4 h-16 rounded-xl w-9/10 ml-auto mr-auto mt-36 bg-slate-500 mix-blend-overlay">
                <div className="flex flex-col">
                  <h1 className="text-xs justify-around text-white">
                    Current Bid
                  </h1>
                  <h1 className="text-sm justify-around text-white">
                    0.25 ETH
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs justify-around text-white">Ends in</h1>
                  <h1 className="text-sm justify-around text-white">
                    12h 43m 42s
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
