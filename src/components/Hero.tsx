import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-emerald-100 py-20 dark:from-gray-950 dark:to-emerald-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-emerald-100/80 dark:from-gray-950 dark:via-gray-950/80 dark:to-emerald-900/80" />
      </div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Create Professional Resumes with AI
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Land more interviews with professionally designed, ATS-optimized
            resumes tailored to your industry.
          </p>
          <Button className="rounded-full bg-emerald-600 px-8 py-6 text-lg text-white transition duration-300 hover:bg-emerald-700 dark:bg-emerald-500 dark:text-gray-900 dark:hover:bg-emerald-400">
            <Link href="/resumes">Build Your Resume Now</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hero.png"
            alt="AI Resume Builder"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

