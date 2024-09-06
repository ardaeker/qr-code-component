export default function Page() {
  return (
    <div>
      <header className="sr-only">
        <h1>QR code component</h1>
      </header>
      <main className="flex min-h-screen items-center justify-center p-6 py-10 sm:p-0">
        <article className="max-w-card rounded-card shadow-card bg-white p-4 pb-10 text-center">
          <img
            src="/image-qr-code.png"
            alt="Scan this QR code to visit Frontend Mentor website"
            fetchPriority="high"
            loading="eager"
            className="rounded-qr-code size-full"
          />
          <h2 className="text-dark-navy mt-6 text-[1.375rem] font-bold leading-[1.75rem]">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-gray mx-auto mt-4 max-w-[16rem] text-[0.9375rem] leading-[1.1875rem] tracking-[0.188px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </article>
      </main>
      <footer className="sr-only">
        <p>Challenge by Frontend Mentor</p>
        <p>
          This website is built with Tailwind CSS and NextJS. Made with love by
          Arda Eker.
        </p>
      </footer>
    </div>
  );
}
