import { BsFillPeopleFill, BsFillBagCheckFill, BsFillFileEarmarkRuledFill, BsFillHddRackFill, BsFillPersonBadgeFill } from "react-icons/bs";
import { ROUTES } from "../../../routes";

export const menuData = [
  {
    linkName: "Clients",
    link: ROUTES.clients,
    icon: <BsFillPeopleFill />,
  },
  {
    linkName: "Orders",
    link:  ROUTES.orders,
    icon: <BsFillBagCheckFill />,
  },
  {
    linkName: "Facture",
    link: ROUTES.invoices,
    icon: <BsFillFileEarmarkRuledFill />,
  },
  {
    linkName: "Posts",
    link: ROUTES.posts,
    icon: <BsFillHddRackFill />,
  },
  {
    linkName: "Login",
    link: ROUTES.login,
    icon: <BsFillPersonBadgeFill />,
  },
];