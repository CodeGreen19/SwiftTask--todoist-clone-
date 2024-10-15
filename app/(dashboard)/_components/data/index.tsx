import { CiHashtag, CiSearch, CiStar } from "react-icons/ci";
import { HiOutlineInbox } from "react-icons/hi2";
import { GoDiscussionOutdated, GoGear, GoSignOut } from "react-icons/go";
import {
  PiFilmSlateThin,
  PiKeyboardLight,
  PiLightbulbThin,
  PiPaperPlaneRight,
} from "react-icons/pi";
import { RiColorFilterLine, RiGuideLine } from "react-icons/ri";
import {
  MdKeyboardArrowRight,
  MdLabelImportant,
  MdLabelImportantOutline,
  MdManageAccounts,
} from "react-icons/md";
import { IoGiftOutline, IoHelp, IoSettingsOutline } from "react-icons/io5";
import { BsActivity, BsClipboardData } from "react-icons/bs";
import { LiaSyncAltSolid } from "react-icons/lia";
import { VscInsert } from "react-icons/vsc";
import { IconType } from "react-icons/lib";
import { SettingArrType } from "./types";
import { IoIosColorPalette } from "react-icons/io";

export const dashboardNavArr = [
  { icon: CiSearch, tag: "Search", link: "/app/search" },
  { icon: HiOutlineInbox, tag: "Inbox", link: "/app/inbox" },
  { icon: GoDiscussionOutdated, tag: "Today", link: "/app/today" },
  { icon: PiFilmSlateThin, tag: "Upcoming", link: "/app/upcoming" },
  {
    icon: RiColorFilterLine,
    tag: "Filters & Labels",
    link: "/app/filters-labels",
  },
];

type PriorityType = {
  icon: IconType;
  text: string;
  className: string;
  value: "P1" | "P2" | "P3" | "P4";
};
export const proirityArr: PriorityType[] = [
  {
    icon: MdLabelImportantOutline,
    text: "priority 4",
    className: "",
    value: "P4",
  },
  {
    icon: MdLabelImportant,
    text: "priority 3",
    className: "text-sky-500",
    value: "P3",
  },
  {
    icon: MdLabelImportant,
    text: "priority 2",
    className: "text-amber-500",
    value: "P2",
  },
  {
    icon: MdLabelImportant,
    text: "priority 1",
    className: "text-rose-500",
    value: "P1",
  },
];

// user menu items
export const userMenuItems = [
  {
    sec: [
      {
        icon: IoSettingsOutline,
        text: "Settings",
        shortCut: "O then S",
      },
    ],
  },
  {
    sec: [
      {
        icon: BsActivity,
        text: "Active log",
        shortCut: "G then A",
      },
      {
        icon: BsClipboardData,
        text: "Resources",
        extra: {
          icon: MdKeyboardArrowRight,
          items: [
            { icon: IoHelp, text: "Help center", visible: false },
            { icon: PiLightbulbThin, text: "Inspiration", visible: false },
            { icon: VscInsert, text: "Intregation", visible: false },
            { icon: PiKeyboardLight, text: "Keyboard Shortcut", visible: true },
            {
              icon: RiGuideLine,
              text: "Getting Started Guide",
              visible: false,
            },
          ],
        },
      },
      {
        icon: IoGiftOutline,
        text: "Whats new",
      },
    ],
  },
  {
    sec: [
      {
        icon: CiStar,
        text: "Upgrade to Pro",
      },
    ],
  },
  {
    sec: [
      {
        icon: LiaSyncAltSolid,
        text: "Sync",
      },
    ],
  },
  {
    sec: [
      {
        icon: GoSignOut,
        text: "Logout",
      },
    ],
  },
];

export const projectHashColor = [
  { name: "Gray", icon: CiHashtag, colorCode: "text-gray-500" },
  { name: "Red", icon: CiHashtag, colorCode: "text-red-500" },
  { name: "Blue", icon: CiHashtag, colorCode: "text-blue-500" },
  { name: "Green", icon: CiHashtag, colorCode: "text-green-500" },
  { name: "Yellow", icon: CiHashtag, colorCode: "text-yellow-500" },
  { name: "Purple", icon: CiHashtag, colorCode: "text-purple-500" },
  { name: "Pink", icon: CiHashtag, colorCode: "text-pink-500" },
  { name: "Indigo", icon: CiHashtag, colorCode: "text-indigo-500" },
  { name: "Orange", icon: CiHashtag, colorCode: "text-orange-500" },
  { name: "Teal", icon: CiHashtag, colorCode: "text-teal-500" },
];

export const SHOW_COMPLETED_TASK = "showCompletedTask";

// settings
export const SettingsOptions: SettingArrType[] = [
  {
    name: "Account",
    icon: MdManageAccounts,
  },
  {
    name: "General",
    icon: GoGear,
  },
  {
    name: "Subscription",
    icon: PiPaperPlaneRight,
  },
  {
    name: "Theme",
    icon: IoIosColorPalette,
  },
];
