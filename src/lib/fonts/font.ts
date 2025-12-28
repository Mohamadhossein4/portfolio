import localFont from "next/font/local";

export const dana = localFont({
  src: [
    { path: "./Dana/woff2/DanaFaNum-Regular.woff2", weight: "400" },
    { path: "./Dana/woff2/DanaFaNum-Medium.woff2", weight: "500" },
    { path: "./Dana/woff2/DanaFaNum-DemiBold.woff2", weight: "600" },
  ],
});

export const morabba = localFont({
  src: [
    { path: "./Morabba/woff2/Morabba-light.woff2", weight: "300" },
    { path: "./Morabba/woff2/Morabba-Medium.woff2", weight: "500" },
    { path: "./Morabba/woff2/Morabba-Bold.woff2", weight: "700" },
  ],
});
