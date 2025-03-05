/** @format */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center text-center max-w-5xl gap-6 mx-auto h-screen'>
      <h1 className='text-5xl font-bold'>Invoicing App</h1>
      <p>
        <Button asChild>
          <Link href='/dashboard'>Button</Link>
        </Button>
      </p>
    </main>
  );
}
