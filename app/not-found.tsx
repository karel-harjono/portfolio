import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-start items-start w-full">
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">404 - Not Found</h2>
        <p className=" mb-6">We could not find the requested resource.</p>
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
