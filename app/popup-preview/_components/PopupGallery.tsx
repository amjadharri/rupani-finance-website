"use client";

import { useState } from "react";
import { QuotePopup } from "@/components/sections";
import { Button, Card, CardBody, CardTitle, Modal } from "@/components/ui";

type Which = "quote" | "notice" | null;

/** The triggers for the preview board. Nothing here ships with a page. */
export function PopupGallery() {
  const [open, setOpen] = useState<Which>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <Card tone="surface">
          <CardTitle>Get a quote</CardTitle>
          <CardBody className="mt-3 text-brand-ink-2">
            The 720 card from 08 / Get a Quote, floated over the shade. Front end only — submitting
            swaps the card for its confirmation state.
          </CardBody>
          <Button className="mt-6" onClick={() => setOpen("quote")} withArrow>
            Open the quote pop-up
          </Button>
        </Card>

        <Card tone="surface">
          <CardTitle>Notice</CardTitle>
          <CardBody className="mt-3 text-brand-ink-2">
            The same frame at the 440 width, with an eyebrow and a left-aligned header — what a
            confirmation or a short interruption uses.
          </CardBody>
          <Button className="mt-6" variant="navy" onClick={() => setOpen("notice")} withArrow>
            Open the notice pop-up
          </Button>
        </Card>
      </div>

      <QuotePopup open={open === "quote"} onClose={() => setOpen(null)} />

      <Modal
        open={open === "notice"}
        onClose={() => setOpen(null)}
        size="s"
        align="start"
        eyebrow="Before you apply"
        title="You will need your policy details"
        description="Have the carrier, policy number and annual premium to hand. The application takes about four minutes."
      >
        <div className="flex flex-col gap-3">
          <Button variant="navy" onClick={() => setOpen(null)}>
            Continue
          </Button>
          <Button variant="link" onClick={() => setOpen(null)} className="text-brand-ink-2">
            Not right now
          </Button>
        </div>
      </Modal>
    </>
  );
}
