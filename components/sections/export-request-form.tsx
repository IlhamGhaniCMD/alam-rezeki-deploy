"use client";

import { SendHorizontalIcon } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function ExportRequestForm() {
  const { form } = home.quotation;
  const { fields } = form;

  const [commodity, setCommodity] = useState<string>(form.commodityOptions[0]);
  const [packaging, setPackaging] = useState<string>(form.packagingOptions[0]);
  const [volume, setVolume] = useState<string>(form.volumeOptions[0]);
  const [incoterm, setIncoterm] = useState<string>(form.incotermOptions[0]);
  const [destination, setDestination] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `*Formal Export Quotation Request — ${site.name}*`,
      "",
      `• *Commodity:* ${commodity}`,
      `• *Packaging:* ${packaging}`,
      `• *Estimated Volume:* ${volume}`,
      `• *Preferred Incoterm:* ${incoterm}`,
      destination ? `• *Destination Port:* ${destination}` : null,
      company ? `• *Company:* ${company}` : null,
      email ? `• *Email:* ${email}` : null,
      phone ? `• *Phone / WhatsApp:* ${phone}` : null,
      notes ? `• *Technical Notes:* ${notes}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-3xl border border-[#e3ebe4] bg-white p-6 shadow-xl shadow-black/5 sm:p-9">
      <h3 className="font-heading text-2xl font-bold">
        {form.headingSegments.map((segment) => (
          <span
            key={segment.text}
            className={segment.highlight ? "text-[#25854a]" : "text-[#14261c]"}
          >
            {segment.text}
          </span>
        ))}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-[#5c6c62] sm:text-sm">
        {form.description}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="commodity"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.commodityLabel}
            </Label>
            <Select value={commodity} onValueChange={setCommodity}>
              <SelectTrigger
                id="commodity"
                className="h-11 w-full rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs text-[#1f3327]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {form.commodityOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-xs">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="packaging"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.packagingLabel}
            </Label>
            <Select value={packaging} onValueChange={setPackaging}>
              <SelectTrigger
                id="packaging"
                className="h-11 w-full rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs text-[#1f3327]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {form.packagingOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-xs">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="volume"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.volumeLabel}
            </Label>
            <Select value={volume} onValueChange={setVolume}>
              <SelectTrigger
                id="volume"
                className="h-11 w-full rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs text-[#1f3327]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {form.volumeOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-xs">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="incoterm"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.incotermLabel}
            </Label>
            <Select value={incoterm} onValueChange={setIncoterm}>
              <SelectTrigger
                id="incoterm"
                className="h-11 w-full rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs text-[#1f3327]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {form.incotermOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-xs">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="destination"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.destinationLabel}
            </Label>
            <Input
              id="destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder={fields.destinationPlaceholder}
              className="h-11 rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs placeholder:text-[#8fa094]"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="company"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.companyLabel}
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder={fields.companyPlaceholder}
              className="h-11 rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs placeholder:text-[#8fa094]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.emailLabel}
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={fields.emailPlaceholder}
              className="h-11 rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs placeholder:text-[#8fa094]"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-xs font-semibold text-[#1f3327]"
            >
              {fields.phoneLabel}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={fields.phonePlaceholder}
              className="h-11 rounded-xl border-[#dce6de] bg-[#f7faf6] px-3.5 text-xs placeholder:text-[#8fa094]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="notes"
            className="text-xs font-semibold text-[#1f3327]"
          >
            {fields.notesLabel}
          </Label>
          <Textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder={fields.notesPlaceholder}
            className="min-h-22 rounded-xl border-[#dce6de] bg-[#f7faf6] p-3.5 text-xs placeholder:text-[#8fa094]"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-full bg-[#244e35] text-sm font-semibold text-white hover:bg-[#1c3e2a]"
        >
          {fields.submitLabel}
          <SendHorizontalIcon className="ml-1 size-4" />
        </Button>
      </form>
    </div>
  );
}
