export default function Success({ dispatch }) {
  return (
    <div className="w-4/5 sm:w-1/2 py-4 text-center bg-green-500 bg-opacity-50 rounded-[0.25rem] border-2 border-green-900 dark:border-green-100">
      <p className="text-xl font-bold tracking-wider">Message sent!</p>
      <button
        className="block mx-auto px-12 py-1 bg-black text-white rounded-[0.25rem]"
        type="reset"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}
