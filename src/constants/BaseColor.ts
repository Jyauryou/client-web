// * Material Design Color
// * https://material.io/design/color/the-color-system.html#tools-for-picking-colors

import { createVariablesInStyleSheets } from "utils/create-variables-in-style-sheets";

export const BaseColor = createVariablesInStyleSheets({
  TRANSPARENT: "hsl(0 0% 0% / 0%)",

  WHITE: "hsl(0 0% 100%)",
  BLACK: "hsl(0 0% 0%)",

  RED_0: "hsl(351 100% 96.1%)",
  RED_1: "hsl(354 100% 90.2%)",
  RED_2: "hsl(0 72.6% 77.1%)",
  RED_3: "hsl(0 68.7% 67.5%)",
  RED_4: "hsl(1.1 83.2% 62.5%)",
  RED_5: "hsl(4.1 89.6% 58.4%)",
  RED_6: "hsl(1.4 77.2% 55.3%)",
  RED_7: "hsl(0 65.1% 50.6%)",
  RED_8: "hsl(0 66.4% 46.7%)",
  RED_9: "hsl(0 73.5% 41.4%)",
  RED_A1: "hsl(4.7 100% 75.1%)",
  RED_A2: "hsl(0 100% 66.1%)",
  RED_A4: "hsl(348.4 100% 54.5%)",
  RED_A7: "hsl(0 100% 41.8%)",

  PINK_0: "hsl(340 80% 94.1%)",
  PINK_1: "hsl(339.3 81.3% 85.3%)",
  PINK_2: "hsl(339.8 82.1% 75.9%)",
  PINK_3: "hsl(339.7 82.6% 66.3%)",
  PINK_4: "hsl(339.8 81.9% 58.8%)",
  PINK_5: "hsl(339.6 82.2% 51.6%)",
  PINK_6: "hsl(338.1 77.8% 47.6%)",
  PINK_7: "hsl(336.4 78% 42.7%)",
  PINK_8: "hsl(333.7 79.3% 37.8%)",
  PINK_9: "hsl(328 81.3% 29.4%)",
  PINK_A1: "hsl(339.7 100% 75.1%)",
  PINK_A2: "hsl(339.6 100% 62.5%)",
  PINK_A4: "hsl(338.7 100% 48%)",
  PINK_A7: "hsl(333 84.1% 42%)",

  PURPLE_0: "hsl(292.5 44.4% 92.9%)",
  PURPLE_1: "hsl(291.2 46.1% 82.5%)",
  PURPLE_2: "hsl(291.3 46.9% 71.2%)",
  PURPLE_3: "hsl(291.3 46.6% 59.6%)",
  PURPLE_4: "hsl(291.3 46.6% 50.8%)",
  PURPLE_5: "hsl(291.2 63.7% 42.2%)",
  PURPLE_6: "hsl(287.5 65% 40.4%)",
  PURPLE_7: "hsl(282.1 67.9% 37.8%)",
  PURPLE_8: "hsl(277.3 70.2% 35.5%)",
  PURPLE_9: "hsl(267 75% 31.4%)",
  PURPLE_A1: "hsl(291.3 95.4% 74.5%)",
  PURPLE_A2: "hsl(291.3 95.9% 61.8%)",
  PURPLE_A4: "hsl(291.3 100% 48.8%)",
  PURPLE_A7: "hsl(280 100% 50%)",

  DEEP_PURPLE_0: "hsl(264 45.5% 93.5%)",
  DEEP_PURPLE_1: "hsl(261.1 45.7% 84.1%)",
  DEEP_PURPLE_2: "hsl(261.3 46.3% 73.7%)",
  DEEP_PURPLE_3: "hsl(261.8 46.8% 63.1%)",
  DEEP_PURPLE_4: "hsl(261.9 46.7% 55.1%)",
  DEEP_PURPLE_5: "hsl(261.6 51.9% 47.3%)",
  DEEP_PURPLE_6: "hsl(259.8 53.9% 45.1%)",
  DEEP_PURPLE_7: "hsl(257.6 57.7% 41.8%)",
  DEEP_PURPLE_8: "hsl(254.9 60.8% 39%)",
  DEEP_PURPLE_9: "hsl(251.1 68.8% 33.9%)",
  DEEP_PURPLE_A1: "hsl(238.5 100% 15.9%)",
  DEEP_PURPLE_A2: "hsl(255.8 100% 65.1%)",
  DEEP_PURPLE_A4: "hsl(258.8 100% 56.1%)",
  DEEP_PURPLE_A7: "hsl(265.1 100% 45.9%)",

  INDIGO_0: "hsl(231.4 43.8% 93.7%)",
  INDIGO_1: "hsl(231.7 45% 84.3%)",
  INDIGO_2: "hsl(230.8 44.4% 73.9%)",
  INDIGO_3: "hsl(230.5 44.1% 63.5%)",
  INDIGO_4: "hsl(231 44.2% 55.7%)",
  INDIGO_5: "hsl(230.8 48.4% 47.8%)",
  INDIGO_6: "hsl(231.6 50% 44.7%)",
  INDIGO_7: "hsl(231.9 53.6% 40.6%)",
  INDIGO_8: "hsl(232.7 57.2% 36.7%)",
  INDIGO_9: "hsl(234.6 65.8% 29.8%)",
  INDIGO_A1: "hsl(230.6 100% 77.5%)",
  INDIGO_A2: "hsl(230.9 98.8% 66.1%)",
  INDIGO_A4: "hsl(231 99% 61.8%)",
  INDIGO_A7: "hsl(231 99% 59.2%)",

  BLUE_0: "hsl(205.4 86.7% 94.1%)",
  BLUE_1: "hsl(207.2 88.9% 85.9%)",
  BLUE_2: "hsl(206.9 89.7% 77.1%)",
  BLUE_3: "hsl(206.7 89% 67.8%)",
  BLUE_4: "hsl(206.8 89.9% 61%)",
  BLUE_5: "hsl(206.6 89.7% 54.1%)",
  BLUE_6: "hsl(208 79.3% 50.8%)",
  BLUE_7: "hsl(209.8 78.7% 46.1%)",
  BLUE_8: "hsl(211.9 80.3% 41.8%)",
  BLUE_9: "hsl(216.5 85.1% 34.1%)",
  BLUE_A1: "hsl(217.4 100% 75.5%)",
  BLUE_A2: "hsl(217.5 100% 63.3%)",
  BLUE_A4: "hsl(217.6 100% 58%)",
  BLUE_A7: "hsl(224 100% 58%)",

  LIGHT_BLUE_0: "hsl(198.6 93.5% 93.9%)",
  LIGHT_BLUE_1: "hsl(198.9 92.4% 84.5%)",
  LIGHT_BLUE_2: "hsl(198.8 92.4% 74.3%)",
  LIGHT_BLUE_3: "hsl(198.6 91.3% 63.9%)",
  LIGHT_BLUE_4: "hsl(198.7 91.9% 56.3%)",
  LIGHT_BLUE_5: "hsl(198.7 97.6% 48.4%)",
  LIGHT_BLUE_6: "hsl(199.6 97.4% 45.5%)",
  LIGHT_BLUE_7: "hsl(201.2 98.1% 41.4%)",
  LIGHT_BLUE_8: "hsl(202.5 97.9% 37.5%)",
  LIGHT_BLUE_9: "hsl(206.5 98.7% 30.6%)",
  LIGHT_BLUE_A1: "hsl(198.4 100% 75.1%)",
  LIGHT_BLUE_A2: "hsl(198.5 100% 62.5%)",
  LIGHT_BLUE_A4: "hsl(198.6 100% 50%)",
  LIGHT_BLUE_A7: "hsl(202.8 100% 45.9%)",

  CYAN_0: "hsl(186.9 72.2% 92.9%)",
  CYAN_1: "hsl(186.6 71.1% 82.4%)",
  CYAN_2: "hsl(186.8 71.6% 71%)",
  CYAN_3: "hsl(186.9 71.2% 59.2%)",
  CYAN_4: "hsl(186.7 70.9% 50.2%)",
  CYAN_5: "hsl(186.8 100% 41.6%)",
  CYAN_6: "hsl(186.5 100% 37.8%)",
  CYAN_7: "hsl(185.7 100% 32.7%)",
  CYAN_8: "hsl(185 100% 28%)",
  CYAN_9: "hsl(182.4 100% 19.6%)",
  CYAN_A1: "hsl(180 100% 75.9%)",
  CYAN_A2: "hsl(180 100% 54.7%)",
  CYAN_A4: "hsl(186.1 100% 50%)",
  CYAN_A7: "hsl(187.9 100% 41.6%)",

  TEAL_0: "hsl(176.7 40.9% 91.4%)",
  TEAL_1: "hsl(174.7 41.3% 78.6%)",
  TEAL_2: "hsl(174.4 41.9% 64.9%)",
  TEAL_3: "hsl(174.3 41.8% 50.8%)",
  TEAL_4: "hsl(174.4 62.7% 40%)",
  TEAL_5: "hsl(174.4 100% 29.4%)",
  TEAL_6: "hsl(173.9 100% 26.9%)",
  TEAL_7: "hsl(173.1 100% 23.7%)",
  TEAL_8: "hsl(172.6 100% 20.6%)",
  TEAL_9: "hsl(169.9 100% 15.1%)",
  TEAL_A1: "hsl(166.4 100% 82.7%)",
  TEAL_A2: "hsl(165.7 100% 69.6%)",
  TEAL_A4: "hsl(165 82.3% 51.4%)",
  TEAL_A7: "hsl(171.8 100% 37.5%)",

  GREEN_0: "hsl(124.6 39.4% 93.5%)",
  GREEN_1: "hsl(122 37.5% 84.3%)",
  GREEN_2: "hsl(122.4 37.4% 74.3%)",
  GREEN_3: "hsl(122.6 38.5% 64.3%)",
  GREEN_4: "hsl(122.8 38.5% 56.7%)",
  GREEN_5: "hsl(122.4 39.4% 49.2%)",
  GREEN_6: "hsl(122.6 41% 44.5%)",
  GREEN_7: "hsl(122.8 43.4% 38.8%)",
  GREEN_8: "hsl(123 46.2% 33.5%)",
  GREEN_9: "hsl(124.5 55.4% 23.7%)",
  GREEN_A1: "hsl(136.7 77.2% 84.5%)",
  GREEN_A2: "hsl(150.7 81.8% 67.6%)",
  GREEN_A4: "hsl(150.8 100% 45.1%)",
  GREEN_A7: "hsl(144.9 100% 39.2%)",

  LIGHT_GREEN_0: "hsl(88 51.7% 94.3%)",
  LIGHT_GREEN_1: "hsl(87.6 50.7% 85.7%)",
  LIGHT_GREEN_2: "hsl(88 50% 76.5%)",
  LIGHT_GREEN_3: "hsl(87.9 50% 67.1%)",
  LIGHT_GREEN_4: "hsl(88 50.2% 59.8%)",
  LIGHT_GREEN_5: "hsl(87.8 50.2% 52.7%)",
  LIGHT_GREEN_6: "hsl(89.2 46.1% 48%)",
  LIGHT_GREEN_7: "hsl(92 47.9% 42.2%)",
  LIGHT_GREEN_8: "hsl(95.2 49.5% 36.5%)",
  LIGHT_GREEN_9: "hsl(103.2 55.6% 26.5%)",
  LIGHT_GREEN_A1: "hsl(87.6 100% 78.2%)",
  LIGHT_GREEN_A2: "hsl(87.8 100% 67.5%)",
  LIGHT_GREEN_A4: "hsl(92.6 100% 50.6%)",
  LIGHT_GREEN_A7: "hsl(96.7 81.1% 47.8%)",

  LIME_0: "hsl(66 71.4% 94.5%)",
  LIME_1: "hsl(64.9 69% 86.1%)",
  LIME_2: "hsl(65.9 70.7% 77.3%)",
  LIME_3: "hsl(65.8 70.4% 68.2%)",
  LIME_4: "hsl(65.7 69.7% 61.2%)",
  LIME_5: "hsl(65.5 70% 54.3%)",
  LIME_6: "hsl(64 59.7% 49.6%)",
  LIME_7: "hsl(62.2 61.4% 43.7%)",
  LIME_8: "hsl(59.5 62.9% 38%)",
  LIME_9: "hsl(53.8 69.9% 30%)",
  LIME_A1: "hsl(65.2 100% 75.3%)",
  LIME_A2: "hsl(65.4 100% 62.7%)",
  LIME_A4: "hsl(73.4 100% 50%)",
  LIME_A7: "hsl(75.4 100% 45.9%)",

  YELLOW_0: "hsl(55 100% 95.3%)",
  YELLOW_1: "hsl(53.9 100% 88.4%)",
  YELLOW_2: "hsl(53.9 100% 80.8%)",
  YELLOW_3: "hsl(53.9 100% 73.1%)",
  YELLOW_4: "hsl(53.9 100% 67.3%)",
  YELLOW_5: "hsl(53.9 100% 61.6%)",
  YELLOW_6: "hsl(48.9 98% 60%)",
  YELLOW_7: "hsl(42.8 96.3% 58%)",
  YELLOW_8: "hsl(37.1 94.6% 56.1%)",
  YELLOW_9: "hsl(28.1 91.7% 52.5%)",
  YELLOW_A1: "hsl(60 100% 77.6%)",
  YELLOW_A2: "hsl(60 100% 50%)",
  YELLOW_A4: "hsl(55.1 100% 50%)",
  YELLOW_A7: "hsl(50.4 100% 50%)",

  AMBER_0: "hsl(46 100% 94.1%)",
  AMBER_1: "hsl(45 100% 85.1%)",
  AMBER_2: "hsl(45.1 100% 75.5%)",
  AMBER_3: "hsl(45.7 100% 65.5%)",
  AMBER_4: "hsl(45.2 100% 57.8%)",
  AMBER_5: "hsl(45 100% 51.4%)",
  AMBER_6: "hsl(42.1 100% 50%)",
  AMBER_7: "hsl(37.6 100% 50%)",
  AMBER_8: "hsl(33.6 100% 50%)",
  AMBER_9: "hsl(26.1 100% 50%)",
  AMBER_A1: "hsl(47.8 100% 74.9%)",
  AMBER_A2: "hsl(47.4 100% 62.5%)",
  AMBER_A4: "hsl(46.1 100% 50%)",
  AMBER_A7: "hsl(40.2 100% 50%)",

  ORANGE_0: "hsl(36.8 100% 93.9%)",
  ORANGE_1: "hsl(35.8 100% 84.9%)",
  ORANGE_2: "hsl(35.9 100% 75.1%)",
  ORANGE_3: "hsl(35.7 100% 65.1%)",
  ORANGE_4: "hsl(35.7 100% 57.5%)",
  ORANGE_5: "hsl(35.8 100% 50%)",
  ORANGE_6: "hsl(33.5 100% 49.2%)",
  ORANGE_7: "hsl(30.4 100% 48%)",
  ORANGE_8: "hsl(27.1 100% 46.9%)",
  ORANGE_9: "hsl(21.1 100% 45.1%)",
  ORANGE_A1: "hsl(38.3 100% 75.1%)",
  ORANGE_A2: "hsl(33.6 100% 62.5%)",
  ORANGE_A4: "hsl(34.1 100% 50%)",
  ORANGE_A7: "hsl(25.6 100% 50%)",

  DEEP_ORANGE_0: "hsl(6 71.4% 94.5%)",
  DEEP_ORANGE_1: "hsl(14.3 100% 86.9%)",
  DEEP_ORANGE_2: "hsl(14.2 100% 78.4%)",
  DEEP_ORANGE_3: "hsl(14.4 100% 69.8%)",
  DEEP_ORANGE_4: "hsl(14.4 100% 63.1%)",
  DEEP_ORANGE_5: "hsl(14.4 100% 56.7%)",
  DEEP_ORANGE_6: "hsl(14.3 90.7% 53.7%)",
  DEEP_ORANGE_7: "hsl(14.3 80.4% 50%)",
  DEEP_ORANGE_8: "hsl(14.2 82.3% 46.5%)",
  DEEP_ORANGE_9: "hsl(14.1 88.2% 39.8%)",
  DEEP_ORANGE_A1: "hsl(14.2 100% 75.1%)",
  DEEP_ORANGE_A2: "hsl(14.5 100% 62.5%)",
  DEEP_ORANGE_A4: "hsl(14.4 100% 50%)",
  DEEP_ORANGE_A7: "hsl(11.9 100% 43.3%)",

  BROWN_0: "hsl(20 15.8% 92.5%)",
  BROWN_1: "hsl(16 15.8% 81.4%)",
  BROWN_2: "hsl(15 15.2% 69%)",
  BROWN_3: "hsl(15.9 15.3% 56.5%)",
  BROWN_4: "hsl(15.7 17.5% 47.1%)",
  BROWN_5: "hsl(15.9 25.4% 37.8%)",
  BROWN_6: "hsl(15 25.3% 34.1%)",
  BROWN_7: "hsl(14.2 25.7% 29%)",
  BROWN_8: "hsl(11.2 25.8% 24.3%)",
  BROWN_9: "hsl(8.9 27.8% 19%)",

  GRAY_0: "hsl(0 0% 98%)",
  GRAY_1: "hsl(0 0% 96.1%)",
  GRAY_2: "hsl(0 0% 93.3%)",
  GRAY_3: "hsl(0 0% 87.8%)",
  GRAY_4: "hsl(0 0% 74.1%)",
  GRAY_5: "hsl(0 0% 62%)",
  GRAY_6: "hsl(0 0% 45.9%)",
  GRAY_7: "hsl(0 0% 38%)",
  GRAY_8: "hsl(0 0% 25.9%)",
  GRAY_9: "hsl(0 0% 12.9%)",

  BLUE_GRAY_0: "hsl(204 15.2% 93.5%)",
  BLUE_GRAY_1: "hsl(198.5 15.7% 83.7%)",
  BLUE_GRAY_2: "hsl(200 15.3% 73.1%)",
  BLUE_GRAY_3: "hsl(200 15.6% 62.4%)",
  BLUE_GRAY_4: "hsl(200 15.4% 54.1%)",
  BLUE_GRAY_5: "hsl(199.5 18.3% 46.1%)",
  BLUE_GRAY_6: "hsl(198.9 18.4% 40.4%)",
  BLUE_GRAY_7: "hsl(199.4 18.3% 33.1%)",
  BLUE_GRAY_8: "hsl(200 17.9% 26.3%)",
  BLUE_GRAY_9: "hsl(200 19.1% 18.4%)"
});