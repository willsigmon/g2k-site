export function Hero() {
  return (
    <section className="relative overflow-hidden bg-g2k-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-g2k-navy via-g2k-navy-dark to-g2k-navy opacity-90" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-g2k-gold">
            Coming Soon to the App Store
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            G2K Henderson
          </h1>
          <p className="mt-2 text-xl font-light tracking-wide text-blue-200 sm:text-2xl">
            Get to Know Your Community
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">
            Discover local events, explore hidden gems, and connect with
            Henderson, NC and Vance County. Your pocket guide to everything
            happening in your hometown.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#features"
              className="rounded-full bg-g2k-gold px-8 py-3 text-sm font-semibold text-g2k-navy shadow-lg transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-g2k-gold"
            >
              Learn More
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-white transition hover:text-g2k-gold"
            >
              Our Story <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[#0a0a0a]" />
    </section>
  );
}
