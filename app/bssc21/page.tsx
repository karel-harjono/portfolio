import { redirect } from "next/navigation";
import HashUtils from "@/lib/HashUtils";

export default function Bssc21IndexPage() {
  // Redirect to the first page
  redirect(`/bssc21/${HashUtils.hashId(1)}`);
}
