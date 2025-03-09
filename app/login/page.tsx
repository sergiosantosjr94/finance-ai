import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return ( 
  <div className="grid grid-cols-2 h-full">
      {/* Left Position */}
      <div className="flex h-full flex-col justify-center p-8 max-w-[550px] mx-auto">

      <Image src="/logo.svg" width={173} height={39} alt='Finance AI' className="mb-8" />
      <h1 className="text-4xl font-bold mb-3">Welcome!</h1>
      <p className="text-muted-foreground mb-8">Finance AI is a finance management plataform develop by Sérgio Santos Jr, that uses AI for monitoring your movimentations, and offers tailored insights faciliting the control of your budget.  </p>
      <Button variant="outline">
         <LogInIcon />
         Login or Signup
      </Button>
      </div>
      {/* Right Position */}
      <div className="relative h-full w-full">
         <Image src="/login.png" alt="Login" fill className="object-cover"/>
      </div>
   </div>
   );
}
 
export default LoginPage;