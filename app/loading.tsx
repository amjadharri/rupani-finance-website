import { Container, Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <Container className="py-24">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="mt-6 h-5 w-full max-w-[520px]" />
      <Skeleton className="mt-3 h-5 w-full max-w-[440px]" />
    </Container>
  );
}
