import { useForm, SubmitHandler } from "react-hook-form";
import { SearchFormFields } from "../lib/types";
import MandatoryField from "./MandatoryField";

interface Props {
  onSubmit: (fields: SearchFormFields) => void;
}

export default function SearchForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchFormFields>();

  const currencies = ["EUR", "GBP"];
  return (
    <div className="outer-form-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inner-form-content">
          <div className="input-group">
            <label htmlFor="source-currency">
              Source Currency {<MandatoryField />}
            </label>
            <select
              id="source-currency"
              {...register("sourceCurrency", {
                required: "source currency is required"
              })}
            >
              {currencies.map((currency, i) => (
                <option key={`source-currency-key-${i}`} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <div className="form-error">{errors.sourceCurrency?.message}</div>
          </div>

          <div className="input-group">
            <label htmlFor="target-currency">
              Target Currency {<MandatoryField />}
            </label>
            <select
              id="target-currency"
              {...register("targetCurrency", {
                required: "target currency is required"
              })}
            >
              {currencies.map((currency, i) => (
                <option key={`target-currency-key-${i}`} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <div className="form-error">{errors.targetCurrency?.message}</div>
          </div>

          <div className="input-group">
            <label htmlFor="amount">Amount {<MandatoryField />}</label>
            <input
              id="amount"
              type="number"
              {...register("amount", { required: "amount is required" })}
            />
            <div className="form-error">{errors.amount?.message}</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Show Results
          </button>
        </div>
      </form>
    </div>
  );
}
