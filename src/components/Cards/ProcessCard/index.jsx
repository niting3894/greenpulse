export default function ProcessCard({ title, description }) {
  return (
    <div className="bg-[#f8eee6] p-2 px-4 rounded-xl border border-gray-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className=" text-[#8D8D8D] text-[1rem]">{description}</p>
    </div>
  );
}
