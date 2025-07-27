import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 ">
      <section className="grid grid-cols-2 gap-10 p-10 min-h-[70vh]">
        <div className="flex flex-col justify-center items-start gap-5">
          <p className="text-3xl font-bold">
            This is a simple URL shortener app
          </p>
          <p className="">
            Welcome! This app allows you to shorten URLs easily and quickly,
            Without any logins or signups.
          </p>
          <Link href="/shorten">
            <button className="hover:bg-[#ca83ff] cursor-pointer bg-purple-400 font-bold p-3 py-2 rounded-3xl text-white shadow-lg">
              Get Started!
            </button>
          </Link>
        </div>
        <div className="flex justify-start relative">
          <Image
            src="/vector.jpg"
            alt="Animated Shape Blend"
            width={500}
            height={500}
            className="w-full h-auto"/>
        </div>
      </section>
    </main>
  );
}
