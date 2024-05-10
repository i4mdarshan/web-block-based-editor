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
import { SignUpValidation } from "@/lib/validation";
import { createUserAccount, signInAccount } from "@/lib/appwrite/api";
import { toast } from "sonner";
import { useUserContext } from "@/context/AuthContext";
import { Loader } from "lucide-react";

const SignUpForm = () => {
  const { checkUserAuthorization, isLoading } = useUserContext();
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    // create account using appwrite API
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast.error("Sign Up failed. Please try again.");
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast.error("Sign In failed. Please try again.");
    }

    const isLoggedIn = await checkUserAuthorization();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      return toast.error("Sign Up failed. Please try again.");
    }
  }
  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex flex-center flex-col'>
          {/* <img src='/assets/images/logo1.svg' alt='logo' /> */}
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>
            Create a new account
          </h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>
            To use the editor, please enter your details
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-5 w-full mt-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              disabled={isLoading}
            >
              {isLoading ? (
                <p>
                  <Loader />
                </p>
              ) : (
                "Sign Up"
              )}
            </Button>
            <p className='text-small-regular text-light-2 text-center mt-2'>
              Already have an account?
              <Link to='/sign-in' className='font-semibold ml-1'>
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignUpForm;
