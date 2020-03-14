export const formatDataToXAndY = (arr: any, value: string) => {
  return arr.reduce((acc: any, curr: any) => {
    const hasValue = acc.find((item: any) => {
      return item.x === curr[value];
    });

    if (hasValue !== undefined) {
      return acc.map((item: any) => {
        if (item.x === curr[value]) {
          return {
            ...item,
            y: item.y + 1,
          };
        }

        return item;
      });
    } else {
      acc.push({ x: curr[value], y: 1 });
    }
    return acc;
  }, []);
};
