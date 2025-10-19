// src/components/ui/ContactForm.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@components/ui/select'
import { getI18N } from '../i18n/index.ts'

export function ContactForm ({ currentLocale }: {currentLocale: string}) {
  const t = getI18N({ currentLocale })
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.contact.name_label} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
          placeholder={t.contact.name_placeholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.contact.email_label} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
          placeholder={t.contact.email_placeholder}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.contact.service_label} *
        </label>
        <Select>
          <SelectTrigger className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-[#b6bdc9] border-none h-12 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200">
            <SelectValue placeholder={t.contact.service_placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-accent-900 text-gray-900 dark:text-white border border-gray-300 dark:border-accent-700 rounded-md shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <SelectItem value="web-development">{t.contact.service_web}</SelectItem>
            <SelectItem value="ai-content">{t.contact.service_ai}</SelectItem>
            <SelectItem value="digital-marketing">{t.contact.service_marketing}</SelectItem>
            {/* <SelectItem value="full-package">Complete Package</SelectItem> */}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.contact.message_label} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-sm bg-accent-100 dark:bg-accent-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 resize-none"
          placeholder={t.contact.message_placeholder}
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="button">
          {t.contact.submit_button}
        </button>
      </div>
    </form>
  )
}
