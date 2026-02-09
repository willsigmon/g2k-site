export function About() {
  return (
    <section
      id="about"
      className="bg-zinc-50 py-20 sm:py-28 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-g2k-navy dark:text-white sm:text-4xl">
              About G2K Henderson
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              G2K — Get to Know — started with a simple idea: help people
              discover what makes their community special. Henderson, NC and
              Vance County have incredible people, places, and traditions. We
              just needed a better way to share them.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Located just 40 minutes north of Raleigh-Durham, Henderson is home
              to the stunning 50,000-acre Kerr Lake, a vibrant historic
              downtown, and a community that comes together for everything from
              farmers markets to car shows.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Our mission is to get people out the door and involved with their
              community, helping them have natural, organic revelations about
              things they are already interested in.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-g2k-navy to-g2k-blue p-8 text-white shadow-xl">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-6xl font-bold">G2K</p>
                <p className="mt-2 text-xl font-light tracking-widest">
                  HENDERSON
                </p>
                <div className="mt-6 h-px w-16 bg-g2k-gold" />
                <p className="mt-6 text-sm leading-6 text-blue-200">
                  100 South Garnett Street
                  <br />
                  Henderson, NC 27536
                  <br />
                  Vance County
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
