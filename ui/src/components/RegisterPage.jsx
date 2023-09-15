import { useEffect, useState } from 'react';
import bgImage from '../assets/5.jpg';

const RegisterPage = () => {
  const [page, setPage] = useState(true);

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-2xl text-[#6E6D64]">Register</h2>
            <p className="text-sm mt-4 text-[#6E6D64]">
              If you are not a customer, easily register
            </p>
            <form className="flex flex-col gap-4">
              {page && (
                <>
                  <div className="flex gap-4">
                    <input
                      className="p-2 mt-8 rounded-xl borders w-1/2"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      // value={logInDetails.customerid}
                      // onChange={(e) => changeHandler(e, 'customerid')}
                    />
                    <input
                      className="p-2 mt-8 rounded-xl borders w-1/2"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      // value={logInDetails.customerid}
                      // onChange={(e) => changeHandler(e, 'customerid')}
                    />
                  </div>
                  <div className="relative">
                    <input
                      className="p-2 rounded-xl border w-full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      //   value={logInDetails.password}
                      //   onChange={(e) => changeHandler(e, 'password')}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </div>

                  <input
                    className="p-2 rounded-xl borders"
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />
                  <input
                    className="p-2 rounded-xl borders"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />
                  <input
                    className="p-2 rounded-xl borders"
                    type="number"
                    name="aadhar"
                    placeholder="Aadhar Number"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />

                  <button
                    className="bg-[#6E6D64] rounded-xl text-white py-2 hover:scale-105 duration-300 mb-4"
                    onClick={() => setPage(!page)}
                  >
                    Next
                  </button>
                </>
              )}

              {!page && (
                <>
                  <input
                    className="p-2 rounded-xl borders mt-8"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />

                  <div className="flex gap-4">
                    <input
                      className="p-2 rounded-xl borders w-1/2"
                      type="text"
                      name="city"
                      placeholder="City"
                      // value={logInDetails.customerid}
                      // onChange={(e) => changeHandler(e, 'customerid')}
                    />
                    <input
                      className="p-2 rounded-xl borders w-1/2"
                      type="text"
                      name="state"
                      placeholder="State"
                      // value={logInDetails.customerid}
                      // onChange={(e) => changeHandler(e, 'customerid')}
                    />
                  </div>

                  <input
                    className="p-2 rounded-xl borders"
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />

                  <input
                    className="p-2 rounded-xl borders"
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    // value={logInDetails.customerid}
                    // onChange={(e) => changeHandler(e, 'customerid')}
                  />

                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree to Terms and Conditions.
                    </label>
                  </div>

                  <button
                    className="bg-[#6E6D64] rounded-xl text-white py-2 hover:scale-105 duration-300 mb-4"
                    // onClick={(e) => submitHandler(e)}
                  >
                    Register
                  </button>
                </>
              )}
            </form>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>Have an account?</p>
              <button
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={() => {
                  window.location.assign('/');
                }}
              >
                Log In
              </button>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={bgImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
