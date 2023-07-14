export const dateFormatter = (dateString?: string): string => {
  if (!dateString) {
    return "";
  }
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  const hh = date.getHours().toString().padStart(2, "0");
  const mm = date.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}, ${date.toLocaleString("ru", options)}`;
};
