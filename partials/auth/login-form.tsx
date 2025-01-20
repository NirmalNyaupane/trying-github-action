"use client"
import { GalleryVerticalEnd } from "lucide-react"

import { Icons } from "@/components/common/icons"
import { InputField } from "@/components/common/input-field"
import { LoadingButton } from "@/components/common/loading-button"
import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const form = useForm()
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Form {...form}>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="#"
                                className="flex flex-col items-center gap-2 font-medium"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                    <GalleryVerticalEnd className="size-6" />
                                </div>
                                <span className="sr-only">Acme Inc.</span>
                            </a>
                            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="/auth/signup" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <InputField
                                        label="Email"
                                        type="email"
                                        isRequired
                                        {...field}
                                    />
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <InputField
                                        label="Password"
                                        type="password"
                                        isRequired
                                        {...field}
                                    />
                                )}
                            />
                            <p className="text-muted-foreground flex flex-col items-end text-right text-sm">forget password?</p>
                            <LoadingButton type="submit">Login</LoadingButton>
                        </div>
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                            <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                Or
                            </span>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Button variant="outline" className="w-full">
                                <Icons.apple className="mr-2 h-4 w-4" />
                                Continue with Apple
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Icons.google className="mr-2 h-4 w-4" />
                                Continue with Google
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>

            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
