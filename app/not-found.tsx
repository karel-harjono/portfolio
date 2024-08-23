import { WrenchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-start lg:justify-center lg:items-center w-full">
      <WrenchIcon className="h-24 w-24 text-tertiary" />
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Sorry for the interruption :(
        </h2>
        <p className=" mb-6">
          The requested resource is currently still under development.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-white bg-tertiary rounded hover:bg-primary transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
