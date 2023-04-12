const { replace } = "";

// escape
const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
const ca = /[&<>'"]/g;

const esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
};
const pe = (m: any) => esca[m as keyof typeof esca];

export const escape = (es: any) => replace.call(es, ca, pe);
