import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { Button, ButtonProps } from "../ui/button";

interface LoadingButton extends ButtonProps {
    isLoading?: boolean;
    clasName?: string;
}

export const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButton>(
    ({ children, isLoading, clasName, ...props }, ref) => {
        return (
            <Button
                className={cn(`my-2 flex justify-center`, clasName)}
                ref={ref}
                disabled={isLoading}
                {...props}
            >
                {children}

                {isLoading &&
                    (
                        <LoaderCircle className="animate-spin delay-150" />
                    )
                }
            </Button>
        );
    }
);

LoadingButton.displayName = "LoadingButton";
