'use client';
import { InputField } from "@/components/common/input-field";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
export function CreateUserForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const form = useForm();
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Create Account</CardTitle>
                    <CardDescription>
                        Please fill in the form to create an account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form>
                            <div className="grid gap-6">
                                <div className="grid gap-6">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <InputField
                                                label="Username"
                                                type="text"
                                                {...field}
                                            />
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <InputField
                                                label="Full Name"
                                                type="text"
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
                                                {...field}
                                            />
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <InputField
                                                label="Confirm Password"
                                                type="password"
                                                {...field}
                                            />
                                        )}
                                    />

                                    <Button type="submit" className="w-full">
                                        Create Account
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
