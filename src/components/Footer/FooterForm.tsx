/* form found in footer to email */
export function FooterForm(): JSX.Element {
  return (
    <form className="flex flex-col sm:flex-row justify-center">
      <input
        className="xl:w-1/2 lg:w-1/2 xxs:w-full xs:w-full p-2 mr-4 rounded-md mb-4 bg-white text-gray-900"
        type="email"
        placeholder="Your email.."
      />
      <button type="button" className="p-2 mb-4 bg-sky-700 text-white">
        Free Resume Tips
      </button>
    </form>
  );
}