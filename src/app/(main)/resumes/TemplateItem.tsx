'use client'

import Image from 'next/image'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

const sampleTemplates = [
  { id: '1', name: 'Professional', imageSrc: '/placeholder.svg?height=400&width=300' },
  { id: '2', name: 'Creative', imageSrc: '/placeholder.svg?height=400&width=300' },
  { id: '3', name: 'Simple', imageSrc: '/placeholder.svg?height=400&width=300' },
  { id: '4', name: 'Modern', imageSrc: '/placeholder.svg?height=400&width=300' },
]

export function TemplateItem() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    // Here you would typically handle the template selection,
    // such as creating a new resume with the selected template
    console.log(`Selected template: ${templateId}`)
  }

  return (
    <div className=''>
      <h2 className="mb-4 text-xl font-semibold">Resume Templates</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sampleTemplates.map((template) => (
          <div key={template.id} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={template.imageSrc}
              alt={`${template.name} template`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <PlusCircle className="mb-2 h-12 w-12 text-white" />
              <span className="text-sm font-medium text-white">{template.name}</span>
            </div>
            <button
              onClick={() => handleTemplateSelect(template.id)}
              className="absolute inset-0 cursor-pointer"
              aria-label={`Select ${template.name} template`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

