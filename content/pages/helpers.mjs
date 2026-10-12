export const section = (id, title, paragraphs, extra = {}) => ({
  id,
  title,
  paragraphs,
  ...extra
});
export const note = (title, text) => ({
  title,
  text
});
