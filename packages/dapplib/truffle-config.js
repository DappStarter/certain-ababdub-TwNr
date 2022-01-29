require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth machine equip give casual flat giggle'; 
let testAccounts = [
"0xc335fda239c7dd605dc6b64f9605f1145c1a7eefd23e7e299b56124d0ce2fadd",
"0xf5c8b3d9de19318982658edfca4b0af262168c92398610069ddd55c29562861e",
"0x288e388aa7a4b73d605bc20923d532296de11a0e79f5fd0dc57fb4ad96ff783f",
"0x896b0fdb42a8d4a821d31794355cdfd47d153436720b170c03c4b4d22c97e741",
"0x61cf4fdad006cc456454597a0e7bef4df5265a0c510c938fdfd15bd098de9cdd",
"0x0b541392e110e6537472749990e5e7a9db7fb3d520449a3df4797134cd658565",
"0xcbffc31dbddf2a8e205562a33663575ef8cb1b9d8624fbaf7e347f4912b64046",
"0x241c2404c02e6ff84124c88464fef857ec83d4d328c79d11572dd4dd2b13b5fa",
"0x2411441faa39d843308f96332015064fd04da66e62cfc8e8d22c13e3aa218795",
"0xfd371c69b7998d985b3f17ead595f1ef67ee34eb65ce1d5d10c927a5b37135d1"
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

