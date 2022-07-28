# My First NFT Backend

This is the MyFirstNFT Backend project, used for generating NFT images and upload to IPFS. We create an independent API due to vercel doesn't support canvas well.

MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, NFT, and security. Buidl in [LXDAO](https://lxdao.io/).

- MyFirstNFT Website: <https://myfirstnft.info>
- MyFirstNFT Twitter: <https://twitter.com/mfnft_official>
- LXDAO Website: <https://lxdao.io/>
- LXDAO Forum: <https://forum.lxdao.io/c/projects/001-mfnft/14>
- LXDAO Discord: <https://discord.lxdao.io>
- LXDAO Twitter: <https://twitter.com/LXDAO_Official>

As it is a public goods, all of the source code are opened:

- Main Website: <https://github.com/lxdao-official/myfirstnft-frontend>
- Backend API: <https://github.com/lxdao-official/myfirstnft-backend>
- NFT Contract: <https://github.com/lxdao-official/myfirstnft-contract>

Enjoy!

## Start the app

Get the code first:

```
git clone https://github.com/lxdao-official/myfirstnft-backend.git
cd myfirstnft-backend
```

Copy `.env.sample` and rename it to `.env` and put data in it, then:

```
npm i
node app.js
```

Open <http://localhost:3100/> and check if you can see "Hello World!" or not.

## `.env` explanation

- `SIGNER_WALLET_PRIVATE_KEY` is a wallet private key, used for generating signature and pass to contract to verify. It is recommended to create a new empty wallet.
- `INFURA_PROJECT_ID` is the project id in the `infura` service, you can get from https://infura.io.
- `PINATA_API_KEY` and `PINATA_SECRET_API_KEY` is used for uploading images to IPFS through Pinata, you can get from https://www.pinata.cloud.

Example:

```
SIGNER_WALLET_PRIVATE_KEY=xxx
INFURA_PROJECT_ID=xxx
PINATA_API_KEY=xxx
PINATA_SECRET_API_KEY=xxx
```

## Common questions

### Cannot install canvas?

If you get the npm install error about canvas, you can resolve it refer to https://github.com/Automattic/node-canvas/issues/1684

## What is LXDAO?

LXDAO is an R&D-focused DAO in Web3. Our mission is: To bring together buidlers to buidl and maintain valuable projects for Web3, in a sustainable manner.

<a target="_blank" href="https://lxdao.io/"><img alt="Buidl in LXDAO" src="public/buildinlxdao.png" width="180" /></a>
