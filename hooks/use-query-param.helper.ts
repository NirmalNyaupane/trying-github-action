"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParams = (params: Record<string, string>) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, value);
    });
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  };

  const getQueryParams = () => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  const getSingleParam = (queryKey: string): string | undefined => {
    const params = getQueryParams();
    return params?.[queryKey];
  };

  return { setQueryParams, getQueryParams, getSingleParam };
}
