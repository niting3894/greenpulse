export default function ProcessCard({ title, description }) {
  return (
    <div className="bg-[#f8eee6] p-4 pb-6 rounded-xl border border-gray-300">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className=" text-[#8D8D8D] text-[1rem]">{description}</p>
    </div>
  );
}
