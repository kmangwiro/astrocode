"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
    {
        title: "ZimGro Consultancy",
        url: "https://zimgroconsultancy.com/",
        image: "/images/portfolio-zimgro.jpeg",
        description: "Full website development with responsive design.",
        category: "Web Development",
    },
    {
        title: "CIDA",
        url: "https://www.cida.org.zw/",
        image: "/images/portfolio-cida.jpg",
        description: "Website design and SEO optimization.",
        category: "Web Development",
    },
    {
        title: "Arnel Goboza",
        url: "https://www.arnelgoboza.co.zw/",
        image: "/images/portfolio-arnel.jpeg",
        description: "Portfolio website with branding and responsive design.",
        category: "Branding & Design",
    },
]

const categories = ["All", "Web Development", "Branding & Design"]

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems =
        activeCategory === "All"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory)

    return (
        <section id="portfolio" className="py-24 md:py-32 relative">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
                        Our Work
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Real Projects. <span className="text-primary">Real Results.</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Here are some of the businesses we've helped grow using technology, design, and strategy.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-10 flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                                activeCategory === cat
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-background border border-border text-muted-foreground hover:text-primary"
                            }
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            target="_blank"
                            className="
                group relative overflow-hidden rounded-2xl border border-border
                bg-background/80 backdrop-blur

                shadow-md hover:shadow-2xl

                transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.03]
              "
                        >

                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 relative">

                                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                                    {item.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>

                            </div>

                            {/* Glow */}
                            <div className="
                absolute inset-0 rounded-2xl pointer-events-none
                opacity-0 group-hover:opacity-100
                transition duration-500
                shadow-[0_0_40px_rgba(59,130,246,0.25)]
              " />

                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}