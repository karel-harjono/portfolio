import GitHubIcon from "./_icons/GitHubIcon";
import Image from "next/image";

const ProjectCard = ({
  title,
  technologies,
  technologies2 = "",
  description,
  projectUrl,
  imgData = { uri: "", alt: "" },
  isActive = false,
  dateCompleted = "",
}) => {
  return (
    <a
      href={projectUrl}
      className="group flex flex-col justify-between rounded-lg border border-transparent my-5 px-5 py-4 lg:mx-4 lg:my-0 bg-tertiary transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:bg-primary/70"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-between mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          {title}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {/* -&gt; */}
            <GitHubIcon className="w-5 h-5 inline-block ml-1" />
          </span>
          <p className="m-0 text-sm opacity-50">{technologies}</p>
          <p className="m-0 text-sm opacity-50">{technologies2}</p>
        </h2>
        <p className="m-0 text-sm opacity-70">{description}</p>
        {!!imgData?.uri && (
          <Image
            src={imgData.uri}
            alt={imgData.alt}
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md w-full h-[200px] object-cover"
          />
        )}
      </div>
      <div className="flex w-full">
        {isActive && (
          <div className="self-start justify-self-end py-1 px-2 m-2 bg-teal-700 rounded-full text-white">
            <span className="m-0 text-xs opacity-70">Active</span>
          </div>
        )}
        {!!dateCompleted && (
          <div className="self-center justify-center text-secondary text-xs">
            {dateCompleted}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
