import { FC } from "react";
declare const Search: FC<SearchI>;
export interface SearchI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: (e: string) => void;
    onChange?: (e: string) => void;
    thickness?: "thin" | "";
    placeHolder?: string;
}
export default Search;
