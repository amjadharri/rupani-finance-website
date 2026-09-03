import { ButtonLink, Container, Heading } from "@/components/ui";
import { SiteHeader } from "@/components/layout";

export default function NotFound() {
  return (
    <>
      <SiteHeader tone="light" />
      <Container className="py-24 md:py-32">
        <Heading level={1}>Page not found</Heading>
        <p className="mt-6 max-w-[520px] text-body-m text-brand-ink-2">
          The page you are looking for does not exist or has moved.
        </p>
        <ButtonLink href="/" className="mt-10">
          Back to homepage
        </ButtonLink>
      </Container>
    </>
  );
}
