import { FileText, Search, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: (
      <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "ATS-Friendly Templates",
    description:
      "Our templates are designed to pass through Applicant Tracking Systems with ease.",
  },
  {
    icon: <Zap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "AI-Powered Writing Assistance",
    description:
      "Get smart suggestions to improve your resume content and make it more impactful.",
  },
  {
    icon: <Search className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Keyword Optimization",
    description:
      "Automatically optimize your resume with industry-specific keywords to increase visibility.",
  },
  {
    icon: (
      <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "Interview Tips & Tricks",
    description:
      "Access a wealth of resources to help you ace your interviews and land your dream job.",
  },
];

export default function Features() {
  return (
    <section id="features" className="my-20">
      <div className="container mx-auto px-4 text-center bg-white py-20 dark:bg-gray-950" >
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Land Your Dream Job?
        </h2>
        <p className="mb-8 text-xl">
          Create your ATS-friendly resume now and increase your chances of
          getting interviewed.
        </p>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
