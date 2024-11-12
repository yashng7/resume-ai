import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { formatDate } from "date-fns";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { ResumeTemplates } from "@/app/(main)/editor/TemplateButton";
import { Link2, Linkedin } from "lucide-react";
import Link from "next/link";

const templateStyles = {
  [ResumeTemplates.CLASSIC]: {
    bgClass: "bg-white text-black",
    containerClass: "p-2  max-w-5xl mx-auto",
    headerClass: "flex items-start mb-2",
    heading: "text-4xl font-bold tracking-tight mb-1",
    subHeading: "",
    para: "flex gap-4 text-sm mt-1",
    photoClass: "w-32 h-32 hidden",
    mainContentClass: "space-y-2",
    sideContentClass: "space-y-2",
    sectionClass: "space-y-2",
    skillsClass: "",
    skill: "flex flex-wrap gap-1",
    badgeClass: "px-3 py-1 text-sm font-medium bg-white text-black shadow-none",
    hrClass: "border my-2",
  },
  [ResumeTemplates.MODERN]: {
    bgClass: "bg-white text-gray-800",
    containerClass: "gap-10 p-8 md:p-10 bg-orange-200 rounded-md",
    headerClass: "flex items-center gap-6 mb-6 p-4 bg-white",
    heading: "text-4xl font-bold tracking-tight mb-2",
    subHeading: "",
    para: "",
    photoClass: "w-32 h-32",
    mainContentClass: "space-y-6",
    sideContentClass: "space-y-4",
    sectionClass: "space-y-4 bg-white shadow-md rounded-lg p-4",
    skillsClass: "bg-white p-4 rounded-lg shadow-md  mt-6",
    skill: "flex flex-wrap gap-1",
    badgeClass:
      "px-3 py-1 text-sm font-medium bg-white text-black hover:bg-orange-100",
    hrClass: "hidden",
  },

  [ResumeTemplates.MINIMAL]: {
    bgClass: "bg-white text-gray-800",
    containerClass: "p-12 max-w-4xl mx-auto space-y-8 border",
    headerClass: "flex flex-row-reverse items-center gap-4",
    heading: "text-3xl",
    subHeading: "",
    para: "",
    photoClass: "w-32 h-32 mx-auto border",
    mainContentClass: "space-y-10",
    sideContentClass: "pt-6",
    sectionClass: "space-y-6",
    skillsClass: "",
    skill: "flex flex-wrap gap-1",
    badgeClass: "",
    hrClass: "border-t opacity-20 my-6",
  },
  [ResumeTemplates.ELEGANT]: {
    bgClass: "bg-teal-700 ",
    containerClass: "p-5 space-y-6 max-w-5xl mx-auto border ",
    headerClass: "flex flex-col gap-8 mb-8",
    heading: "text-4xl",
    subHeading: "",
    para: "flex",
    photoClass: "w-32 h-32",
    mainContentClass: "space-y-8",
    sideContentClass: "space-y-6",
    sectionClass: "space-y-4",
    skillsClass: "",
    skill: "",
    badgeClass: "",
    hrClass: "border-2 my-6",
  },
  [ResumeTemplates.CREATIVE]: {
    bgClass: "bg-white text-gray-800",
    containerClass:
      "grid grid-cols-12 gap-6 p-8 bg-gradient-to-br from-purple-100 to-pink-100",
    headerClass: "col-span-12 flex justify-between items-center mb-10 gap-8",
    heading: "",
    subHeading: "",
    para: "",
    photoClass: "w-36 h-36 border-4 border-purple-500",
    mainContentClass: "col-span-8 space-y-10",
    sideContentClass: "col-span-4 space-y-8",
    sectionClass:
      "bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg",
    skillsClass: "flex flex-wrap gap-2",
    skill: "",
    badgeClass: "",
    hrClass: "my-8 border-t-2 border-purple-300",
  },
  [ResumeTemplates.PROFESSIONAL]: {
    bgClass: "bg-white text-black",
    containerClass: "p-10 space-y-6 max-w-5xl mx-auto",
    headerClass: "flex items-start gap-8 mb-8",
    heading: "",
    subHeading: "",
    para: "",
    photoClass: "w-32 h-32",
    mainContentClass: "space-y-8",
    sideContentClass: "space-y-6",
    sectionClass: "space-y-4",
    skillsClass: "flex flex-wrap gap-2",
    skill: "",
    badgeClass: "",
    hrClass: "border-2 my-6",
  },
} as const;

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
  className?: string;
  hrClassName?: string;
  photoClassName?: string;
  badgeClassName?: string;
  skill?: string;
  headingClass?: string;
  paraClass?: string;
}

