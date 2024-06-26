import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div class="container mx-auto p-4">

        <div class="space-y-2">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#000080]">
                About
          </h1>
          <p class="max-w-[600px] text-[#333333] md:text-xl">
                LunaFocus is designed to help you track your cycle.
          </p>
        </div>

      </div>
    </main>
  );
}