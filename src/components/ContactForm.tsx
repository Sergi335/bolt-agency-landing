// src/components/ui/ContactForm.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@components/ui/select'

export function ContactForm () {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Service Interested In
        </label>
        <Select>
          <SelectTrigger className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-[#b6bdc9] border-none h-12 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-accent-900 text-gray-900 dark:text-white border border-gray-300 dark:border-accent-700 rounded-md shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="ai-content">AI Content Generation</SelectItem>
            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
            <SelectItem value="full-package">Complete Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 resize-none"
          placeholder="Tell us about your project, goals, and requirements..."
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="button">
          Send Message
        </button>
      </div>
    </form>
  )
}
