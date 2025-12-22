// Utility untuk handle kedua jenis konten (HTML dan Blocks)
export const parseArticleContent = (content, contentType) => {
  if (!content) return "";

  // Jika konten adalah JSON blocks
  if (
    contentType === "blocks" ||
    (content.startsWith("[") && content.endsWith("]"))
  ) {
    try {
      const blocks = JSON.parse(content);
      return convertBlocksToHTML(blocks);
    } catch (e) {
      console.warn("Failed to parse blocks, falling back to raw content");
      return content; // Fallback ke content asli
    }
  }

  // Untuk konten HTML biasa
  return content;
};

const convertBlocksToHTML = (blocks) => {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (!block || !block.type) return "";

      const content = block.content || "";

      switch (block.type) {
        case "text":
          // Convert newlines to paragraphs or line breaks
          const paragraphs = content.split("\n").filter((p) => p.trim());
          if (paragraphs.length > 1) {
            return paragraphs.map((p) => `<p>${p}</p>`).join("");
          }
          return `<p>${content.replace(/\n/g, "<br>")}</p>`;

        case "heading":
          const level = block.level || "h2";
          return `<${level}>${content}</${level}>`;

        case "image":
          if (!content) return "";
          return `
          <div class="article-image-inline">
            <img src="${content}" alt="Gambar artikel" 
                 style="max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />
            ${
              block.caption
                ? `<p class="image-caption" style="text-align: center; color: #666; font-style: italic; margin-top: 8px;">${block.caption}</p>`
                : ""
            }
          </div>
        `;

        case "quote":
          return `<blockquote style="border-left: 4px solid #3498db; background: #f8f9fa; padding: 15px 20px; margin: 20px 0; font-style: italic;">${content}</blockquote>`;

        case "list":
          const items = content.split("\n").filter((item) => item.trim());
          const listType = block.listType || "ul";
          const listItems = items.map((item) => `<li>${item}</li>`).join("");
          return `<${listType}>${listItems}</${listType}>`;

        default:
          return "";
      }
    })
    .join("");
};

// Helper untuk extract text excerpt dari blocks (untuk pencarian dll)
export const extractTextFromBlocks = (content, contentType) => {
  if (!content) return "";

  if (
    contentType === "blocks" ||
    (content.startsWith("[") && content.endsWith("]"))
  ) {
    try {
      const blocks = JSON.parse(content);
      return blocks
        .filter((block) => block.type === "text" || block.type === "heading")
        .map((block) => block.content || "")
        .join(" ");
    } catch (e) {
      return content.replace(/<[^>]*>/g, " "); // Remove HTML tags
    }
  }

  return content.replace(/<[^>]*>/g, " "); // Remove HTML tags
};
