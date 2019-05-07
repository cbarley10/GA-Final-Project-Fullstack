const startingIndex = (page, maxPages, visiblePageNums) => {
  const midPointIndex = Math.ceil(visiblePageNums / 2);
  if (page < midPointIndex) {
    return 0;
  }
  if (page > maxPages - Math.floor(visiblePageNums / 2)) {
    return maxPages - visiblePageNums;
  }
  return page - midPointIndex;
};

export default startingIndex;
