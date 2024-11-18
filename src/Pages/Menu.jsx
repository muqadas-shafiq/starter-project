import React from 'react';
import { IoPizza } from 'react-icons/io5';

const Menu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 max-w-full min-h-96">
      {/* Card 1 */}
      <div className="border-4 border-orange-600 min-h-72 max-w-72 rounded-3xl flex justify-center items-center flex-col gap-10 shadow-lg">
        <IoPizza className="text-orange-600 text-8xl" />
        <h1 className="text-[20px] font-poppins">DELIVERY</h1>
      </div>

      {/* Card 2 */}
      <div className="border-4 border-orange-600 min-h-72 w-72 rounded-3xl flex justify-center items-center flex-col gap-10 shadow-lg">
        <IoPizza className="text-orange-600 text-8xl" />
        <h1 className="text-[20px] font-poppins">ORGANIC</h1>
      </div>

      {/* Card 3 */}
      <div className="border-4 border-orange-600 min-h-72 w-72 rounded-3xl flex justify-center items-center flex-col gap-10 shadow-lg">
        <IoPizza className="text-orange-600 text-8xl" />
        <h1 className="text-[20px] font-poppins">PIZZA</h1>
      </div>

      {/* Card 4 */}
      <div className="border-4 border-orange-600 min-h-72 w-72 rounded-3xl flex justify-center items-center flex-col gap-10 shadow-lg">
        <IoPizza className="text-orange-600 text-8xl" />
        <h1 className="text-[20px] font-poppins">PASTA</h1>
      </div>
    </div>
  );
};

export default Menu;
