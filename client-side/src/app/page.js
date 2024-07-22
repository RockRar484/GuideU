'use client'
import { ModeToggle } from "@/components/toggleTheme";
import { CarouselIIT } from "./IITcarasoul";
import {ArrowRight} from 'lucide-react'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
export default function Home() {
  const {isLoggedIn}=useAuth()
  const router= useRouter()
  const { toast } = useToast()
  const getStarted = () => {
    if (isLoggedIn) {
      // User is logged in, perform some action
      router.push('/colleges')
    } else {
      // User is not logged in, redirect to login page or show a message
      toast({
        title: "Not Logged In",
        description: "Please try again after logging in.",
      })
    }
  }
  return (
    <>
      
      <div className="pt-32 md:py-12 px-6 md:px-12 h-full w-full">
          <div className="relative lg:flex lg:items-center lg:gap-12">
              <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                  <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">Empowering your future with expert career <span class="text-primary dark:text-primaryLight">Guidance.</span></h1>
                  <p className="mt-8 text-gray-600 dark:text-gray-300">GuideU is a comprehensive JoSAA rank analyzer designed to assist students in evaluating their chances of admission into various IITs, NITs, and other prestigious institutions. By inputting their rank, students can receive personalized insights and recommendations on the best colleges and courses available to them. This tool helps in making informed decisions during the counseling process.</p>
                  <div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
                    <Button type="button" title="Start looking for colleges" onClick={getStarted} class="w-full py-3 px-6 text-center rounded-full transition bg-slate-900 text-white dark:text-black dark:hover:bg-slate-200 dark:bg-slate-50 hover:bg-slate-700 active:bg-slate-400 focus:bg-slate-300 sm:w-max">
                        <span className="block text-white dark:text-black font-semibold text-sm">
                            Get Started
                            
                        </span>
                        
                    </Button>
                      </div>
                  <div class="mt-12 flex gap-6 lg:gap-12 justify-center grayscale dark:grayscale-0">
                      <CarouselIIT/>
                  </div>
              </div>
          </div>
      </div> 
                                    
    </>
  );
}


