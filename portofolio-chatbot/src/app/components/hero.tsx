import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container section-padding flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm</span>
          <span className="block text-primary">Faisal Meah</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          I'm Faisal Meah, a full-stack developer specializing in building
          exceptional digital experiences. Currently, I'm focused on building
          accessible, human-centered products.
        </p>
        <div className="flex gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get in touch
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View my work
          </Link>
        </div>
      </div>
      <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
        <Image
          src="/Image20250228092821.jpg"
          alt="Your Name"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
