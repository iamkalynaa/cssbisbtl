  const list = document.querySelector(".list");
  const item = document.querySelector(".item");

  function handleClick(direction) {
    const itemWidth = item.getBoundingClientRect().width;
    const gap = 8;

    list.scrollBy({
      left: direction === "previous"
        ? -(itemWidth + gap)
        : itemWidth + gap,
      behavior: "smooth"
    });
  }