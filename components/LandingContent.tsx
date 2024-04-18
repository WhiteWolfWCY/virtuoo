"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Anthony",
        avatar: "A",
        title: "Software Engineer",
        description: "The best AI tool I've ever used!"
    },
    {
        name: "Maria",
        avatar: "M",
        title: "CEO at Co-Hippo",
        description: "Simple, yet effective."
    },
    {
        name: "Carl Johnson",
        avatar: "CJ",
        title: "Robber",
        description: "Pretty useful for escape plans."
    },
    {
        name: "Luke",
        avatar: "L",
        title: "CEO at S&C",
        description: "Amazing app. Looking forward for more :)"
    }
]


export const LadningContent = () => {
    return <div className="px-10 pb-20">
        <h2 className="text-center text-4xl dark:text-white font-extrabold mb-10">
            Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((item) => (
                <Card key={item.description} className="dark:bg-[#1c1c1c] bg-[#e3e2e1] border-none dark:text-white">
                    <CardHeader >
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">
                                    {item.name}
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    {item.title}
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
        
    </div>
}