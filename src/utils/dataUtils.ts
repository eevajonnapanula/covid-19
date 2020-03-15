import isSameDay from 'date-fns/isSameDay';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import subDays from 'date-fns/subDays';

const dates = eachDayOfInterval({
  start: subDays(new Date(), 14),
  end: new Date(),
});

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
  return dates.map(date => {
    return {
      x: format(date, 'dd.MM'),
      y: data.filter((item: any) => isSameDay(parseISO(item.date), date))
        .length,
    };
  });
};

export const formatTotalInfections = (data: any) => {
  return dates.reduce((acc: any, curr: any, index: number) => {
    if (index === 0) {
      acc.push({
        x: format(curr, 'dd.MM'),
        y: data.filter((item: any) => isSameDay(parseISO(item.date), curr))
          .length,
      });
    } else {
      acc.push({
        x: format(curr, 'dd.MM'),
        y:
          acc[index - 1].y +
          data.filter((item: any) => isSameDay(parseISO(item.date), curr))
            .length,
      });
    }
    return acc;
  }, []);
};
