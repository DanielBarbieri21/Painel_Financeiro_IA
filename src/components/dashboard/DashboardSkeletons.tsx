import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function MetricCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-8 w-28" />
        <Skeleton className="h-3 w-20" />
      </CardContent>
    </Card>
  );
}

function CardPanelSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="mt-2 h-4 w-full max-w-sm" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-8 w-12" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function DashboardHeaderSkeleton() {
  return (
    <section className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-6 w-40" />
          </div>
          <Skeleton className="h-9 w-full max-w-md" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
          <Skeleton className="h-24 rounded-md" />
          <Skeleton className="h-24 rounded-md" />
        </div>
      </div>
    </section>
  );
}

export function DashboardMetricsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <MetricCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function MarketChartSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-52" />
        <Skeleton className="mt-2 h-4 w-72" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="mt-2 h-9 w-full max-w-sm" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[450px] w-full" />
      </CardContent>
    </Card>
  );
}

export function OpportunitiesSkeleton() {
  return <CardPanelSkeleton rows={4} />;
}

export function MoversTableSkeleton() {
  return <CardPanelSkeleton rows={5} />;
}

export function DashboardPageSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <DashboardHeaderSkeleton />
      <DashboardMetricsSkeleton />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <MarketChartSkeleton />
        </div>
        <div className="flex flex-col gap-6">
          <OpportunitiesSkeleton />
          <MoversTableSkeleton />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
