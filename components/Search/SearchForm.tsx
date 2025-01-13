"use client";
import { Search } from "lucide-react";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchField, setSearchField] = useState(query);
  console.log(query, "query");
  return (
    <Form
      action={"/"}
      scroll={false}
      className="md:flex hidden border rounded-full px-2 gap-2 py-2 "
    >
      <input
        name="query"
        type="text"
        defaultValue={searchField}
        placeholder="Search"
        className="px-2 outline-none bg-transparent"
      />
      <div className="flex items-center gap-1">
        {query && <SearchFormReset setSearchField={setSearchField} />}
        <button className="cursor-pointer" type="submit">
          <Search />
        </button>
      </div>
    </Form>
  );
};
export default SearchForm;
