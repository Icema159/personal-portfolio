import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";

export default function Home() {
    return (
        <div className="flex-1">
            <Hero />
            <BentoGrid />
        </div>
    );
}