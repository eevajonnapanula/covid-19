import isSameDay from 'date-fns/isSameDay';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { DataItem, XAndY } from '../interfaces';

const getDates = (start: string) => {
  return eachDayOfInterval({
    start: new Date(start),
    end: new Date(),
  });
};

export const formatDataToXAndY = (arr: DataItem[], value: string) => {
  return arr.reduce((acc: XAndY[], curr: DataItem) => {
    const hasValue = acc.find(item => {
      return item.x === curr[value];
    });

    if (hasValue !== undefined) {
      return acc.map((item: XAndY) => {
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

export const formatDatesToXAndY = (data: DataItem[], firstDate: string) => {
  const dates = getDates(firstDate);
  return dates.map(date => {
    return {
      x: format(date, 'dd.MM'),
      y: data.filter(item => isSameDay(parseISO(item.date), date)).length,
    };
  });
};

export const formatTotalInfections = (data: DataItem[]) => {
  if (data[0]) {
    const dates = getDates(data[0].date);

    return dates.reduce((acc: XAndY[], curr: Date, index: number) => {
      if (index === 0) {
        acc.push({
          x: format(curr, 'dd.MM'),
          y: data.filter(item => isSameDay(parseISO(item.date), curr)).length,
        });
      } else {
        acc.push({
          x: format(curr, 'dd.MM'),
          y:
            acc[index - 1].y +
            data.filter(item => isSameDay(parseISO(item.date), curr)).length,
        });
      }
      return acc;
    }, []);
  }
  return [];
};

export const sortDataByDate = (data: XAndY[]) =>
  data.sort((a, b) => {
    if (isSameDay(parseISO(a.x as string), parseISO(b.x as string))) {
      return 0;
    } else if (isBefore(parseISO(a.x as string), parseISO(b.x as string))) {
      return 1;
    }
    return -1;
  });
