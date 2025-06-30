import { articles } from "@/data/articles";
import InnovationCard from "@/components/Cards/InnovationCard";
import FadeUpSection from "../FadeUpSection";

export default function InnovationSection() {
  return (
    <section className="bg-[#FAF9F6] py-2 md:py-16 px-4 sm:px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
            Our Process
          </h6>
          <div className="sm:max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-[600] mb-4 sm:mb-6">
              Innovative Recycling Solutions for a Greener Future.
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          {articles.map((article, index) => (
            <FadeUpSection key={article.id}>
              <InnovationCard
                id={article.id}
                image={article.image}
                title={article.title}
                description={article.description}
                reverse={index % 2 !== 0}
              />
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}

