import { InputField, TextareaField } from "@/components/ui";

/**
 * 08 / Get a Quote — the field block itself.
 *
 * Three places draw this same form: the homepage section, the shade pop-up and
 * the Contact Us board. They differ in what submitting does and in the colour
 * of the submit button, but never in the fields, so only the fields are shared.
 */
export function QuoteFields({ textareaRows = 5 }: { textareaRows?: number }) {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          required
          autoComplete="name"
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="name@agency.com"
          required
          autoComplete="email"
        />
        <InputField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(000) 000-0000"
          autoComplete="tel"
        />
        <InputField label="Subject" name="subject" placeholder="General inquiry" />
      </div>

      <TextareaField
        label="Tell us your question"
        name="question"
        rows={textareaRows}
        placeholder="Write here"
      />
    </>
  );
}
