/**
 * navbar login buttons on right when not in hamburger view
 */
export function Login(): JSX.Element {
  return (
    <div className="hidden md:flex pr-4">
    
      <button type="button" className="px-8 py-3 bg-indigo-700 rounded-full">
        Dream Job Awaits
      </button>
    </div>
  );
}
