import Link from "next/link";

const collections = [
  {
    title: "Wedding Collection",
    subtitle: "For moments that become memories",
    image: "/collections/wedding.png",
    link: "/wedding",
  },
  {
    title: "Pure Silk",
    subtitle: "The timeless beauty of pure silk",
    image: "/collections/pure-silk.png",
    link: "/pure-silk",
  },
  {
    title: "Soft Silk",
    subtitle: "Graceful. Elegant. Effortless.",
    image: "/collections/soft-silk.png",
    link: "/shop?category=soft-silk",
  },
  {
    title: "Party Wear",
    subtitle: "Make every occasion yours",
    image: "/collections/party-wear.png",
    link: "/shop?category=party-wear",
  },
];

export default function Collections() {
  return (
    <section className="bnp-section bg-[#FAF6F2]">
      <div className="bnp-container">

        {/* Heading */}
        <div className="text-center">
          <p className="bnp-eyebrow">
            Discover BNP Silks
          </p>

          <h2 className="bnp-heading">
            Collections Made to Be Remembered
          </h2>

          <div className="bnp-gold-line" />

          <p className="bnp-description">
            From timeless pure silks to unforgettable wedding sarees,
            discover collections crafted for every beautiful occasion.
          </p>
        </div>

        {/* Collection cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.link}
              className="group overflow-hidden rounded-[12px] bg-white shadow-[0_4px_20px_rgba(122,23,52,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(122,23,52,0.12)]"
            >

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EADDC2]/30">

                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2A0A12]/70 to-transparent" />

                {/* Text over image */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="bnp-serif text-[20px] leading-tight">
                    {collection.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-[1.5] text-white/80">
                    {collection.subtitle}
                  </p>
                </div>
              </div>

            </Link>
          ))}

        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1734] transition hover:text-[#C8A46A]"
          >
            View All Collections
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}