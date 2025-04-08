import { MortgageCalculator } from "@/components/mortgageCalculator";
import { Results } from "@/components/results";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-blue-950">
      <MortgageCalculator />
      <Results />
    </div>
  );
}
