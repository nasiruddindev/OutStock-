import React from 'react';

const LightCartModal = () => {










  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden font-sans">

      {/* 1. Header Section */}
      <header className="bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">

          <div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Your Cart</h2>
            <p className="text-xs font-medium text-slate-500">4 items in your cart</p>
          </div>
        </div>

        <button
          className="w-9 h-9 rounded-full bg-white/60 hover:bg-white text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors shadow-sm"
        >
        {/* React Cross Icon added */}
        </button>
      </header>

      {/* 2. Scrollable Cart Items List */}
      <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100 px-6 py-2 custom-scrollbar">

        {/* Item 1 */}
        <div className="py-5 flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden p-1">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-slate-800 truncate">Annibale Colombo S...</h3>
            <span className="text-sm font-extrabold text-slate-900">$2,499.99</span>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              {/* Quantity Selector */}
              <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1">
                <button className="text-slate-500 hover:text-slate-800 px-1 font-medium text-sm">−</button>
                <span className="text-xs font-bold text-slate-800 px-2">3</span>
                <button className="text-slate-500 hover:text-slate-800 px-1 font-medium text-sm">+</button>
              </div>

              {/* Trash Button */}
              <button className="text-slate-300 hover:text-rose-500 p-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Subtotal: <span className="font-bold text-slate-700">$7,499.97</span></p>
          </div>
        </div>



      </div>

      {/* 3. Footer Section (Modified Layout & Soft Light Aesthetic) */}
      <footer className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">

        {/* Total Price Display */}
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total</span>
          <span className="text-2xl font-black text-slate-900 tracking-tight">$7,979.91</span>
        </div>

        {/* Action Buttons arranged side-by-side */}
        <div className="grid grid-cols-3 gap-3">
          <button className="py-3 px-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all text-center">
            View Cart
          </button>

          <button className="col-span-2 py-3 px-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-200 transition-all text-center flex items-center justify-center gap-2">
            <span>Proceed to Checkout</span>
            
          </button>
        </div>

      </footer>

    </div>
  );







};

export default LightCartModal;
