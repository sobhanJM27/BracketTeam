import React, { forwardRef } from "react";
import MarkdownLib from "markdown-to-jsx";

const Markdown = forwardRef((props, ref) => {
  const { text, sectionId } = props;

  return (
    <section ref={ref} id={sectionId}>
      <div>
        <MarkdownLib>{text}</MarkdownLib>
      </div>
    </section>
  );
});

export default Markdown;
