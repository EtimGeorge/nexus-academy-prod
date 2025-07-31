// /src/services/cryptoWallets.js

// This file centralizes the cryptocurrency wallet addresses and network information.
// This data is static for now but could be fetched from a backend in a real application.

export const companyWallets = {
  btc: {
    name: "Bitcoin (BTC)",
    symbol: "BTC",
    networks: [
      {
        name: "Bitcoin Network",
        value: "bitcoin",
        address: "bc1qtuhgz4ays8w5l3z3ynj7lk7e5qumn5hv5ga6n5",
      },
      {
        name: "BRC20",
        value: "brc20",
        address: "1N6hXVAkAhouaFv6eLvvdSg6pDfH8YAfBk",
      },
      {
        name: "BNB Smart Chain (BEP20)",
        value: "bnb smart chain",
        address: "0x73aB257AbD916beCd67a062eD973211335635cb1",
      },
    ],
  },
  eth: {
    name: "Ethereum (ETH)",
    symbol: "ETH",
    networks: [
      {
        name: "ERC20",
        value: "erc20",
        address: "0xAbc123Def456Ghi789Jkl012Mno345Pqr678Stu901",
      },
    ],
  },
  usdt: {
    name: "Tether (USDT)",
    symbol: "USDT",
    networks: [
      {
        name: "ERC20",
        value: "erc20",
        address: "0x306381B58Ea94dA4D515E93b3663dE66355Ec943",
      },
      {
        name: "TRC20",
        value: "trc20",
        address: "TLWojaboTmaP2m42X7BU7czC6x8bsBwNFR",
      },
      {
        name: "BEP20 (BSC)",
        value: "bep20",
        address: "0x73aB257AbD916beCd67a062eD973211335635cb1",
      },
    ],
  },
  bnb: {
    name: "Binance Coin (BNB)",
    symbol: "BNB",
    networks: [
      {
        name: "BEP20 (BSC)",
        value: "bep20",
        address: "0x306381B58Ea94dA4D515E93b3663dE66355Ec943",
      },
    ],
  },
  sol: {
    name: "Solana (SOL)",
    symbol: "SOL",
    networks: [
      {
        name: "Solana",
        value: "solana",
        address: "ANSqJCWayckF6bEod2Y74w9WnKj6Nszz6yqFW3Brz4zC",
      },
    ],
  },
  ada: {
    name: "Cardano (ADA)",
    symbol: "ADA",
    networks: [
      {
        name: "Cardano",
        value: "cardano",
        address:
          "addr1q99qj445fhv70rlxj6eaw6ld4e74hea92m8v3dapa88znp9wf3hlenhktwe5yflhum9dy47n0hldm078s45pcxxptzpsh0tntm",
      },
    ],
  },
  xrp: {
    name: "Ripple (XRP)",
    symbol: "XRP",
    networks: [
      {
        name: "XRP",
        value: "xrp",
        address: "rHcFoo6a9qT5NHiVn1THQRhsEGcxtYCV4d",
        destinationTagRequired: true,
        tag: "340798187",
      },
    ],
  },
  pi: {
    name: "Pi Network (PI)",
    symbol: "PI",
    networks: [
      {
        name: "PI Network",
        value: "pi",
        address:
          "MBC6NRTTQLRCABQHIR5J4R4YDJWFWRAO4ZRQIM2SVI5GSIZ2HZ42QAAAAAABIUBK5PH24",
      },
    ],
  },
  ice: {
    name: "Ice Network (ICE)",
    symbol: "ICE",
    networks: [
      {
        name: "BNB Smart Chain (BEP20)",
        value: "bnb smart chain",
        address: "0x73aB257AbD916beCd67a062eD973211335635cb1",
      },
    ],
  },
};
