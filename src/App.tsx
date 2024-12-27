import { useState } from 'react';

const bands = [
  { id: 1, name: 'Sport Band', price: 49, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
  { id: 2, name: 'Leather Band', price: 99, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
  { id: 3, name: 'Milanese Loop', price: 99, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
  { id: 4, name: 'Link Bracelet', price: 349, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
];

const cases = [
  { id: 1, name: '40mm', price: 399, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
  { id: 2, name: '44mm', price: 429, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
];

const AppleWatchStudio = () => {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  return (
    <div className="max-w-7xl mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-col md:flex-row justify-center items-center mb-12">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h2 className="text-3xl font-bold mb-4">Apple Watch Studio</h2>
          <p className="text-lg text-gray-600">Create your own unique Apple Watch.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-2xl font-bold mb-4">Case</h3>
              <div className="flex flex-wrap justify-center items-center">
                {cases.map((c) => (
                  <div key={c.id} className="w-1/2 p-4 md:p-6" onClick={() => setSelectedCase(c)}>
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex justify-center items-center mb-4">{c.image}</div>
                      <h4 className="text-lg font-bold mb-2">{c.name}</h4>
                      <p className="text-lg text-gray-600">${c.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-2xl font-bold mb-4">Band</h3>
              <div className="flex flex-wrap justify-center items-center">
                {bands.map((b) => (
                  <div key={b.id} className="w-1/2 p-4 md:p-6" onClick={() => setSelectedBand(b)}>
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex justify-center items-center mb-4">{b.image}</div>
                      <h4 className="text-lg font-bold mb-2">{b.name}</h4>
                      <p className="text-lg text-gray-600">${b.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-2xl font-bold mb-4">Your Watch</h3>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  {selectedCase.name} Case with {selectedBand.name} Band
                </h4>
                <p className="text-lg text-gray-600">
                  Total: ${selectedCase.price + selectedBand.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleWatchStudio;