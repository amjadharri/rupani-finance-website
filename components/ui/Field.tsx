import { useId } from "react";
import { cn } from "@/lib/utils";

const controlClasses =
  "w-full rounded-card border border-brand-rule bg-brand-white px-4 py-3 " +
  "text-body-m text-brand-ink placeholder:text-brand-ink-3 min-h-11 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

interface FieldShellProps {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}

function FieldShell({ label, htmlFor, className, children }: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-title-m font-semibold text-brand-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "className"> {
  label: string;
  className?: string;
}

export function InputField({ label, className, ...props }: InputFieldProps) {
  const id = useId();

  return (
    <FieldShell label={label} htmlFor={id} className={className}>
      <input id={id} className={controlClasses} {...props} />
    </FieldShell>
  );
}

export interface TextareaFieldProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className"> {
  label: string;
  className?: string;
}

export function TextareaField({ label, className, rows = 5, ...props }: TextareaFieldProps) {
  const id = useId();

  return (
    <FieldShell label={label} htmlFor={id} className={className}>
      <textarea id={id} rows={rows} className={cn(controlClasses, "resize-y")} {...props} />
    </FieldShell>
  );
}
