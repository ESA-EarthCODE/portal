export const applyShadowDomEventListener = (
  elementTags,
  eventType,
  eventHandler,
) => {
  const findAnchorsInShadowRoots = (root) => {
    const anchors = root.querySelectorAll("a");
    const shadowRoots = [...root.querySelectorAll("*")].filter(
      (el) => el.shadowRoot,
    );
    return [
      ...anchors,
      ...shadowRoots.flatMap((el) => findAnchorsInShadowRoots(el.shadowRoot)),
    ];
  };

  elementTags.forEach((tagName) => {
    document.querySelectorAll(tagName).forEach((element) => {
      const anchors = element.shadowRoot
        ? findAnchorsInShadowRoots(element.shadowRoot)
        : [];

      anchors.forEach((anchor) => {
        anchor.addEventListener(eventType, (event) => {
          event.preventDefault();
          event.stopPropagation();
          eventHandler(event, anchor);
        });
      });
    });
  });
};
