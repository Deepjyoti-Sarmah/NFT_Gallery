import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NFTCard } from './components/nftCard'

function App() {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    const api_key = import.meta.env.VITE_API_KEY
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: 'GET'
    };

    if (!collection.length) {

      const fetchURL = `${baseURL}?owner=${wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
    } else {
      console.log("fetching nfts for collection owned by address");
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
    }

    if (nfts) {
      console.log("nfts:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = import.meta.env.VITE_API_KEY
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
      if (nfts) {
        console.log("NFTs in collection:", nfts);
        setNFTs(nfts.nfts);
      }
    }
  };

  return (
    <>
      <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center py-8 gap-y-3'>
        <div className='flex flex-col w-full justify-center items-center gap-y-2'>
          <input className='px-3 py-3 w-1/3 text-gray-700 placeholder-blueGray-300 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring '
            disabled={fetchForCollection}
            onChange={(e) => { setWalletAddress(e.target.value) }}
            value={wallet}
            type="text" placeholder='Add your wallet address' />
          <input
            className='px-3 py-3 w-1/3 text-gray-700 placeholder-blueGray-300 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring '
            onChange={(e) => { setCollectionAddress(e.target.value) }}
            valu={collection} type="text" placeholder='Add the collection address' />
          <label className='text-gray-100'>
            <input type={"checkbox"}
              className='px-3 py-3 text-gray-600 placeholder-blueGray-300 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-fit'
              onChange={(e) => { setFetchForCollection(e.target.checked) }}
            />
            Fetch for collection
          </label>
          <button className={'disabled:bg-blue-600  text-white bg-blue-500 active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'}
            onClick={
              () => {
                if (fetchForCollection) {
                  fetchNFTsForCollection();
                } else fetchNFTs();
              }
            }
          >Let's go!</button>
        </div>
        <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
          {
            NFTs.length && NFTs.map(nft => {
              return (
                <NFTCard nft={nft}></NFTCard>
              )
            })
          }
        </div>
      </div>
      <footer className='bg-gray-950 w-full pb-4 px-2 py-2 md:px-4'>
        <p className='text-center text-base text-gray-400 font-semibold'>
          Made by {" "}
          <a className="underline text-blue-300 hover:text-blue-500" target="_blank" href="https://github.com/Deepjyoti-Sarmah">
            @Deepjyoti Sarmah
          </a>
        </p>
      </footer>
    </>
  )

}
export default App;