export default function ResumePreview({
  resumeData,
  contentRef,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);
  // const styles = useTemplateStyles(
  //   resumeData.template || ResumeTemplates.CLASSIC,
  // );
  const { template = ResumeTemplates.CLASSIC } = resumeData;
  const styles = templateStyles[template];

  return (
    <div
      className={cn("h-fit w-full p-4", styles.bgClass, className)}
      ref={containerRef}
    >
      <div
        className={styles.containerClass}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <PersonalInfoHeader
          resumeData={resumeData}
          className={styles.headerClass}
          photoClassName={styles.photoClass}
          headingClass={styles.heading}
          paraClass={styles.para}
        />
        <div className={styles.mainContentClass}>
          <SummarySection
            resumeData={resumeData}
            className={styles.sectionClass}
            hrClassName={styles.hrClass}
          />
          <WorkExperienceSection
            resumeData={resumeData}
            className={styles.sectionClass}
            hrClassName={styles.hrClass}
          />
          <CertificationSection
            resumeData={resumeData}
            className={styles.sectionClass}
            hrClassName={styles.hrClass}
          />
          <EducationSection
            resumeData={resumeData}
            className={styles.sectionClass}
            hrClassName={styles.hrClass}
          />
        </div>
        <div className={styles.sideContentClass}>
          <SkillsSection
            resumeData={resumeData}
            className={styles.skillsClass}
            skill={styles.skill}
            badgeClassName={styles.badgeClass}
            hrClassName={styles.hrClass}
          />
        </div>
      </div>
    </div>
  );
}

function PersonalInfoHeader({
  resumeData,
  className,
  photoClassName,
  headingClass,
  paraClass,
}: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    website,
    linkedIn,
    colorHex,
    borderStyle,
  } = resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div className={className}>
      {photoSrc && (
        <Image
          src={photoSrc}
          width={144}
          height={144}
          alt="Author photo"
          className={cn("object-cover", photoClassName)}
          style={{
            borderRadius:
              borderStyle === BorderStyles.SQUARE
                ? "0px"
                : borderStyle === BorderStyles.CIRCLE
                  ? "9999px"
                  : "12px",
            borderColor: colorHex,
          }}
        />
      )}
      <div className="flex-1">
        <div>
          <h1 className={headingClass} style={{ color: colorHex }}>
            {[firstName, lastName].filter(Boolean).join(" ")}
          </h1>
          <p className="text-xl font-medium">{jobTitle}</p>
        </div>
        <div className={paraClass}>
          {(city || country) && (
            <p className="flex items-center gap-1">
              {[city, country].filter(Boolean).join(", ")}
            </p>
          )}
          {phone && <p className="flex items-center gap-1">{phone}</p>}
          {email && <p className="flex items-center gap-1">{email}</p>}
        </div>
        <div className={cn("", paraClass)}>
          <span className="flex items-center gap-2">
            <Link2 className="w-3" />
            {website && <p>{website}</p>}
          </span>
          <span className="flex items-center gap-2">
            <Linkedin className="w-3" />
            {linkedIn && <p>{linkedIn}</p>}
          </span>
        </div>
      </div>
    </div>
  );
}

