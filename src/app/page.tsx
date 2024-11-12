import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "King Thomas",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148903009.jpg?t=st=1736421883~exp=1736425483~hmac=db79df9623f596edfe89e45379653f3605114b6c5e54f26ccb66e34ccc7d51eb&w=826",
  },
  {
    title: "Susan su",
    link: "/resumes",
    thumbnail:
      "https://img.freepik.com/free-vector/cv-template_23-2148573259.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Jane Amanda",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template-design_23-2148556696.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Albert Michael",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template-design_23-2148556696.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "John Doe",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/modern-resume-template_23-2147834922.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Scotty Loe",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/modern-curriculum-vitae-template_23-2148701180.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Rachel Scott",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148566273.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "James Smith",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148566273.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Elizabeth Rodreg",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-curriculum-vitae-template-with-photo_23-2148689960.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Lizzle johan",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/curriculum-vitae-template_23-2148561448.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Williams Smiths",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-curriculum-vitae-template-with-photo_23-2148689960.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Claire Shaw",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148899867.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Esther Smith",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/simple-gradient-banking-resume_742173-10861.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Patricia Davis",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-vector/nurse-resume-template-design_742173-19632.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
  {
    title: "Sophia Miller",
    link: "",
    thumbnail:
      "https://img.freepik.com/free-psd/volunteer-template-design_23-2151604824.jpg?uid=R104422437&ga=GA1.1.1044057551.1735632530",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <HeroParallax products={products} />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
