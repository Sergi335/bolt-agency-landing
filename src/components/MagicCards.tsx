import { MagicCard } from '@components/magicui/magic-card'
import { useRef } from 'react'
import { getI18N } from '../i18n/index.ts'
export default function MagicCards ({ currentLocale }: {currentLocale: string}) {
  const t = getI18N({ currentLocale })
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const buttons = document.querySelectorAll('#services button') as NodeListOf<HTMLButtonElement>
  //   const images = document.querySelectorAll('#services img') as NodeListOf<HTMLImageElement>

  //   // Limpiar todos
  //   buttons.forEach(btn => btn.style.viewTransitionName = '')
  //   images.forEach(img => img.style.viewTransitionName = '')

  //   // Asignar solo al clickeado
  //   e.currentTarget.style.viewTransitionName = 'button'

  //   const cardClass = e.currentTarget.id
  //   const cardRef = cardClass === 'card1' ? card1Ref : cardClass === 'card2' ? card2Ref : card3Ref

  //   images.forEach(img => {
  //     if (img.classList.contains(cardClass)) {
  //       img.style.viewTransitionName = 'image'
  //     }
  //   })

  //   document.startViewTransition(() => {
  //     cardRef.current?.classList.toggle('card_active')
  //   })
  // }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <div id='card1' ref={card1Ref}>
        <MagicCard gradientColor={'var(--magic-gradient)'} className="p-[1px] rounded-lg bg-primary">
          <div className='flex'>
            <div className='flex-1'>
              <img className="card1 rounded-t-lg object-cover aspect-video w-full" src="/img2.png" alt="" />
            </div>
            <div className="flex-col gallery hidden gap-2 p-2">
              <img className='max-w-80' src="/img4.png" alt="Random Image" />
              <img className='max-w-80' src="/img4.png" alt="Random Image" />
              <img className='max-w-80' src="/img4.png" alt="Random Image" />
            </div>
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">{t.services.web_design.title}</h5>
            <p className="mb-7 font-normal text-text-secondary">{t.services.web_design.description}</p>
            {/* <button id='card1' onClick={handleClick} className="button !inline-flex">
              {t.services.cta}
            </button> */}
          </div>
        </MagicCard>
      </div>

      {/* <!-- AI Media --> */}
      <div id='card2' ref={card2Ref}>
        <MagicCard gradientColor={'var(--magic-gradient)'} className="p-[1px] rounded-lg bg-primary">

          {/* <img className="rounded-t-lg object-cover aspect-video" src="/img4.png" alt="" /> */}
          <video src="/video_1.mp4" muted className="rounded-t-lg object-cover aspect-video"></video>

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">{t.services.ai_media.title}</h5>

            <p className="mb-7 font-normal text-text-secondary">{t.services.ai_media.description}</p>
            <div className="flex gap-4 justify-between items-center">
              {/* <button id='card2' onClick={handleClick} className="button !inline-flex">
                {t.services.cta}
              </button> */}
              <div className="flex gap-2">
                {/* <OpenAiIcon className={'w-6 h-6'} fill="currentColor" title="OpenAI" />
                <GeminiIcon className={'w-6 h-6'} fill="currentColor" title="Google Gemini" />
                <AnthropicIcon className={'w-6 h-6'} fill="currentColor" title="Anthropic" /> */}
              </div>
            </div>
          </div>
        </MagicCard>
      </div>

      {/* <!-- Marketing --> */}
      <div id='card3' ref={card3Ref}>
        <MagicCard gradientColor={'var(--magic-gradient)'} className="p-[1px] rounded-lg bg-primary">

          <img className="card3 rounded-t-lg object-cover aspect-video w-full" src="/img3.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">{t.services.marketing.title}</h5>

            <p className="mb-7 font-normal text-text-secondary">{t.services.marketing.description}</p>
            {/* <button id='card3' onClick={handleClick} className="!inline-flex button">
              {t.services.cta}
            </button> */}
          </div>
        </MagicCard>
      </div>

    </div>
  )
}
