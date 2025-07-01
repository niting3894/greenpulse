import FadeUpSection from "../FadeUpSection";

export default function CaseStudySection() {
  return (
    <section className="bg-[#f8eee6] text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <FadeUpSection>
          <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center">
            Case Study
          </h6>
          <h2 className="text-3xl md:text-6xl font-[600] text-center mb-16 max-w-5xl mx-auto">
            Reducing Waste Liability for a Battery and E-waste Producer through Tailored EPR Planning
          </h2>
        </FadeUpSection>

        <div className="max-w-4xl mx-auto space-y-6 text-[#8D8D8D] text-base leading-relaxed">
          <p><strong className="text-gray-500">Client Overview:</strong> A top-tier manufacturer and dealer of batteries and electronic appliances operating across India, with widespread distribution of batteries, inverters, and IT equipment.</p>

          <p><strong className="text-gray-500">Challenge:</strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li>Upcoming targets under Battery Waste Management and E-Waste Rules.</li>
            <li>Lack of formal reverse collection channels.</li>
            <li>Inconsistent inventory data and unclear end-of-life product mapping.</li>
            <li>Risk of CPCB penalties due to delayed registration and plan approval.</li>
          </ul>

          <p><strong className="text-gray-500">Our Approach:</strong> Green Pulse Solutions provided a dual-framework strategy tailored to both battery and e-waste compliance:</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-gray-500">Inventory Assessment & Forecasting</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Conducted historical sales and product lifespan analysis.</li>
                <li>Estimated future liability based on sales trends and product returns.</li>
                <li>Identified unreported waste categories within product lines.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-500">CPCB Registration & EPR Action Plan Filing</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Completed CPCB registration for both battery and e-waste categories.</li>
                <li>Submitted segmented EPR Action Plans aligned with each rule.</li>
                <li>Managed documentation in compliance with both central and state boards.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-500">Reverse Logistics Deployment</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Established collection mechanisms in many cities through authorized recyclers.</li>
                <li>Integrated pickup scheduling and waste validation system.</li>
                <li>Linked dealer/distributor returns to traceable collection hubs.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-500">Awareness & Stakeholder Training</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Conducted workshops for channel partners and dealers.</li>
                <li>Developed internal SOPs for end-of-life returns and recordkeeping.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-500">Annual Return Management & Audit Support</strong>
              <ul className="list-disc list-inside ml-5">
                <li>Ensured timely submission of returns under each regulation.</li>
                <li>Created audit-ready documentation and supported compliance inspections.</li>
              </ul>
            </li>
          </ol>

          <p><strong className="text-gray-500">Results Achieved:</strong></p>
          <ul className="space-y-2">
            <li>✅ Achieved 98% return compliance for collected e-waste and batteries.</li>
            <li>✅ Timely CPCB approval for multi-category compliance plans.</li>
            <li>✅ Strengthened supply chain integration and improved ESG rating.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
