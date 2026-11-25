"use client";

import { Maximize2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { home } from "@/content/home";

/**
 * Every certificate is shown at once in a grid. Each card opens a scrollable
 * full-size view so the document itself stays readable.
 */
export function CoaCertificates() {
  const { certificates } = home.coa;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {certificates.map((cert) => (
        <li key={cert.id}>
          <Dialog.Root>
            <figure className="flex h-full flex-col">
              <Dialog.Trigger
                aria-label={`View ${cert.title} in full size`}
                className="group relative block aspect-3/4 w-full cursor-zoom-in overflow-hidden rounded-xl border border-[#dce6de] bg-white p-3 shadow-sm transition-all duration-200 outline-none hover:border-[#25854a]/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#25854a] focus-visible:ring-offset-2 sm:p-4"
              >
                <span className="relative block size-full">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                    className="object-contain"
                  />
                </span>
                <span className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#14261c]/85 px-3 py-2 text-[11px] font-medium text-white opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:inset-x-4 sm:bottom-4">
                  <Maximize2Icon className="size-3.5" />
                  View full certificate
                </span>
              </Dialog.Trigger>

              <figcaption className="mt-4 px-1">
                <p className="text-sm font-bold text-[#14261c]">{cert.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#5c6c62]">
                  {cert.issuer}
                </p>
              </figcaption>
            </figure>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-[#0c1a12]/70 duration-150 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed top-1/2 left-1/2 z-50 flex max-h-[92vh] w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-white shadow-2xl duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[#e1ebe3] px-4 py-3 sm:px-5">
                  <div>
                    <Dialog.Title className="text-sm font-bold text-[#14261c]">
                      {cert.title}
                    </Dialog.Title>
                    <p className="mt-0.5 text-xs text-[#5c6c62]">
                      {cert.issuer}
                    </p>
                  </div>
                  <Dialog.Close className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#1c3d29] transition-colors outline-none hover:bg-[#eef5f0] focus-visible:ring-2 focus-visible:ring-[#25854a]">
                    <XIcon className="size-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </div>

                <div className="overflow-y-auto bg-[#f3f6f2] p-3 sm:p-5">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="mx-auto h-auto w-full rounded-md bg-white shadow-sm"
                  />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </li>
      ))}
    </ul>
  );
}
