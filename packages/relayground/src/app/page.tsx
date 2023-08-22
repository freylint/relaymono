import Background from "./components/Background";

import Hero from "./components/Hero";
import StatusBadges from "./components/StatusBadges";

export default function Home() {
  return (
    <main>
      <section>
        <Hero Badges={StatusBadges} Background={Background} />
      </section>

      <Projects />
    </main>
  );
}

function Projects() {
  return (
    <section>
      <article>
        <h2>Relayground</h2>
      </article>
      <article>
        <h2>QAFTray</h2>
      </article>
      <article>
        <h2>Polyglot Workflow Packager</h2>
      </article>
    </section>
  );
}
