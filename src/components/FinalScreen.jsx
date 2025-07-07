"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function FinalScreen({ ...motionProps }) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    const finalMessage =
        "Believe karo, chahe kitne bhi milein door ho, ap kabhi mere khayalon se door nahi hoti. Har wo lamha jo ap ke bagair guzarta hai, adhoora lagta hai. Mujhe ap ki muskurahat, ap ki hansi, ap ki awaaz � sab kuch bohot yaad aata hai. Ap hi wo sukoon ho jo mujhe is shor bhari duniya mein milta hai. Faasla chahe jitna bhi ho, ap hamesha mere dil mein rehti ho. Main besabri se us din ka intezar kar raha hoon jab phir se apko apne kareeb mehsoos kar sakun. Tab tak sirf itna samajh lo� mujhe ap ki kami lafzon se zyada mehsoos hoti hai. "

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < finalMessage.length) {
                setDisplayText((prev) => prev + finalMessage[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            } else {
                setIsTyping(false)
            }
        }, 30)
        return () => clearTimeout(timer)
    }, [currentIndex, finalMessage])

    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center text-center px-6 relative">

            <div className="max-w-4xl z-10">
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div><img src="/gifs/us.gif" alt="us gif" className="w-48" /></div>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Forever Yours
                </motion.h2>

                <motion.div
                    className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
                        {displayText}
                        {isTyping && (
                            <motion.span
                                className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                        )}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
