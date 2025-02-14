import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/features"
import CuttingEdgeSection from "@/components/cutting-edge"
import KnowledgeAreaSection from "@/components/knowledgeareas"
import TransformBusinessSection from "@/components/transformbusiness"

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        <HeroSection />
        <CuttingEdgeSection />
        <TransformBusinessSection />
      </main>
    </>
  );
}
