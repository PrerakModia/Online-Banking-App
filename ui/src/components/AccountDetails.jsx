const AccountDetails = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="font-semibold p-5 text-xl">Current Balance</div>
      <div className="flex flex-row gap-3 items-center">
        <div className="font-bold text-6xl px-5 py-2 font-serif">
          $132,281.15
        </div>
        <button
          className="text-black rounded-md hover:scale-105 duration-300 py-1 px-3"
          style={{ border: '1px solid black', borderRadius: '0.375rem' }}
        >
          Withdraw
        </button>
        <button className="bg-black text-white rounded-md hover:scale-105 duration-300 py-1 px-3">
          Deposit
        </button>
      </div>
      <hr className="m-5" />
    </div>
  );
};

export default AccountDetails;
