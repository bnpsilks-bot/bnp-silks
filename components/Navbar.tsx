"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#EADDC2]/60 bg-[#FAF6F2]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 md:h-[76px] md:px-8">

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center text-[#7A1734] lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-[#7A1734]" />
              <span className="h-px w-5 bg-[#7A1734]" />
              <span className="h-px w-3.5 bg-[#7A1734]" />
            </span>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A1734] transition hover:text-[#C8A46A]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A4A4A] transition hover:text-[#7A1734]"
            >
              Shop
            </Link>

            <Link
              href="/wedding"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A4A4A] transition hover:text-[#7A1734]"
            >
              Wedding
            </Link>
          </nav>

          {/* LOGO */}
          <Link
            href="/"
            aria-label="BNP Silks Home"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <div className="text-center">
              <div className="bnp-serif text-[25px] font-bold tracking-[0.08em] text-[#7A1734]">
                BNP
              </div>

              <div className="-mt-1 text-[7px] font-semibold uppercase tracking-[0.28em] text-[#C8A46A]">
                Silks
              </div>
            </div>
          </Link>

          {/* RIGHT NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/pure-silk"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A4A4A] transition hover:text-[#7A1734]"
            >
              Pure Silk
            </Link>

            <Link
              href="/collections"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A4A4A] transition hover:text-[#7A1734]"
            >
              Collections
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="ml-auto flex items-center gap-1">

            {/* SEARCH */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[#7A1734] transition hover:text-[#C8A46A]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </button>

            {/* LOVE */}
            <button
              type="button"
              aria-label="Wishlist"
              onClick={() => setLiked(!liked)}
              className={`flex h-10 w-10 items-center justify-center transition ${
                liked ? "text-[#7A1734]" : "text-[#4A4A4A]"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={liked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z" />
              </svg>
            </button>

            {/* BAG */}
            <button
              type="button"
              aria-label="Shopping bag"
              onClick={() => setBagOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center text-[#7A1734] transition hover:text-[#C8A46A]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M5 8h14l-1 13H6L5 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>

              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7A1734] px-1 text-[8px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[68px] z-40 border-b border-[#EADDC2] bg-[#FAF6F2] shadow-lg lg:hidden">
          <nav className="flex flex-col px-6 py-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#EADDC2]/60 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7A1734]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#EADDC2]/60 py-4 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Shop
            </Link>

            <Link
              href="/wedding"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#EADDC2]/60 py-4 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Wedding
            </Link>

            <Link
              href="/pure-silk"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#EADDC2]/60 py-4 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Pure Silk
            </Link>

            <Link
              href="/collections"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Collections
            </Link>
          </nav>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-[#2A0A12]/60 backdrop-blur-sm">
          <div className="absolute left-1/2 top-0 w-full max-w-[700px] -translate-x-1/2 bg-[#FAF6F2] px-5 pb-8 pt-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <span className="bnp-serif text-[24px] text-[#7A1734]">
                Search BNP Silks
              </span>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="flex h-10 w-10 items-center justify-center text-[#7A1734]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex border-b border-[#7A1734] pb-3">
              <input
                autoFocus
                type="search"
                placeholder="Search sarees, collections..."
                className="w-full bg-transparent text-[15px] text-[#2A0A12] outline-none placeholder:text-[#7A1734]/40"
              />

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7A1734"
                strokeWidth="1.7"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#8B7355]">
              Search will connect to your saree catalogue
            </p>
          </div>
        </div>
      )}

      {/* BAG DRAWER */}
      {bagOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40">
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-[420px] flex-col bg-[#FAF6F2] shadow-2xl">

            <div className="flex items-center justify-between border-b border-[#EADDC2] px-5 py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A46A]">
                  Your
                </p>

                <h2 className="bnp-serif text-[26px] text-[#7A1734]">
                  Shopping Bag
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setBagOpen(false)}
                aria-label="Close bag"
                className="flex h-10 w-10 items-center justify-center text-[#7A1734]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#EADDC2] text-[#C8A46A]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M5 8h14l-1 13H6L5 8Z" />
                  <path d="M9 8a3 3 0 0 1 6 0" />
                </svg>
              </div>

              <h3 className="bnp-serif text-[24px] text-[#7A1734]">
                Your bag is empty
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-[#6F5B60]">
                Explore our collections and discover a saree made for your
                story.
              </p>

              <Link
                href="/shop"
                onClick={() => setBagOpen(false)}
                className="bnp-button mt-6"
              >
                Explore Sarees
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}