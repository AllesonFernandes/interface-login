import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import student1 from "../src/assets/student1.svg";
import student2 from "../src/assets/student2.svg";
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "../src/components/ui/carousel";


export function App() {


  return (
    <>
      <main className="h-screen flex w-full">
        <div className="flex items-center justify-center bg-stone-100 w-full h-full p-16">
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex">
                  <img src={student1} alt="estudante estressada" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex">
                  <img src={student2} alt="outro estudante estressado" />
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card className="w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Crie uma nova conta
              </CardTitle>
              <CardDescription>
                Utilize um email e crie uma nova senha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="exemplo@email.com" type="email" className="mt-2"></Input>
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input id="FirstPassword" placeholder="Crie uma senha" type="password" className="mt-2"></Input>
              </div>
              <div className="mt-4">
                <Input id="SecondPassword" placeholder="Repite a senha" type="password"></Input>
              </div>
              <Button className="mt-8 w-full">Criar uma conta</Button>
              <div className="flex items-center gap-6 mt-4">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>
              <Button variant={"outline"} className="mt-4 w-full">Entre com sua conta Google</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  )
}


