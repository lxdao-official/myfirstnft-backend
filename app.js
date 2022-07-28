const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const createImage = require('./utils/createImage');
const uploadToIPFS = require('./utils/uploadToIPFS');
const generateSignature = require('./utils/generateSignature');

dotenv.config();
if (
  !process.env.SIGNER_WALLET_PRIVATE_KEY ||
  !process.env.PINATA_API_KEY ||
  !process.env.PINATA_SECRET_API_KEY ||
  !process.env.INFURA_PROJECT_ID
) {
  console.error(
    'Please set SIGNER_WALLET_PRIVATE_KEY and INFURA_PROJECT_ID environment variables.'
  );
  process.exit(1);
}

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/mint', async (req, res) => {
  // TODO add request JSON validation
  const pfp = req.body.pfp;
  const enableLaser = req.body.enableLaser;

  try {
    const imageDataUrl = await createImage(pfp, enableLaser);
    const imageIPFSURI = await uploadToIPFS(imageDataUrl);
    const signature = await generateSignature(imageIPFSURI);

    res.json({
      success: true,
      image: imageDataUrl,
      imageIPFSURI: imageIPFSURI,
      signature: signature,
    });
  } catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
});

app.listen(process.env.PORT || 3100, () => console.log('Server is running...'));
