import Image from "next/image";

export function QRCode() {
  return (
    <section className="shadow-card font-outfit w-full max-w-xs rounded-[1.25rem] bg-white p-4 pb-10 text-center">
      <Image src="/image-qr-code.png" alt="QR Code" width={288} height={288} className="rounded-[0.625rem]" priority />
      <h1 className="mt-6 px-4 text-[1.375rem] leading-[1.65rem] font-bold text-slate-900">
        Improve your front-end skills by building projects
      </h1>
      <p className="mt-4 px-4 text-[0.9375rem] leading-[1.3125rem] font-normal tracking-[0.0125em] text-slate-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </section>
  );
}
