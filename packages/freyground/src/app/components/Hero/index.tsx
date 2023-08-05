//! Hero / SplasPage designed for website homepages

import Background from "../Background";

export default function Hero() {
  return (
    <div className="min-h-screen hero bg-base-200 splash-grid">
      <Background />
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to the RelayGround!</h1>
          <p className="py-6">
            A personal playground, blog, and project hosting site.
          </p>
          <button className="btn btn-primary">To Projects</button>
        </div>
      </div>
    </div>
  );
}
