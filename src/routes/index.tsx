import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const OFFER_URL = "https://linkthem.net/aff_c?offer_id=5048&aff_id=156143";

const steps = [
  { title: "Click The Button Below", text: "Takes you to the secure reward page" },
  { title: "Enter Your Email & Info", text: "So the offer partner can match the card to you" },
  { title: "Complete At Least 3–5 Deals", text: "Choose the offers that suit you" },
  { title: "Claim Your Reward", text: "Gift card delivery follows partner terms" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Gift Card Rewards Offer" },
      { name: "description", content: "See how a third-party rewards program says you can work toward a $500 gift card." },
      { property: "og:title", content: "$500 Gift Card Rewards Offer" },
      { property: "og:description", content: "A third-party rewards offer. Requirements and terms apply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="page-glow flex min-h-screen items-start justify-center px-4 py-12 sm:py-20">
      <section className="offer-card relative w-full max-w-2xl rounded-[2rem] border border-border bg-card px-6 py-10 text-center sm:px-12">
        <div className="mb-7 flex justify-center">
          <img
            src="/cracker-barrel-logo.png"
            alt="Cracker Barrel Old Country Store"
            className="h-auto w-full max-w-[17rem] object-contain"
          />
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Get Your
          <span className="block text-primary">$500 Cracker Barrel</span>
          <span className="block">Gift Card</span>
        </h1>
        <h2 className="mt-12 text-xl font-semibold text-foreground">How to Claim Your Reward</h2>
        <ol className="mt-6 space-y-3 text-left">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-center gap-4 rounded-2xl border border-border bg-muted px-5 py-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={OFFER_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="mt-10 flex h-16 items-center justify-center gap-3 rounded-full bg-primary text-lg font-extrabold text-primary-foreground transition hover:brightness-105"
        >
          CLAIM NOW <ArrowRight className="size-5" />
        </a>
        <p className="mt-4 text-sm text-muted-foreground">Takes about 3 minutes</p>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Join 50,000+ satisfied members who have claimed their rewards.
        </p>
      </section>
    </main>
  );
}
