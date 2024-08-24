import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <Skeleton className="m-4 relative h-80 bg-slate-900 flex items-end justify-center">
      <div className="flex flex-col gap-2 mb-2">
        <Skeleton className="bg-slate-400 h-10 w-[90%]" />
        <Skeleton className="bg-slate-400 h-10 w-[94%] " />
      </div>
    </Skeleton>
  );
}
