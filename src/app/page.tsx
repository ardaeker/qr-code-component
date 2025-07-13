import { QRCode } from "@/components/qr-code";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-300 p-6">
      <QRCode />
    </main>
  );
}
