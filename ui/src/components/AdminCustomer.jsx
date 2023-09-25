const AdminCustomer = (props) => {
  return (
    <div class="flex flex-wrap -mx-3 mb-3 w-screen max-w-lg">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          disabled
          value={props.customerDetails.firstName}
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          disabled
          value={props.customerDetails.lastName}
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          DOB
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          disabled
          value={props.customerDetails.dob}
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Aadhar Number
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          disabled
          value={props.customerDetails.aadhar}
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Mobile Number
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          disabled
          value={props.customerDetails.mobile}
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          disabled
          value={props.customerDetails.email}
        />
      </div>
      <button
        class="mx-3 bg-transparent hover:bg-black hover:text-white text-black font-semibold mt-4 py-2 px-4 border border-black hover:border-transparent rounded"
        onClick={() => {
          window.sessionStorage.setItem(
            'customerSearch',
            props.customerDetails.customerId
          );
          props.changeView('customerAccounts');
        }}
      >
        View Customer Accounts
      </button>
    </div>
  );
};

export default AdminCustomer;
