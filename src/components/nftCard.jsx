// export const NFTCard = ({ nft }) => {

//     return (
//         // <div className="w-1/4 flex flex-col my-10 bg-gray-800 p-5 rounded-md ">
//         //     <div className="rounded-md">
//         //         <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
//         //     </div>
//         //     <div className="flex flex-col y-gap-2 px-2 py-3 bg-gray-800 rounded-b-md ">
//         //         <div className=" flex flex-wrap justify-between items-center text-md mt-3">
//         //             <h2 className=" flex text-md text-gray-100 font-bold mt-3">{nft.title}</h2>
//         //             <p className="flex text-gray-200 text-sm font-semibold mb-2">Id: {nft.id.tokenId}</p>
//         //             <p className="flex justify-between items-center text-gray-300 text-sm font-semibold mb-2">{nft.contract.address}</p>
//         //         </div>

//         //         <div className="flex flex-grow mt-2 justify-between items-center text-sm">
//         //             <p className="text-gray-400 text-sm mb-2">{nft.description}</p>
//         //         </div>
//         //     </div>

//         // </div>
//         <div class="max-w-sm my-10 p-5 rounded overflow-hidden shadow-lg bg-gray-900">
//             <img className="w-full rounded-md" src={nft.media[0].gateway} />
//             <div className="px-6 py-4 rounded-md">
//                 <div className="font-bold text-xl mb-2">{nft.title}</div>
//                 {/* <div className="font-semibold text-sm mb-2">Id: {nft.id.tokenId}</div> */}
//                 <div className="font-semibold text-sm  text-gray-200 mb-2">{nft.contract.address}</div>
//                 <p className="text-gray-400 text-base">
//                     {nft.description}
//                 </p>
//             </div>
//         </div>
//     );
// }

export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600">Id: {nft.id.tokenId}</p>
                    <p className="text-gray-600" >{nft.contract.address}</p>
                </div>

                <div className="flex-grow mt-2">
                    <p className="text-gray-600">{nft.description}</p>
                </div>
            </div>

        </div>
    )
}
