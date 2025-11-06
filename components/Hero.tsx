export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(46,136,255,0.25)_0%,rgba(46,136,255,0)_60%)]" />
      <div className="container-px mx-auto max-w-6xl pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="badge mb-6">
            <span className="size-2 rounded-full bg-brand-500" />
            <span>Modern learning platform</span>
          </div>
          <h1 className="mb-5">
            Learn smarter with Lumina Learning
          </h1>
          <p className="mb-8 text-lg text-slate-600">
            Personalized learning paths, AI-powered tutoring, and rich analytics ? built for schools, teams, and lifelong learners.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn-primary h-11 px-5">Get started</a>
            <a href="#demo" className="btn-secondary h-11 px-5">Book a demo</a>
          </div>
          <p className="mt-6 text-xs text-slate-500">No credit card required</p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
          <div className="card p-5 sm:p-6">
            <h3 className="mb-2">Adaptive, personalized learning</h3>
            <p>Curricula adapt in real-time to each learner&apos;s progress, keeping them engaged and challenged.</p>
          </div>
          <div className="card p-5 sm:p-6">
            <h3 className="mb-2">Built for outcomes</h3>
            <p>Measure understanding, not just completion ? rich analytics for educators and admins.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
