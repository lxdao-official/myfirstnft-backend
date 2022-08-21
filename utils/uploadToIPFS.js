const { Buffer } = require('buffer');
const { NFTStorage, Blob } = require('nft.storage');
// upload to nft storage
module.exports = async function (imageDataUrl) {
  const nftStorage = new NFTStorage({
    token: process.env.NFT_STORAGE_TOKEN
  });
  const imageData = imageDataUrl.replace(/^data:image\/png;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  const someData = new Blob([imageBuffer]);
  const cid = await nftStorage.storeBlob(someData);

  return "ipfs://" + cid;
};
