export function MortgageCalculator() {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-between items-center w-full mb-4">
          <h1 className="font-bold text-lg">Mortgage Calculator</h1>
          <p className="text-gray-600 text-sm font-sans cursor-pointer hover:underline">
            Clear All
          </p>
        </div>
  
        <form className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              Mortgage Amount
            </p>
            <input
              type="text"
              placeholder="mortgage amount"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
  
          <div className="flex gap-4">
            <div className="w-1/2">
              <p className="text-sm font-medium text-gray-700 mb-1">Mortgage Term</p>
              <input
                type="text"
                placeholder="escreve aqui"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="w-1/2">
              <p className="text-sm font-medium text-gray-700 mb-1">Interest Rate</p>
              <input
                type="text"
                placeholder="mortgage term"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
  
          <div className="w-1/2">
            <p className="text-sm font-medium text-gray-700 mb-2">Mortgage Type</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  id="pix"
                  name="payment-type"
                  type="radio"
                  value="Repayment"
                  className="accent-blue-600"
                />
                Repayment
              </label>
              <label className="flex items-center gap-2">
                <input
                  name="payment-type"
                  type="radio"
                  value="interest-only"
                  className="accent-blue-600"
                />
                Interest Only
              </label>
            </div>
          </div>
  
          <button
            type="submit"
            className="mt-4 w-full bg-amber-300 text-gray-600 px-4 py-2 rounded-full hover:bg-amber-400"
          >
            Calculate Repayments
          </button>
        </form>
      </div>
    );
  }
  