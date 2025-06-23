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
        search: search
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
              title="Residential Waste Collection"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image="/assets/images/service1.jpg"
            />
          </FadeUpSection>
          <FadeUpSection>
            <ServiceCard
              title="Commercial Waste Disposal"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image="/assets/images/service2.jpg"
            />
          </FadeUpSection>
          <FadeUpSection>
            <ServiceCard
              title="Recycling Services"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image="/assets/images/service3.jpg"
            />
          </FadeUpSection>
          <FadeUpSection>
            <ServiceCard
              title="Hazardous Waste Removal"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              image="/assets/images/service4.jpg"
            />
          </FadeUpSection>
        </div>
      </div>
    </section>
  );
}
