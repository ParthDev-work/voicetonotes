import Image from "next/image";

// Design.pdf §1 — rendered as a single flattened export.
// The previous build re-assembled this slide from separate absolutely
// positioned text + image layers; depending on which web-font fallback
// painted first, the wordmark and tagline boxes landed close enough to
// visually collide. Using the flattened design export removes that
// entire class of bug — this slide can never drift from Figma.

export default function Cover() {
  return (
    <section
      id="cover"
      aria-labelledby="cover-heading"
      className="relative bg-bg"
    >
      <h1 id="cover-heading" className="sr-only">
        VoiceToNotes — Stop Typing, Start Speaking.
      </h1>
      <div className="relative mx-auto aspect-[2016/1433] w-full max-w-[90rem]">
        <Image
          src="/assets/cover-full.png"
          alt="Pitch Deck — VoiceToNotes. Stop Typing, Start Speaking."
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
