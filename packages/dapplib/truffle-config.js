require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note remember under hunt open foster gather'; 
let testAccounts = [
"0x80b0002d9f81f24b90721b16bd6e5f7e64bf8291a26bd62f9f158b945428f54c",
"0xb1ad719759658eb2b43321c6fa43a3f5c0197725bfd6eefcfc1794b8b529b60b",
"0x1d2df685a61b4325d4c8559eb1a4e607aa12f3bfd5ce2d6b29fae4b612e7667d",
"0x62f17c7b7c4bf14f90e832e23c27054bc91100866357d0c3f10d54cc01d4cf84",
"0x05b2049dd80c5d490189b2f78bd3b1288e94c944f516efb30967f8cff79308c8",
"0x3f2bf5abc20aa18d293c72fbdac429757fe599f626e41229d7082cc0bb3569c4",
"0x814d839722c7ab49f89d0158b55d066878b267de5a4373db3e21f48544082095",
"0x0ad16152ff54ef8598bcce9fc8602c5a3ce65878b87a38d122aedd8728c7d236",
"0x046e9749b090932b26a55cda0996b56d7dd623c2ebd718e19f70bf0403586f0b",
"0x7eae3e86818c0f99333485f90485b8f779f848fbfb0e1ade5d160c09e8a6e219"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

