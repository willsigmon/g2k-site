const features = [
  {
    icon: "🗺️",
    title: "Explore Local Places",
    description:
      "Discover restaurants, parks, landmarks, and hidden gems across Henderson and Vance County with an interactive map.",
  },
  {
    icon: "📅",
    title: "Local Events Calendar",
    description:
      "Never miss the Farmers Market, car shows at Kerr Lake, or downtown festivals. All community events in one place.",
  },
  {
    icon: "🏆",
    title: "Curated Experiences",
    description:
      "Follow handcrafted itineraries like the Historic Henderson Walking Tour or the Local Flavors Food Trail.",
  },
  {
    icon: "⭐",
    title: "Explorer Score",
    description:
      "Earn points for checking in, attending events, and exploring your community. Unlock badges and climb the ranks.",
  },
  {
    icon: "🧭",
    title: "Turn-by-Turn Navigation",
    description:
      "Get walking and driving directions to any place with voice-guided navigation built right into the app.",
  },
  {
    icon: "📱",
    title: "AR Explore Mode",
    description:
      "Point your camera to discover nearby places with augmented reality overlays showing distance and details.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-g2k-navy dark:text-white sm:text-4xl">
            Everything You Need to Explore Henderson
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            G2K Henderson puts your community at your fingertips with powerful
            tools designed to get you out the door and involved.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-g2k-navy dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
