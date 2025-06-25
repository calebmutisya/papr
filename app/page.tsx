
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";
import TrendingStories from "@/components/TrendingStories";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Top Stories */}
      <TopStories />
      {/* Trending Stories */}
      <TrendingStories />
    </div>
  );
}
