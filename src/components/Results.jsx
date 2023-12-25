import { formatCurrency } from '../util/formatter';

export default function Results() {
  return (
    <div id="results">
      <ol className="results-list">
        <li>{formatCurrency('USD').format(1000)}</li>
      </ol>
    </div>
  );
}
