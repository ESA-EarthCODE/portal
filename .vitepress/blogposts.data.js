import { createContentLoader } from "vitepress";

export default createContentLoader("../pages/blog/*.md", {
  includeSrc: true,
  render: true,
  transform(rawData) {
    return rawData.filter(
      (d) => d.url !== "/blog/" && d.url !== "/blog/preview",
    );
  },
});
