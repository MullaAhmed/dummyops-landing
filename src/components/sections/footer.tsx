import Image from "next/image";
import { Logos } from "@/assets/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-96">
      <div className="flex items-center justify-center container mx-auto h-full py-10">
        <Link href="#top">
          <Image src={Logos.LARGE_BLACK} alt="Logo" width={300} height={300} />
        </Link>
      </div>
    </footer>
  );
}
