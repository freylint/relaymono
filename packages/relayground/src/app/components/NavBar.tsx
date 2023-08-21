//! Navigation bar component

"use client";

import { useRouter } from "next/navigation";
import Statics from "../../statics.json";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Burger />
        <a className="btn btn-ghost normal-case text-xl">RelayGround</a>
      </div>
      <div className="navbar-center">
        <NavButtons />
      </div>
      <div className="navbar-end">
        <SearchBar />
      </div>
    </div>
  );
}

export function Burger() {
  return (
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        >
        </path>
      </svg>
    </button>
  );
}

export function NavButtons() {
  const router = useRouter();
  // Render the buttons
  return (
    <nav className="btn-group">
      {Statics.ManuallyNavigablePages.map((page) => {
        return (
          <input
            type="radio"
            name="options"
            key={page}
            data-title={page}
            className="btn"
            onClick={() => {
              if (page == "Home") {
                router.push("/");
              } else {
                router.push("/" + page.toLowerCase());
              }
            }}
          />
        );
      })}
    </nav>
  );
}

export function SearchBar() {
  return (
    <div className="form-control flex flex-row">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
      />
      <div className="navbar-end">
        <a className="btn">Search</a>
      </div>
    </div>
  );
}
