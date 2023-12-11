import dayjs from 'dayjs';

export const formatTimestamp = (timestamp: number): string => {
  return dayjs(timestamp).format('D MMM. YYYY h:mma');
};

// 24 Oct. 2020 8:45pm - returned format
