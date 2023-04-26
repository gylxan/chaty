export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate()}.${
    date.getMonth() <= 9 ? `0${date.getMonth()}` : date.getMonth()
  }.${date.getFullYear()}`;
};

export const getFormattedTime = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()}:${
    date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;
};
