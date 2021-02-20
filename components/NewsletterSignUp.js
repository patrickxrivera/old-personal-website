import axios from "axios";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function NewsletterSignUp() {
  const [addedToNewsletter, setAddedToNewsletter] = useState(null);
  const [addingToNewsletter, setAddingToNewsletter] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAddingToNewsletter(true);

    try {
      await axios.post("/api/newsletter-sign-up", {
        email,
      });

      setAddingToNewsletter(false);
      setAddedToNewsletter(true);
    } catch (err) {
      console.log(err);

      setAddingToNewsletter(false);
      setAddedToNewsletter(false);
      setError(true);
    }
  };

  const renderButtonText = () => {
    if (addedToNewsletter) {
      return (
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (addingToNewsletter) {
      return <ClipLoader color="white" size={18} />;
    } else {
      return "Leggo";
    }
  };

  return (
    <div className="lg:w-96">
      <form onSubmit={handleSubmit}>
        <label for="email" class="block">
          Weekly(ish) essays on crypto, startups, and life
        </label>
        <div class="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="satoshi@nakamoto.com"
            onChange={(e) => {
              error && setError(false);
              setEmail(e.target.value);
            }}
          />
        </div>
        {error && (
          <p class="mt-2 text-sm text-red-600" id="email-error">
            Oops. Something went wrong. Please try again.
          </p>
        )}
        <button
          type="submit"
          class="flex justify-center mt-2 w-full items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit}
        >
          {renderButtonText()}
        </button>
      </form>
    </div>
  );
}
