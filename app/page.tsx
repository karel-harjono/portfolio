import ProjectCard from "./_components/ProjectCard";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-start p-24 text-primary bg-secondary rounded-lg m-3">
      <div className="flex flex-col w-full mb-24 lg:mb-12">
        <h1 className="text-6xl mb-1">Hello,</h1>
        <h2 className="text-5xl text-tertiary">Good to see you today!</h2>
      </div>

      <div className="flex flex-col mb-32 lg:mb-0 w-full">
        <div className="flex mb-1">
          <h3 className="text-md text-secondary">Suggested projects</h3>
          <SparklesIcon className="h-4 w-4 ml-1 mb-6" />
        </div>
        <div className="grid text-center lg:grid-cols-3 lg:text-left">
          <ProjectCard
            title="FindAssist"
            technologies="React Native • Pinecone • Voice Agents"
            description="A CTRL-F search algorithm equipped with semantic understanding of words and voice interface capability. Produced "
            projectUrl={"https://github.com/karel-harjono/FindAssist"}
            // imgData={{ uri: "/findAssist.png", alt: "FindAssist" }}
            isActive
          />

          <ProjectCard
            title="DEA-Bench"
            technologies="Python • Machine Learning • Research"
            description="A Retrieval-Augmented Generation (RAG) benchmark for small to mid-scale organizations."
            projectUrl={""}
            isActive
          />

          <ProjectCard
            title="Photosensitive Content Filter"
            technologies="Python • Machine Learning • Accessibility"
            description="A content filter for photosensitive individuals with compliance on Web Content Accessibility Guidelines (WCAG) 2.0 standards."
            projectUrl={
              "https://github.com/karel-harjono/photosensitive-content-filter"
            }
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4"></div>
    </main>
  );
}
