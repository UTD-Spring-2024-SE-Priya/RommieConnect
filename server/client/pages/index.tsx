import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Image
      src="/background.jpg"
      alt="Green/blue background"
      layout="fill"
      objectFit="cover"
    />
  );
}
