"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const SearchFormReset = ({
  setSearchField,
}: {
  setSearchField: Dispatch<SetStateAction<string>>;
}) => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    setSearchField("");
    if (form) form.reset();
  };
  return (
    <Button
      type="reset"
      onClick={reset}
      className="rounded-full font-bold !p-1 h-6 !bg-red-600 cursor-pointer"
    >
      <Link href="/">
        <X />
      </Link>
    </Button>
  );
};
export default SearchFormReset;
