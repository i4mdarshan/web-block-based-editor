import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInValidation } from "@/lib/validation";
import { signInAccount } from "@/lib/appwrite/api";
import { useUserContext } from "@/context/AuthContext";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const SignInForm = () => {
  const { checkUserAuthorization, isLoading } = useUserContext();
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInValidation>) {
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      toast.error("Sign In failed. Please try again.");
    }

    const isLoggedIn = await checkUserAuthorization();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      toast.error("Sign In failed. Please try again.");
    }
  }
  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          {/* <img src='/assets/images/logo1.svg' alt='logo' /> */}
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>
            Login to your account
          </h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>
            Welcome Back!, please enter your details
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-5 w-full mt-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='shad-button_primary'
            >
              Sign In
            </Button>
            <p className='text-small-regular text-light-2 text-center mt-2'>
              Don't have an account?
              <Link to='/sign-up' className='font-semibold ml-1'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;
