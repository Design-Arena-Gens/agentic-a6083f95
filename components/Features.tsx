const features = [
  {
    title: 'Personalized Paths',
    description:
      'Adaptive learning journeys customized to each learner?s pace, goals, and mastery.',
    icon: '??',
  },
  {
    title: 'AI Tutoring',
    description:
      'On-demand explanations, practice, and feedback to accelerate understanding.',
    icon: '??',
  },
  {
    title: 'Actionable Analytics',
    description:
      'Clear insights on progress, gaps, and engagement for educators and leaders.',
    icon: '??',
  },
  {
    title: 'Seamless Integrations',
    description:
      'Works with your LMS, SSO, and classroom tools to fit right in.',
    icon: '??',
  },
];

export default function Features() {
  return (
    <section id="features" className="container-px mx-auto max-w-6xl py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4">Everything you need to help learners thrive</h2>
        <p>Designed with educators, administrators, and learners to deliver real outcomes.</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <div className="mb-4 text-3xl">{f.icon}</div>
            <h3 className="mb-1">{f.title}</h3>
            <p className="text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
