import React from 'react'
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
export const TransactionsData = [
    {
        icon: <CiCircleChevUp />,
        description: "Spotify Subscription",
        transaction: "#12548796",
        type: "Shopping",
        card: "1234 ****",
        date: "28 Jan, 12.30 AM",
        amount: "-$2,500", 
        receipt: "Download"
    },
    {
        icon: <CiCircleChevDown />,
        description: "Freepik Sales",
        transaction: "#12548796",
        type: "Transfer",
        card: "1234 ****",
        date: "25 Jan, 10.40 PM",
        amount: "+$750",
        receipt: "Download"
    },
    {
        icon: <CiCircleChevUp />,
        description: "Mobile Services",
        transaction: "#12548796",
        type: "Service",
        card: "1234 ****",
        date: "20 Jan, 10.40 PM",
        amount: "-$150",
        receipt: "Download"
    },
    {
        icon: <CiCircleChevUp />,
        description: "Wilson",
        transaction: "#12548796",
        type: "Transfer",
        card: "1234 ****",
        date: "15 Jan, 03.29 PM",
        amount: "-$1050",
        receipt: "Download"
    },
    {
        icon: <CiCircleChevUp />,
        description: "Emilly",
        transaction: "#12548796",
        type: "Transfer",
        card: "1234 ****",
        date: "14 Jan, 10.40 PM",
        amount: "+$840",
        receipt: "Download"
    }
]