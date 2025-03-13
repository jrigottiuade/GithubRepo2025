import React from "react";

import { Link } from "react-router-dom";
import HtmlMiscelaneasSearchbox from "../components/HtmlMiscelaneasSearchbox";
import { useHtmlMiscelaneas } from "../hooks/useHtmlMiscelaneas";

// MISCELANEAS
const HtmlMiscelaneas = () => {
  const { uniqueCategories, linksMiscelaneasFiltered} = useHtmlMiscelaneas()
  return (

    <div className="p-6">
      <div className="pb-10 flex justify-end ">
        <HtmlMiscelaneasSearchbox />
      </div>

      {uniqueCategories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          <ul className="space-y-4">
            {linksMiscelaneasFiltered
              .filter((item) => item.category === category)
              .map((link) => (
                <li key={link.id} className="border border-gray-300 p-4 rounded-lg shadow-md">
                  <a
                    href={link.link}
                    target="_blank"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    {link.title}
                  </a>
                  <ul className="mt-2 text-sm list-disc pl-5">
                    {link.commets.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>

  );
};

export default HtmlMiscelaneas;
