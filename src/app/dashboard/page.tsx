/** @format */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center text-center max-w-5xl gap-6 mx-auto  my-12'>
      <div className='flex justify-between w-full mx-8'>
        <h1 className='text-3xl font-semibold'>Invocies</h1>
        <p>
          <Button>create Invoice</Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100xp] text-left p-4'>Date</TableHead>
            <TableHead className='p-4'>Customer</TableHead>
            <TableHead className='p-4'>Email</TableHead>
            <TableHead className='text-center p-4'>staus</TableHead>
            <TableHead className='text-right p-4'>value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='text-left font-medium p-4'>
              <span className='font-bold'> 10/12/2024</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              <span className='font-bold'> Micheal</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              <span> micheal@gmail.com</span>
            </TableCell>
            <TableCell className='text-center p-4'>
              <Badge variant='default' className='rounded-full'>
                open
              </Badge>
            </TableCell>
            <TableCell className='text-right p-4'>
              <span> $250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
