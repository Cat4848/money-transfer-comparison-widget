import { useQuote } from "../hooks/useQuote";
import Option from "./Option";

interface Props {
  searchString: string;
}

export default function Quote({ searchString }: Props) {
  const { quote, loading, error } = useQuote(searchString);

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {quote &&
        quote.providers.map((provider) => (
          <Option key={provider.id} provider={provider} />
        ))}
    </div>
  );
}
