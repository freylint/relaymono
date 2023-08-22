//! Hero / SplashPage designed for website homepages

import React from "react";

interface Props {
  Badges: React.ComponentType;
  Background: React.ComponentType;
}

export default function Hero({ Badges, Background }: Props) {
  return (
    <div className="min-h-screen hero bg-base-200 splash-grid">
      {Background && <Background />}
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to the RelayGround!</h1>
          <p className="py-6">
            A personal playground, blog, and project hosting site.
          </p>
          {Badges && <Badges />}
          <button className="btn btn-primary">To Projects</button>
        </div>
      </div>
    </div>
  );
}
