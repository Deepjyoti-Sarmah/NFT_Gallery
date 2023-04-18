export const NFTCard = ({ nft }) => {

    return (
        <div className="max-w-sm my-10 p-5 rounded overflow-hidden shadow-lg bg-gray-900">
            <img className="w-full rounded-md" src={nft.media[0].gateway} />
            <div className="px-6 py-4 rounded-md">
                <div className="font-bold text-xl text-gray-100 mb-2">{nft.title}</div>
                {/* <div className="font-semibold text-sm mb-2">Id: {nft.id.tokenId}</div> */}
                <div className="font-semibold text-sm  text-gray-200 mb-2">{nft.contract.address}</div>
                <p className="text-gray-400 text-base">
                    {nft.description}
                </p>
            </div>
        </div>
    );
}
