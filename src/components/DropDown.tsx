import { Fragment, useState } from "react";
import { useStore } from "@/store";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import combined from "@/assets/combined.json";

export default function DropDown() {
  const addStock = useStore((state) => state.addStock);
  // const [selected, setSelected] = useState({});
  const [selected, setSelected] = useState<{ ticker: string }>({ ticker: "" });
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);


  const filteredStock =
    query === ""
      ? combined.filter((stock) => stock.name).slice(0, 10)
      : combined
          .filter((stock) =>
            stock.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
          .slice(0, 5);

  // const ticker = selected === nasdaq.filter((stock) => stock.name) ? 'hi' : 'bye' ;

  const handleCreateStock = async (event: any) => {
    event.preventDefault();
    if (Object.keys(selected).length === 0) return alert("Input cannot be empty");
    try {
      setLoading(true);
      const stock = { title: selected.ticker };
      await addStock(stock);
    } catch (error) {
      console.error("Error creating stock item:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
    onSubmit={handleCreateStock}
    className="flex items-center space-x-2 mb-4"
    >
      <div className="absolute top-16 w-72">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(stock: { ticker: string }) => stock.ticker}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by company name..."
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredStock.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found
                  </div>
                ) : (
                  filteredStock.map((stock, index) => (
                    <Combobox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={stock}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {/* {`${stock.name}:  ${stock.ticker}`} */}
                            {stock.name} {stock.ticker}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
            disabled={loading}
          >
            <PaperAirplaneIcon
              className={`h-5 w-5 ${loading ? "text-gray-400": "text-green-400"}`}
              aria-hidden="true"
            />
          </button>
        </Combobox>
      </div>
    </form>
  );
}
