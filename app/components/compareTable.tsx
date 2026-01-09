"use client"; 
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { useCatalogue } from "./useCatalogue";
import { attributeNames } from "./constants"; 

type OptionType = { value: string; label: string };
type CatalogueItem = { model: string; [key: string]: any };

export default function CompareTable() {
  const items: CatalogueItem[] = useCatalogue();
  const [selected, setSelected] = useState<(OptionType | null)[]>([null, null]);
  const [dropdownCount, setDropdownCount] = useState(2);
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

  const availableOptions = items.map((item) => ({ 
    value: item.model, 
    label: item.model 
  })).filter(option => 
    !selected.some(s => s?.value === option.value)
  );

  const handleChange = (opt: SingleValue<OptionType>, index: number) => {
    const copy = [...selected];
    copy[index] = opt;
    
    // Only count non-null UP TO current dropdownCount
    const activeSelections = [];
    for (let i = 0; i < dropdownCount; i++) {
      if (copy[i] !== null) {
        activeSelections.push(copy[i]);
      }
    }
    
    const newCount = Math.max(2, activeSelections.length);
    
    // Create new selected array with exact size
    const newSelected = Array(4).fill(null);
    for (let i = 0; i < newCount; i++) {
      newSelected[i] = activeSelections[i];
    }
    
    setSelected(newSelected);
    setDropdownCount(newCount);
  };

  const addDropdown = () => {
    if (dropdownCount < 4) {
      setDropdownCount(dropdownCount + 1);
    }
  };

  if (items.length === 0) return <div>Loading...</div>;

  return (
    <div className="min-h-screen py-8 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> {/* Reduced padding */}
      <div className="max-w-7xl mx-auto">
        {/* Top Ad Space */}
        <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl mb-8 flex items-center justify-center text-gray-200 text-lg font-semibold shadow-2xl border border-gray-600">
          Advertisement (300x250)
        </div>

        {/* Centered Table Container - Reduced padding */}
        <div className="bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-3xl p-4 lg:p-6 border border-gray-600"> {/* Reduced from p-8 lg:p-12 */}
          <div className="overflow-x-auto">
            <table className="w-full text-gray-100 table-fixed">
              <thead>
                <tr className="h-20"> 
                  <th className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold py-4 px-2 sticky left-0 z-20 border-r-4 border-purple-400 shadow-lg w-1/5"> {/* Reduced py-6 px-4 */}
                    Specification
                  </th>
                  {Array.from({ length: dropdownCount }).map((_, i) => (
                    <th key={i} className={`py-4 px-1 ${dropdownCount === 2 ? 'w-2/5' : dropdownCount === 3 ? 'w-1/3' : 'w-1/4'}`}> {/* Reduced py-6 px-2 */}
                      <div className="flex items-center justify-center gap-4">
                        <Select
                          options={availableOptions}
                          value={selected[i] || null}
                          onChange={(opt) => handleChange(opt, i)}
                          classNamePrefix="compare-select"
                          placeholder={`Phone ${i + 1}`}
                          isClearable
                          styles={{
                            control: (base) => ({
                              ...base,
                              backgroundColor: '#374151',
                              borderColor: '#6b7280',
                              color: 'white',
                              width: dropdownCount === 2 ? '380px' : dropdownCount === 3 ? '280px' : '220px',
                              minHeight: '44px', // Slightly reduced
                              textAlign: 'center'
                            }),
                            menu: (base) => ({
                              ...base,
                              backgroundColor: '#1f2937',
                              color: 'white',
                              width: dropdownCount === 2 ? '380px' : dropdownCount === 3 ? '280px' : '220px'
                            }),
                            singleValue: (base) => ({
                              ...base,
                              color: 'white',
                              fontWeight: '600',
                              textAlign: 'center'
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              padding: '2px 6px', // Reduced padding
                              textAlign: 'center'
                            }),
                            option: (base, state) => ({
                              ...base,
                              backgroundColor: state.isSelected 
                                ? '#6366f1' 
                                : state.isFocused 
                                ? '#374151' 
                                : 'transparent',
                              color: 'white'
                            })
                          }}
                        />
                        {dropdownCount < 4 && i === dropdownCount - 1 && (
                          <button
                            onClick={addDropdown}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0"
                            title="Add another phone"
                          >
                            +
                          </button>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {selected.filter(s => s !== null).length === 0 ? (
                  <tr>
                    <td colSpan={dropdownCount + 1} className="text-center py-16 text-2xl text-gray-400 font-medium"> {/* Reduced py-20 */}
                      Select phones from dropdowns above to compare specs
                    </td>
                  </tr>
                ) : (
                  <>
                    {Object.entries(attributeNames).map(([key, label], index) => (
                      <tr
                        key={key}
                        className={`${
                          index % 2 === 0 
                            ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/70' 
                            : 'bg-gradient-to-r from-gray-750/60 to-gray-850/80'
                        } border-b-2 border-purple-500/30 hover:bg-purple-500/20 transition-all duration-200`}
                      >
                        <td className="px-2 py-2 font-medium text-gray-200 sticky left-0 z-10 bg-inherit border-r-2 border-purple-400/50"> {/* Reduced px-4 py-3 */}
                          {label}
                        </td>
                        {Array.from({ length: dropdownCount }).map((_, phoneIndex) => {
                          const phoneModel = selected[phoneIndex]?.value;
                          return (
                            <td key={`${key}-${phoneIndex}`} className="px-2 py-2 text-center text-gray-100"> {/* Reduced px-4 py-3 */}
                              {phoneModel 
                                ? items.find(item => item.model === phoneModel)?.[key as keyof CatalogueItem] || 'N/A'
                                : ''
                              }
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Ad Space */}
        <div className="w-full h-48 lg:h-64 bg-gradient-to-r from-emerald-800 to-green-800 rounded-2xl mt-8 flex items-center justify-center text-emerald-200 text-xl font-bold shadow-2xl border border-emerald-600"> {/* Reduced mt-12 */}
          Advertisement (728x90)
        </div>
      </div>
    </div>
  );
}
