import { PageTitle } from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

const signInForm = z.object({
  email: z.string().email('campo obrigatório')
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  });

  async function handleSignIn(data: SignInForm) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
    toast.success('Foi enviado um link de validação para seu e-mail!');
  }

  return (
    <>
      <PageTitle title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
