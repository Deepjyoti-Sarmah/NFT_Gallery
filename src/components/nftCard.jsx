export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col my-10 bg-gray-800 p-5 rounded-md ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-gray-800 rounded-b-md  ">
                <div className=" flex flex-col flex-wrap text-md mt-3">
                    <h2 className=" flex flex-col text-md text-gray-100 font-bold mt-3">{nft.title}</h2>
                    {/* <p className="text-gray-200 text-sm font-semibold mb-2">Id: {nft.id.tokenId}</p> */}
                    <p className="text-gray-300 text-sm font-semibold mb-2">{nft.contract.address}</p>
                </div>

                <div className="flex-grow mt-2 flex justify-between items-center text-sm">
                    <p className="text-gray-400 text-sm mb-2">{nft.description}</p>
                </div>
            </div>

        </div>
    )
}