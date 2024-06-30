
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { CiBitcoin } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export const SidebarData = [
    {
        path: "/",
        name: "Dashboard",
        icon: <AiFillHome />,
    },
    {
        path: "/transactions",
        name: "Transactions",
        icon: <AiOutlineTransaction />,
    },
    {
        path: "/accounts",
        name: "Accounts",
        icon: <MdManageAccounts />,
    },
    {
        path: "/investments",
        name: "Investments",
        icon: <CiBitcoin />,
    },
    {
        path: "/creditCards",
        name: "Credit Cards",
        icon: <CiCreditCard1 />,
    },
    {
        path: "/loans",
        name: "Loans",
        icon: <GiReceiveMoney />,
    },
    {
        path: "/services",
        name: "Services",
        icon: <RiCustomerService2Fill />,
    },
    {
        path: "/setting",
        name: "Setting",
        icon: <IoMdSettings />,
    }
]