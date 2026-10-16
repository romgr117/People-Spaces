import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Check } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { people2 } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site } from '../content/site'

const projectTypes = [...site.sectors, 'Something else'] as const

const schema = z.object({
  name: z.string().trim().min(1, 'Please tell us your name'),
  email: z.email('Please enter a valid email address'),
  projectType: z.enum(projectTypes, 'Please choose one'),
  message: z.string().trim().min(10, 'Tell us a little more (at least 10 characters)'),
})

type FormValues = z.infer<typeof schema>

export function Contact() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  // No backend yet: hand the message over to the visitor's email app.
  const onSubmit = (values: FormValues) => {
    const subject = `${values.projectType} enquiry from ${values.name}`
    const body = `${values.message}\n\n${values.name}\n${values.email}`
    window.location.assign(`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    setSent(true)
  }

  return (
    <>
      <title>Contact · People + Spaces</title>

      <PageHero eyebrow="Contact" title="Let's get to know each other" note="the fun part starts here">
        <p>
          Tell us about your space and the people in it: how you live, work or welcome guests, and what you'd love
          to feel when you walk through the door.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:px-12">
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input {...register('name')} autoComplete="name" className={inputClass} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register('email')} type="email" autoComplete="email" className={inputClass} />
              </Field>
            </div>

            <fieldset>
              <legend className="eyebrow text-ink-soft">Your project</legend>
              <div className="mt-4 flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <label key={type} className="cursor-pointer">
                    <input {...register('projectType')} type="radio" value={type} className="peer sr-only" />
                    <span className="eyebrow block rounded-full border border-ink/25 px-5 py-3 transition-colors peer-checked:border-olive peer-checked:bg-olive peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-olive hover:border-olive">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
              {errors.projectType && <ErrorText>{errors.projectType.message}</ErrorText>}
            </fieldset>

            <Field label="Tell us about it" error={errors.message?.message}>
              <textarea {...register('message')} rows={5} className={`${inputClass} resize-y`} />
            </Field>

            <button
              type="submit"
              className="eyebrow group inline-flex items-center gap-3 rounded-full bg-olive px-7 py-4 text-paper transition-colors hover:bg-olive-deep"
            >
              Send message
              <ArrowRight strokeWidth={1.25} className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            {sent && (
              <p role="status" className="flex items-center gap-2 text-olive">
                <Check className="size-4" /> Your email app should now open with your message ready to send.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.15} className="space-y-10">
          <div>
            <p className="eyebrow text-ink-soft">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 inline-block text-xl underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-ink-soft">We design for</p>
            <p className="mt-2 text-xl">{site.sectors.join(' · ')}</p>
          </div>
          <div className="overflow-hidden rounded-sm bg-olive">
            <img src={people2} alt="" className="w-full" loading="lazy" />
          </div>
        </Reveal>
      </section>
    </>
  )
}

const inputClass =
  'mt-3 block w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-lg text-ink transition-colors placeholder:text-ink-soft/50 focus:border-olive focus:ring-0 focus:outline-none aria-[invalid=true]:border-terracotta'

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-ink-soft">{label}</span>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  )
}

function ErrorText({ children }: { children: ReactNode }) {
  return <span className="mt-2 block text-sm text-terracotta">{children}</span>
}
