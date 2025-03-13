import { useContext } from "react";
import { HtmlMiscelaneasContext } from "../context/HtmlMiscelaneasContext";

export const useHtmlMiscelaneas = () => {
    const { uniqueCategories, linksMiscelaneas, linksMiscelaneasFiltered, setLinksMiscelaneasFiltered } = useContext(HtmlMiscelaneasContext);

    return {
        uniqueCategories,
        linksMiscelaneas,
        linksMiscelaneasFiltered,
        setLinksMiscelaneasFiltered
    };
};