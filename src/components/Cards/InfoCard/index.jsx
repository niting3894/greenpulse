export default function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-[#f8eee6] rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
      <div className="text-5xl text-lime-600">{icon}</div>
      <h3 className="font-semibold text-lg md:text-3xl text-gray-900">{title}</h3>
      <p className="text-[1rem] text-gray-500">{description}</p>
    </div>
  );
}
