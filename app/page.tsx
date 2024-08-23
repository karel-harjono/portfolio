import FixedTextInput from "./_components/FixedTextInput";
import ProjectCard from "./_components/ProjectCard";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col w-full mb-24 lg:mb-12">
        <h1 className="text-6xl mb-1">Hello,</h1>
        <h2 className="text-5xl text-tertiary">Good to see you today!</h2>
      </div>

      <div className="flex flex-col mb-32 lg:mb-0 w-full">
        <div className="flex mb-1">
          <h4 className="text-md text-secondary leading-normal">
            Suggested projects
          </h4>
          <SparklesIcon className="h-4 w-4 ml-1 mb-6" />
        </div>
        <div className="grid text-center lg:grid-cols-3 lg:text-left">
          <ProjectCard
            title="Open Liberty"
            technologies="Java • App Server • Open Source Contributions"
            description="A lightweight open framework for building fast and efficient cloud-native Java microservices. Open Liberty starts up fast, with a low memory footprint and live reload for quick iteration. Adding and removing features from the latest versions of MicroProfile and Jakarta EE. And with zero migration, you focus on what's important, not the APIs changing under you."
            projectUrl={"https://github.com/OpenLiberty/open-liberty"}
            imgData={{
              uri: "/images/open-liberty/OL-logo.png",
              alt: "Open Liberty Logo",
              className: "object-scale-down",
            }}
            isActive
          />

          <ProjectCard
            title="DEA-Bench"
            technologies="Python • Machine Learning • Research"
            description="A Retrieval-Augmented Generation (RAG) evaluation metric for small to mid-scale organizations. The benchmark assesses the performance of assistant RAG systems across seven major domains and six question types allowing comparisons between commercial and open source assistant RAG systems and non-RAG LLMs."
            projectUrl={""}
            imgData={{ uri: "/DEA-BenchResults.png", alt: "DEA-Bench results" }}
            isActive
          />

          <ProjectCard
            title="FindAssist"
            technologies="React Native • Pinecone • Voice Agents"
            description="A CTRL-F search algorithm equipped with semantic understanding of words and voice interface capabilities. This approach combines semantic understanding with the conversational abilities of virtual assistants (VAs), enabling more precise and relevant information retrieval."
            projectUrl={"https://github.com/karel-harjono/FindAssist"}
            imgData={{
              uri: "/findAssistBarChart.png",
              alt: "Results of FindAssist decreasing average words search time by a significant percentage.",
              className: "object-scale-down",
            }}
            dateCompleted="August 2024"
          />

          <ProjectCard
            title="Photosensitive Content Filter"
            technologies="Python • Machine Learning • Accessibility"
            description="A content filter for photosensitive individuals that detects excessive flashes in content lacking proper labels or epilepsy warnings, ensuring compliance with the Web Content Accessibility Guidelines (WCAG) 2.0 standards."
            projectUrl={
              "https://github.com/karel-harjono/photosensitive-content-filter"
            }
            imgData={{
              uri: "/images/photosensitive-content-filter/flashesByFrames.png",
              alt: "Photosensitive Content Filter flash analysis plot",
            }}
            dateCompleted="October 2022"
          />

          <ProjectCard
            title="2048-game-clone"
            technologies="Python • Machine Learning • Accessibility"
            description="This is a simple replication of the popular 2048 Game. Game utilizes the Java Swing library to display a table containing the matrix of values."
            projectUrl={"https://github.com/karel-harjono/2048-game-clone"}
            imgData={{
              uri: "/images/2048-game-clone/sample.png",
              alt: "2048-game-clone sample",
              className: "h-[200px] object-scale-down",
            }}
            dateCompleted="March 2022"
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4"></div>
    </div>
  );
}
