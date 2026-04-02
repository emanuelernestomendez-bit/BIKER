"use client";

import { useMemo, useState } from "react";

import { productCategories, products } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product-card";

type CatalogClientProps = {
  initialCategory?: string;
};

export function CatalogClient({ initialCategory }: CatalogClientProps) {
  const [activeCategory, setActiveCategory] = useState(
    productCategories.includes(initialCategory || "") ? initialCategory! : "Todos"
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "cursor-pointer rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition duration-200",
              category === activeCategory
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-white/10 bg-white/[0.03] text-white/68 hover:border-brand-orange hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={`${product.category}-${product.name}`} {...product} />
        ))}
      </div>
    </div>
  );
}
