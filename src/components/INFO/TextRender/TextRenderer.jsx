import React, { useEffect, useMemo, useState } from "react";
import "./CSS/TextRender.css";

const parseContentWithLineBreaks = (content) => {
  let h1 = 0,
    h2 = 0,
    h3 = 0;

  const headings = [];
  const result = [];
  let inList = false;

  const lines = content.split("\n");

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s*(.*)/);

    if (headingMatch) {
      if (inList) {
        result.push("</ul>");
        inList = false;
      }

      const level = headingMatch[1].length;
      const title = headingMatch[2];

      let number = "";

      if (level === 1) {
        h1++;
        h2 = 0;
        h3 = 0;
        number = `${h1}.`;
      } else if (level === 2) {
        h2++;
        h3 = 0;
        number = `${h1}.${h2}`;
      } else if (level === 3) {
        h3++;
        number = `${h1}.${h2}.${h3}`;
      }

      const id = `heading-${number.replace(/\./g, "-")}`;

      if (level <= 3) {
        headings.push({ id, number, title, level });
      }

      result.push(
        `<h${level} class="element_h${level}" id="${id}">${number} ${title}</h${level}>`
      );

      continue;
    }

    if (line.trim().startsWith("- ")) {
      if (!inList) {
        result.push("<ul>");
        inList = true;
      }

      result.push(`<li>${line.trim().slice(2)}</li>`);
      continue;
    }

    if (inList) {
      result.push("</ul>");
      inList = false;
    }

    const processed = line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.*?)__/g, "<strong>$1</strong>");

    result.push(processed.trim() === "" ? "<br />" : processed);
  }

  if (inList) result.push("</ul>");

  return {
    html: result.join("\n"),
    headings,
  };
};

export default function TextRenderer({ text = "", filePath }) {
  const [content, setContent] = useState(text);
  const [loading, setLoading] = useState(!!filePath);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!filePath) {
      setContent(text);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(filePath, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error();

        const txt = await res.text();
        setContent(txt);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, [filePath, text]);

  const { html, headings } = useMemo(
    () => parseContentWithLineBreaks(content),
    [content]
  );

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    document
      .getElementById(hash.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  }, [content]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error loading content</div>;

  return (
    <>
      {headings.length > 0 && (
        <ul className="toc">
          {headings.map(({ id, number, title, level }) => (
            <li key={id} className={`toc-level-${level}`}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  history.pushState(null, "", `#${id}`);
                }}
              >
                <span className="toc-number">{number}</span> {title}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}