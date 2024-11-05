import React, { useState, useEffect } from "react";
import './home.css'
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen/Loading";
import BaseHomeComp from "./base";


const HomePage = () => {
    return (
        <>
            <BaseHomeComp />
        </>

    )
}

export default HomePage
