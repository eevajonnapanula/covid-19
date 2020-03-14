import isSameDay from 'date-fns/isSameDay';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import subDays from 'date-fns/subDays';

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

export const formatDatesToXAndY = (data: any) => {
  const dates = eachDayOfInterval({
    start: subDays(new Date(), 14),
    end: new Date(),
  });

  return dates.map(date => {
    return {
      x: format(date, 'yyyy-MM-dd'),
      y: data.filter((item: any) => isSameDay(parseISO(item.date), date))
        .length,
    };
  });
};
