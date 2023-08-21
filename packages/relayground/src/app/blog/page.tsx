//! Blog browsing page

import BlogCard from "../components/BlogCard";
import { BlogPost } from "@site/interface/blog";
import { IOpener, Opener } from "../components/Opener";
import Background from "../components/Background";

export default function Blog() {
  const opener: IOpener = {
    title: "Freyground Blog",
    Content: () => {
      return <p>Welcome to the RelayGround blog page!</p>;
    },
  };

  return (
    <main>
      <Opener title={opener.title} Content={opener.Content} />
      <BlogCard blog={WorkplaceTension} />
      <Background />
    </main>
  );
}

const WorkplaceTension: BlogPost = {
  title: "Wound Like a Guitar String",
  date: new Date(2023, 7, 28),
  blurb: "Moving on and getting over it.",
  draft: true,
  Component: () => {
    return (
      <article className="max-w-xl font-serif">
        <p className="indent-4">
          I was set out to placate my mother. I wound up driving sprinter van
          between all the businesses that needed their letters express
          delivered. The job just never felt right to me. I couldn't say if it
          was the five hours of sleep or the naivety of my less misanthropic
          years, but I managed to make getting paid to listen to the radio and
          lift a 5lb box a few times a day into an olympic sport. This
          <i>"talent"</i> isn't something that's ever faded with time. It's even
          made this site a box of spiders.
        </p>
        <p className="indent-4">
          People always tell me, "Things like this go with age". One lady even
          told me "It'll go away in a recession or two". Am I deranged? Do
          things really just work out for these people? Surely their safety
          margins must be narrowing with the decades, right? Maybe I'd feel the
          same if I'd landed that cozy programming job I wasted my prime years
          working for, just for the market to collapse from obvious consequences
          of actions anyone with an eye not fixed on their own wallets.
        </p>
        <p className="indent-4"></p>
      </article>
    );
  },
};
