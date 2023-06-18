// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

export const createOgImage = ({ title, meta }: { title: string; meta: string }) =>
  [
    // ACCOUNT PREFIX
    `https://res.cloudinary.com/dzunn/image/upload`,

    // my transformation
    `t_og-site`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // BG
    `og-thumbnail.png`,
  ].join("/");
