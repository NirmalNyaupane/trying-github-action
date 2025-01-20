import { forwardRef } from "react";
import { Input, InputProps } from "../ui/input";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";
import { cn } from "@/lib/utils";

export interface InputFieldProps extends InputProps {
    label?: string,
    errorMessage?: string,
    className?: string,
    description?: string,
    isRequired?: boolean,
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ className, type, label, errorMessage, isRequired, description, ...rest }, ref) => {
    return (
        <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            {isRequired && <span className="text-red-500">&nbsp;*</span>}
            <FormControl>
                <Input type={type} className={cn('ring-0', className)} ref={ref} required={isRequired} {...rest} />
            </FormControl>
            {description && <FormDescription>
                {description}
            </FormDescription>}
            {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
        </FormItem>
    )
});
InputField.displayName = 'InputField';