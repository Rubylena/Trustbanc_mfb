import { useEffect, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import BankList from "../../../../db/banklist";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ComboBox() {
  const [query, setQuery] = useState("");
  const [bankName, setBankName] = useState<string[]>([]);
  const [selectedBank, setSelectedBank] = useState(null);

  const filteredBank =
    query === ""
      ? bankName
      : bankName.filter((bank) => {
          return bank.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    setBankName(BankList);
  }, []);

  return (
    <Combobox as="div" value={selectedBank} onChange={setSelectedBank}>
      <div className="tw-relative">
        <Combobox.Input
          className="tw-w-full tw-rounded-md tw-border-0 tw-bg-white tw-py-1.5 tw-pl-3 tw-pr-10 tw-text-gray-900 tw-shadow-sm tw-ring-0 tw-outline-0 focus:tw-ring-0 sm:tw-text-sm sm:tw-leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(bank: string) => bank}
          placeholder="Select Salary Bank Account"
          name="Salary Bank Account"
          required
        />
        <Combobox.Button className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-rounded-r-md tw-px-2 focus:tw-outline-none">
          <ChevronUpDownIcon
            className="tw-h-5 tw-w-5 tw-text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredBank.length > 0 && (
          <Combobox.Options className="tw-px-2 tw-absolute tw-z-10 tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
            {filteredBank.map((bank, index) => (
              <Combobox.Option
                key={index}
                value={bank}
                className={({ active }) =>
                  classNames(
                    "tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-8 tw-pr-4",
                    active
                      ? "tw-bg-blue tw-text-white"
                      : "tw-text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "tw-block tw-truncate",
                        selected ? "tw-font-semibold" : ""
                      )}
                    >
                      {bank}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-1.5",
                          active ? "tw-text-white" : "tw-text-blue"
                        )}
                      >
                        <CheckIcon
                          className="tw-h-5 tw-w-5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