function SummarySection({
  resumeData,
  className,
  hrClassName,
}: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;

  if (!summary) return null;

  return (
    <div>
      <hr className={hrClassName} style={{ borderColor: colorHex }} />
      <div className={className}>
        <h2
          className="mb-2 text-xl font-semibold tracking-wide"
          style={{ color: colorHex }}
        >
          Professional Summary
        </h2>
        <div className="leading-relaxed">{summary}</div>
      </div>
    </div>
  );
}

function WorkExperienceSection({
  resumeData,
  className,
  hrClassName,
}: ResumeSectionProps) {
  const { workExperiences, colorHex } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <div>
      <hr className={hrClassName} style={{ borderColor: colorHex }} />
      <div className={className}>
        <h2
          className="mb-2 text-xl font-semibold tracking-wide"
          style={{ color: colorHex }}
        >
          Work Experience
        </h2>
        <div className="space-y-4">
          {workExperiencesNotEmpty.map((exp, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-baseline justify-between">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: colorHex }}
                >
                  {exp.position}
                </h3>
                {exp.startDate && (
                  <span className="text-sm">
                    {formatDate(exp.startDate, "MMM yyyy")} -{" "}
                    {exp.endDate
                      ? formatDate(exp.endDate, "MMM yyyy")
                      : "Present"}
                  </span>
                )}
              </div>
              <p className="text-base font-medium">{exp.company}</p>
              <p className="whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationSection({
  resumeData,
  className,
  hrClassName,
}: ResumeSectionProps) {
  const { educations, colorHex } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <div>
      <hr className={hrClassName} style={{ borderColor: colorHex }} />
      <div className={className}>
        <h2
          className="mb-2 text-xl font-semibold tracking-wide"
          style={{ color: colorHex }}
        >
          Education
        </h2>
        <div className="space-y-4">
          {educationsNotEmpty.map((edu, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-baseline justify-between">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: colorHex }}
                >
                  {edu.degree}
                </h3>
                {edu.startDate && (
                  <span className="text-sm">
                    {formatDate(edu.startDate, "MMM yyyy")}
                    {edu.endDate && ` - ${formatDate(edu.endDate, "MMM yyyy")}`}
                  </span>
                )}
              </div>
              <p className="text-base font-medium">{edu.school}</p>
              {edu.description && (
                <p className="whitespace-pre-line">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationSection({
  resumeData,
  className,
  hrClassName,
}: ResumeSectionProps) {
  const { certifications, colorHex } = resumeData;

  const certificationsNotEmpty = certifications?.filter(
    (cert) => Object.values(cert).filter(Boolean).length > 0,
  );

  if (!certificationsNotEmpty?.length) return null;

  return (
    <div>
      <hr className={hrClassName} style={{ borderColor: colorHex }} />
      <div className={className}>
        <h2
          className="mb-2 text-xl font-semibold tracking-wide"
          style={{ color: colorHex }}
        >
          Certifications
        </h2>
        <div className="space-y-4">
          {certificationsNotEmpty.map((cert, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-baseline justify-between">
                <Link href={cert.link || ""}>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: colorHex }}
                  >
                    {cert.title}
                  </h3>
                </Link>
                {cert.startDate && (
                  <span className="text-sm">
                    {formatDate(cert.startDate, "MMM yyyy")}
                  </span>
                )}
              </div>
              <p className="text-base font-medium">{cert.subtitle}</p>
              <p className="whitespace-pre-line">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSection({
  resumeData,
  className,
  hrClassName,
  badgeClassName,
  skill,
}: ResumeSectionProps) {
  const { skills, colorHex, borderStyle } = resumeData;

  if (!skills?.length) return null;

  return (
    <div className={className}>
      <hr className={hrClassName} style={{ borderColor: colorHex }} />
      <div>
        <h2
          className="mb-2 text-xl font-semibold tracking-wide"
          style={{ color: colorHex }}
        >
          Skills
        </h2>
        <div className={skill}>
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className={badgeClassName}
              style={{
                borderColor: colorHex,

                borderRadius:
                  borderStyle === BorderStyles.SQUARE
                    ? "0px"
                    : borderStyle === BorderStyles.CIRCLE
                      ? "9999px"
                      : "6px",
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
