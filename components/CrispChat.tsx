"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("7777d937-fe69-4787-9280-53c7dbdcae05")
    }, [])

    return null
}