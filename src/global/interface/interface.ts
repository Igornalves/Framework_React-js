import { ImgHTMLAttributes } from "react";

export default interface typeAvatar extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean
}

export interface typePosts {
    id: number
    avartaUrl: string 

    contentP1: string
    contentP2: string
    contentText: string

    contentLink: string

    publishedAt: string
    publishedATitlet: string
}

