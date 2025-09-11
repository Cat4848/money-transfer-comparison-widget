export interface Quote {
  amount: number;
  amountType: "SEND" | "RECEIVE";
  providerCountry: string | null;
  providerTypes: string[];
  providers: Provider[];
  sourceCountry: string | null;
  sourceCurrency: string | null;
  targetCountry: string | null;
  targetCurrency: string | null;
}

export interface Provider {
  id: number;
  name: string;
  type: string;
  alias: string;
  quotes: ProviderQuote[];
}

interface ProviderQuote {
  deliveryEstimation: {
    providerGivesEstimate: boolean;
    duration: { min: string | null; max: string | null };
  };
  fee: number;
  rate: number;
  receivedAmount: number;
}

export interface SearchFormFields {
  sourceCurrency: string;
  targetCurrency: string;
  amount: number;
}
