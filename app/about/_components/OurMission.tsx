import { Card, Container, Eyebrow } from "@/components/ui";

/** About Us 06 / Our Mission — a single white card holding the mission statement. */
export function OurMission() {
  return (
    <section className="bg-brand-blue-05 pb-16 md:pb-32">
      <Container>
        <Card className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-16 md:p-12">
          <div>
            <Eyebrow className="text-brand-red">Our mission</Eyebrow>
            <p className="mt-6 text-display-s font-display font-light">Our Mission</p>
          </div>

          <p className="font-display text-display-m font-light tracking-[-0.01em]">
            To fuel agency business growth through flexible premium financing, making insurance
            affordable so that everyone remains protected.
          </p>
        </Card>
      </Container>
    </section>
  );
}
