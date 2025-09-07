"use client";

import ServiceCard from "@/components/Cards/ServiceCard";
import FadeUpSection from "../FadeUpSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServiceList } from "@/redux/slices/ServiceList";

export default function ServicesSection() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(6);
  const [search, setSearch] = useState("");

  const { ServiceList, loadingBlog, totalCount } = useSelector(
    (state) => state.ServiceListData
  );

  useEffect(() => {
    dispatch(
      getServiceList({
        page: page,
        limit: activePage,
        search: search,
      })
    );
  }, [page, activePage, search, dispatch]);

  return (
    <section className="bg-[#f8eee6] text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <FadeUpSection>
          <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center">
            Services
          </h6>
          <h2 className="text-3xl md:text-6xl font-[600] text-center mb-16 max-w-5xl mx-auto">
            Comprehensive Waste Solutions for a Cleaner Tomorrow
          </h2>
        </FadeUpSection>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeUpSection>
            <ServiceCard
              title="EPR Compliance (PAN India)"
              description={[
                "We offer complete EPR services under CPCB guidelines for:",
                [
                  "E-Waste",
                  "Plastic Waste",
                  "Battery Waste",
                  "Tyre Waste",
                  "Used Oil & Hazardous Waste",
                ],
                "Our services include:",
                [
                  "Registration with CPCB/SPCB.",
                  "Recycling & Collection Partnerships.",
                  "Documentation & Annual Returns Filing.",
                  "Audit Support & Compliance Reporting.",
                ],
              ]}
              image="/assets/images/service1.jpg"
            />
          </FadeUpSection>

          <FadeUpSection>
            <ServiceCard
              title="Reverse Logistics Management"
              description={[
                "We design and implement collection & return logistics tailored to client supply chains, ensuring:",
                [
                  "PAN India pickup services.",
                  "Real-time tracking & compliance.",
                  "Integration with recyclers and dismantlers.",
                ],
              ]}
              image="/assets/images/service2.jpg"
            />
          </FadeUpSection>

          <FadeUpSection>
            <ServiceCard
              title="Waste Disposal Services"
              description={[
                "Ensure safe, scientific, and legal disposal of waste through authorized partners:",
                [
                  "Hazardous waste",
                  "Bio-medical waste",
                  "Industrial & construction waste",
                  "Bulk consumer waste",
                ],
                "Also offered:",
                [
                  "Waste audit & inventory",
                  "Disposal certificates",
                  "Legal documentation",
                ],
              ]}
              image="/assets/images/service3.jpg"
            />
          </FadeUpSection>

          <FadeUpSection>
            <ServiceCard
              title="ESG & Sustainability Consulting"
              description={[
                "We help you integrate Environmental, Social, and Governance strategies into your business:",
                [
                  "ESG Strategy Design",
                  "BRSR & Sustainability Reporting",
                  "GHG Inventories",
                  "ESG Training & Implementation",
                ],
              ]}
              image="/assets/images/service4.jpg"
            />
          </FadeUpSection>

          <FadeUpSection>
            <ServiceCard
              title="Carbon Credits & Market Access"
              description={[
                "Drive climate action with our carbon management advisory:",
                [
                  "Carbon Footprint Calculation",
                  "Registration under VCS, CDM, GS Projects",
                  "Trading & Offset Solutions",
                  "Net-Zero Strategy Roadmaps",
                ],
              ]}
              image="/assets/images/service1.jpg"
            />
          </FadeUpSection>

          <FadeUpSection>
            <ServiceCard
              title="Consent & Compliance Management"
              description={[
                "Expert support for obtaining and renewing:",
                [
                  "CTE & CTO from SPCBs",
                  "E-waste & HWM Authorizations",
                  "Bio-medical Waste NOCs",
                  "Fire, Factory & Environment Clearances",
                ],
                "Also includes:",
                [
                  "Application drafting",
                  "Liaisoning & follow-ups",
                  "Timely renewal alerts",
                ],
              ]}
              image="/assets/images/service2.jpg"
            />
          </FadeUpSection>
        </div>
      </div>
    </section>
  );
}


