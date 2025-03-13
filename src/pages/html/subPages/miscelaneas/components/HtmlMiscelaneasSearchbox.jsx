import React, { useState, useEffect } from 'react'
import { useHtmlMiscelaneas } from "../hooks/useHtmlMiscelaneas"

const HtmlMiscelaneasSearchbox = () => {

    const { linksMiscelaneas, setLinksMiscelaneasFiltered } = useHtmlMiscelaneas();

    const [search, setSearch] = useState('')

    const onSearch = (value) => {
        setSearch(value)

        if (value == "") {
            setLinksMiscelaneasFiltered(linksMiscelaneas)
        } else {
            const filtered = linksMiscelaneas.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
            setLinksMiscelaneasFiltered(filtered);
        }

    };



    return (
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md w-full max-w-md">
            <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}



export default HtmlMiscelaneasSearchbox