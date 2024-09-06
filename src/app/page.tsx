'use client'
import Posts from "@/components/home/Posts";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { useSidebarContext } from "@/contexts/SidebarContext";

export default function Home() {
  const {open,setOpen} = useSidebarContext()
  return (
    <main className="bg-[#0b0c0d]">
      {open && <Sidebar/>}
      <Navbar/>
      <Posts/>
    </main>
  );
}
