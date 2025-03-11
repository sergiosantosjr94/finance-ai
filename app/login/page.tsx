import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-2">
      {/* Left Position */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Seja bem-vindo!</h1>
        <p className="mb-8 text-muted-foreground">
          Finance AI é uma plataforma de gereciamento financeiro desenvolvido
          por Sérgio Santos Jr, que utiliza IA para monitorar suas movimentações
          financeiras e oferece insights personalizados facilitando o controle
          de seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            Login ou Fazer Cadastro
          </Button>
        </SignInButton>
      </div>
      {/* Right Position */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
