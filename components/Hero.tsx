export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#FAF6F2]">

      {/* Soft luxury background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,164,106,0.16),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] flex-col items-center justify-center px-6 py-16 text-center">

        {/* Brand eyebrow */}
        <p className="bnp-eyebrow">
          BNP Silks
        </p>

        {/* Main heading */}
        <h1 className="bnp-serif max-w-[650px] text-[42px] font-normal leading-[1.05] tracking-[-0.02em] text-[#3D0A14] md:text-[56px]">
          Premium Silk Sarees
          <br />
          Crafted with Tradition
        </h1>

        {/* Gold detail */}
        <div className="bnp-gold-line" />

        {/* Supporting copy */}
        <p className="max-w-[520px] text-[14px] leading-[1.8] text-[#6F5B60] md:text-[15px]">
          Authentic Kanchipuram &amp; Dharmavaram Silks
          <br />
          Pure Silk Collections
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="/shop"
            className="bnp-button"
          >
            Explore Collection
          </a>

          <a
            href="/wedding"
            className="bnp-button bnp-button-outline"
          >
            Wedding Collection
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B7355]">
          <span>Wholesale</span>
          <span className="h-1 w-1 rounded-full bg-[#C8A46A]" />
          <span>Retail</span>
          <span className="h-1 w-1 rounded-full bg-[#C8A46A]" />
          <span>Pan India Delivery</span>
        </div>
      </div>
    </section>
  );
}