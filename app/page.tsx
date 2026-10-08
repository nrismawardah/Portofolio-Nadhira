export default function Home() {
  return (
    <main className="font-helvetica min-h-screen p-10">
      <section className="space-y-10">
        <div>
          <p className="text-sm uppercase tracking-widest">
            Helvetica World — Regular
          </p>

          <h1 className="text-6xl">
            Nadhira Rismawardah
          </h1>

          <p className="mt-4 text-xl">
            Data Science · Artificial Intelligence · Web Development
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest">
            Helvetica World — Bold
          </p>

          <h2 className="font-bold text-5xl">
            This is Helvetica World Bold
          </h2>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest">
            Times New Roman MT Condensed
          </p>

          <h2 className="font-condensed text-7xl">
            This is Times New Roman MT Condensed
          </h2>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest">
            Times New Roman MT Condensed Italic
          </p>

          <h2 className="font-condensed italic text-7xl">
            This is Times New Roman MT Condensed Italic
          </h2>
        </div>
      </section>
    </main>
  );
}