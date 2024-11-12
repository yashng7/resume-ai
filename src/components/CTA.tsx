import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-4 text-center py-12">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Land Your Dream Job?
        </h2>
        <p className="mb-8 text-xl">
          Create your ATS-friendly resume now and increase your chances of
          getting interviewed.
        </p>
        <Button className="rounded-full bg-white px-8 py-6 text-lg text-emerald-600 transition duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-emerald-400 dark:hover:bg-gray-700">
          <Link href="/resumes">Start Building Your Resume</Link>
        </Button>
      </div>
    </section>
  );
}
