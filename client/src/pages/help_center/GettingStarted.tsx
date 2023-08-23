import React from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

const GettingStarted = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans">
        <Navbar />
        <div className="absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10"></div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="py-0 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
          Hi! Need help?
        </h1>
        <div className="w-full h-fit flex relative items-center justify-center self-center ">
          {/* Search bar */}
          <input
            type="text"
            placeholder="     Search how-tos and more"
            className="p-3 mt-4 border bg-blue-gray-100 border-gray-300 rounded-full w-full max-w-md placeholder-black"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between">
        {/* Left Content */}
        <div className="w-2/5 p-8 ml-72">
          <p className="font-bold mb-1">How-to</p>
          <h2 className="font-bold text-2xl mb-0">
            Edit your account settings
          </h2>
          <p className="mb-8">
            Need to make a change or two? You can edit your account settings, as
            well as some information on your public profile, from your Account
            section.
          </p>
          <h2 className="font-bold text-2xl mb-0">How it works</h2>
          Just click or tap your profile picture and go to Account, you’ll find:
          <ul className="list-disc pl-6">
            <li>
              Personal info: Provide personal details and how we can reach you
            </li>
            <li>
              Login and security: Update your password and secure your account
            </li>
            <li>
              Payments and payouts: Review payments, payouts, coupons, and gift
              cards
            </li>
            <li>Taxes: Manage taxpayer information and tax documents</li>
            <li>
              Notifications: Choose notification preferences and how you want to
              be contacted
            </li>
            <li>
              Privacy and sharing: Control connected apps, what you share, and
              who sees it
            </li>
            <li>
              Global preferences: Set your default language, currency, and time
              zone
            </li>
            <li>
              Travel for work: Add a work email for business trip benefits
            </li>
            <li>
              Professional hosting tools: Perfect if you manage several vehicles
            </li>
            <li>Invite friends: It’s more fun when everyone travels</li>
          </ul>
          <div className="mt-8">
            <hr className="w-full border-gray-500 mx-auto" />{" "}
          </div>
          <h2 className="font-bold text-2xl mt-8 mb-4">Related Articles</h2>
          <a className="font-bold text-xl " href="/setting-up">
            <u>Setting up your account</u>
          </a>
          <p>
            You’ve logged in, but you need to edit your account. Where do you
            go? Here’s how to update your profile, manage notification settings,
            and more.
          </p>
          <div className="mt-8 mb-8">
            <hr className="w-full border-gray-500 mx-auto" />{" "}
          </div>
          <a className="font-bold text-xl" href="/manage-account">
            <u>How to access and manage your account</u>
          </a>
          <p>
            Learn how to effortlessly navigate through your account settings,
            update personal information, enhance security measures, and
            efficiently manage payments.
          </p>
          {/* Add more content here */}
        </div>

        {/* Right Content */}
        <div>
          <div className="w-2/8 mt-8 mr-52 bg-white rounded-lg border border-gray-300 p-8">
            <div className="flex flex-col">
              <p className="mt-1 font-semibold text-xl text-gray-800">
                Get help with your reservations, account, and more.
              </p>
              <a
                href="/login"
                className="px-4 py-2 bg-yellow100 mt-3 text-white rounded-xl"
              >
                Log-in or sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />

      <Footer />
    </>
  );
};

export default GettingStarted;

// import React from "react";
// import Navbar from "../../components/Navbar.tsx";
// import Footer from "../../components/Footer.tsx";

// const GettingStarted = () => {
//   return (
//     <>
//       <div className="flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans">
//         <Navbar />
//         <div className="absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10"></div>
//       </div>
//       <div className="flex flex-col items-center justify-center w-full h-full">
//         <h1 className="py-0 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
//           Hi! Need help?
//         </h1>
//         <div className="w-full h-fit flex relative items-center justify-center self-center ">
//           {/* Search bar */}
//           <input
//             type="text"
//             placeholder="     Search how-tos and more"
//             className="p-3 mt-4 border bg-blue-gray-100 border-gray-300 rounded-full w-full max-w-md placeholder-black"
//           />
//         </div>
//       </div>

//       {/* if not logged in*/}
//       <div className="flex justify-end">
//         <div className="w-2/12 mt-8 mx-96 bg-white rounded-lg border border-gray-300 p-8 flex items-center">
//           <div className="flex flex-col ml-auto">
//             <p className="mt-1 font-semibold text-xl text-gray-800">
//               Get help with you reservations, account, and more.
//             </p>
//             <a
//               href="/login"
//               className="px-4 py-2 bg-yellow100 mt-8 text-white rounded-xl"
//             >
//               Log-in or sign up
//             </a>
//           </div>
//         </div>
//       </div>

//       <br />

//       <Footer />
//     </>
//   );
// };
