"use client"

import { usePolling } from "@/app/hooks/usePolling"

export default function ClientComp({
    data
}: {
    data: { [key: string]: string | number | boolean }
}) {
    usePolling(3000)

    return (
        <ul>
            {Object.keys(data).map((key, idx) => {
                const value = data[key]
                return (
                    <li key={idx}>{key}:
                        {typeof value === 'object'
                            ? Object.keys(value).map((k, i) => {
                                return <li className="ml-8" key={`${k}_${i}`}>{k}: {typeof value[k] === 'object' ? JSON.stringify(value[k]) : value[k]}</li>
                            })
                            : value
                        }
                    </li>
                )
            })}
        </ul>
    )
}