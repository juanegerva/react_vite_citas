
const Error = ({message}) => {
  return (
    <div
      className="bg-red-100 border text-center uppercase font-bold  border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4"
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
}

export default Error