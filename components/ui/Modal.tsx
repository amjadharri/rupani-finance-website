"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Built on <dialog> so focus trapping, Escape handling, and the backdrop come
 * from the platform instead of being reimplemented.
 */
export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="modal-title"
      className={cn(
        "m-auto w-full max-w-md rounded-lg p-6 backdrop:bg-black/50",
        className,
      )}
    >
      <h2 id="modal-title" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </dialog>
  );
}
