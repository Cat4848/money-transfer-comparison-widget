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

interface Provider {
  id: number;
  name: string;
  type: string;
  alias: string;
}
