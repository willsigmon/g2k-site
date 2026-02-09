export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-g2k-navy dark:text-white">
              G2K Henderson
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Get to Know Your Community
            </p>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; {year} G2K Henderson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
