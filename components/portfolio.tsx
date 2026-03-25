"use client"

import { useState } from "react"
import Link from "next/link"

const portfolioItems = [
    {
        title: "ZimGro Consultancy",
        url: "https://zimgroconsultancy.com/",
        image: "/images/portfolio-zimgro.jpeg",
        description: "Full Website Development with responsive design for ZimGro Consultancy.",
        category: "Web Development"
    },
    {
        title: "CIDA",
        url: "https://www.cida.org.zw/",
        image: "/images/portfolio-cida.jpg",
        description: "Website design and SEO optimization for CIDA.",
        category: "Web Development"
    },
    {
        title: "Arnel Goboza",
        url: "https://www.arnelgoboza.co.zw/",
        image: "/images/portfolio-arnel.jpeg",
        description: "Portfolio website with branding and responsive design.",
        category: "Branding & Graphic Design"
    }
]

const categories = ["All", "Web Development", "Branding & Graphic Design", "Digital Marketing"]

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems =
        activeCategory === "All"
            ? portfolioItems
            : portfolioItems.filter(item => item.category === activeCategory)

    return (
        <section id="portfolio" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
                        Our Work
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Portfolio of <span className="text-primary">Client Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A showcase of websites and projects we've built for our clients, helping businesses grow online.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex justify-center mb-8 flex-wrap gap-3">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full border ${
                                activeCategory === cat
                                    ? "bg-primary text-white border-primary"
                                    : "bg-background text-foreground border-border"
                            } transition-colors`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <Link
                            key={item.title}
                            href={item.url}
                            target="_blank"
                            className="group border border-border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                        >
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4 bg-background">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}