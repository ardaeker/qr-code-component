import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-light-grey font-outfit grid min-h-screen place-content-center">
      <section className="shadow-card max-w-card rounded-card flex w-full flex-col items-center bg-white px-4 pb-10 pt-4 text-center">
        <Image
          src="/images/image-qr-code.png"
          alt="QR Code"
          width={288}
          height={288}
          className="rounded-image mb-6"
        />
        <h1 className="text-title text-dark-navy test mb-4 px-4 font-bold ">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-content text-grey px-4 font-normal">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}
