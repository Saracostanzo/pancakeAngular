export interface Tokens {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}

export interface FetchData {
  name?: string;
  timestamp?: string;
  version?: {
    major?: number;
    minor?: number;
    patch?: number;
  };
  logoURI?: string;
  keywords?: [string, string];
  tokens?: [
    {
      name: string;
      symbol: string;
      address: string;
      chainId: number;
      decimals: number;
      logoURI: string;
    }
  ];
}
