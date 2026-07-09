"use client";

import dynamic from "next/dynamic";
import { MarketChartSkeleton } from "@/components/dashboard/DashboardSkeletons";

export const LazyMarketChart = dynamic(
  () =>
    import("@/components/dashboard/MarketChart").then((m) => ({
      default: m.MarketChart,
    })),
  {
    ssr: false,
    loading: () => <MarketChartSkeleton />,
  }
);

export const LazyAdCarousel = dynamic(
  () =>
    import("@/components/dashboard/AdCarousel").then((m) => ({
      default: m.AdCarousel,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] animate-pulse rounded-lg bg-muted/40" />
    ),
  }
);
