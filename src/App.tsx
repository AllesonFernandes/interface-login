import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "./components/ui/card"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
export function App() {


  return (
    <>
      <main className="h-screen flex w-full">
        <div className="flex bg-primary-foreground w-full h-full p-16"></div>
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Faça Login
              </CardTitle>
              <CardDescription>
                Utilize um email e crie uma nova senha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="exemplo@email.com" type="email"></Input>
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input id="FirstPassword" placeholder="Crie uma senha" type="password"></Input>
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
              <Button variant={"outline"} className="mt-4 w-full">Entre com sua conta</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  )
}


