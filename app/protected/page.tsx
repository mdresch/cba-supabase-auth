import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/features"
import CuttingEdgeSection from "@/components/cutting-edge"
import KnowledgeAreaSection from "@/components/knowledgeareas"
import TransformBusinessSection from "@/components/transformbusiness"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
      <FeatureSection />
      <CuttingEdgeSection />
                <KnowledgeAreaSection />
                <TransformBusinessSection />
      </div>
    </div>
  )
}

