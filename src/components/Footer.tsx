import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">ResumeAI</h3>
            <p className="text-gray-400 dark:text-gray-500">Empowering job seekers with AI-powered resumes and career resources.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white">Home</Link></li>
              <li><Link href="#features" className="text-gray-400 dark:text-gray-500 hover:text-white">Features</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 dark:text-gray-500 hover:text-white">Testimonials</Link></li>
              <li><Link href="/pricing" className="text-gray-400 dark:text-gray-500 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="https://www.freepik.com/" className="text-gray-400 dark:text-gray-500 hover:text-white">Images by @freepik</Link></li>
              <li><Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white">Career Tips</Link></li>
              <li><Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white">Interview Prep</Link></li>
              <li><Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white">Resume Templates</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 dark:text-gray-500 mb-2">support@resumeai.com</p>
            <p className="text-gray-400 dark:text-gray-500">1-800-RESUME-AI</p>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

