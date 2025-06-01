// Deinf the prevevent interface

interface PrevEvent{
    name: string,
    coverimage: string,
    short: string,
    images: string[]
}

// make the prevevent items here

const Poker2020 : PrevEvent = {
    name:"CSEA 2020 Poker Tournament",coverimage:"images/gallery/poker/thumbnail.jpg", short:"poker2020",images: [
        "/images/gallery/poker/pic01.jpg",
        "/images/gallery/poker/pic02.png",
        "/images/gallery/poker/pic03.png"
    ]
}

const TradDay2022 : PrevEvent = {
    name:"Trad Day 2022",coverimage:"images/gallery/tradday2022/thumbnail.jpg", short:"tradday2022",images: [
        "/images/gallery/tradday2022/pic1.jpeg",
        "/images/gallery/tradday2022/pic2.jpeg",
        "/images/gallery/tradday2022/pic3.jpeg",
        "/images/gallery/tradday2022/pic4.jpeg",
        "/images/gallery/tradday2022/pic5.jpeg",
        "/images/gallery/tradday2022/pic6.jpeg",
        "/images/gallery/tradday2022/pic7.jpeg",
        "/images/gallery/tradday2022/pic8.jpeg",
        "/images/gallery/tradday2022/pic9.jpeg",
        "/images/gallery/tradday2022/pic10.jpeg",
        "/images/gallery/tradday2022/pic12.jpeg",
        "/images/gallery/tradday2022/pic13.jpeg",
        "/images/gallery/tradday2022/pic14.jpeg",
        "/images/gallery/tradday2022/pic16.jpeg",
        "/images/gallery/tradday2022/pic17.jpeg",
    ]
}

const IndoorGames : PrevEvent = {
    name:"Indoor Games Tournament",coverimage:"images/gallery/indoorgames/thumbnail.jpg", short:"indoorgames",images: [
        "/images/gallery/indoorgames/pic01.jpeg",
        "/images/gallery/indoorgames/pic02.jpg",
        "/images/gallery/indoorgames/pic03.jpeg",
        "/images/gallery/indoorgames/pic04.jpeg",
        "/images/gallery/indoorgames/pic05.jpeg",
    ]
}

const Csiesta2019 : PrevEvent = {
    name:"Csiesta 2019",coverimage:"images/gallery/csiesta2019/thumbnail.jpg", short:"csiesta2019",images: [
        "/images/gallery/csiesta2019/pic01.jpeg",
        "/images/gallery/csiesta2019/pic02.jpeg",
        "/images/gallery/csiesta2019/pic03.jpeg",
        "/images/gallery/csiesta2019/pic04.jpeg",
        "/images/gallery/csiesta2019/pic05.jpeg",
        "/images/gallery/csiesta2019/pic06.jpeg",
        "/images/gallery/csiesta2019/pic07.jpeg",
        "/images/gallery/csiesta2019/pic08.jpeg",
        "/images/gallery/csiesta2019/pic09.jpeg",
        "/images/gallery/csiesta2019/pic10.jpeg",
        "/images/gallery/csiesta2019/pic12.jpeg",
        "/images/gallery/csiesta2019/pic13.jpeg",
        "/images/gallery/csiesta2019/pic14.jpeg",
        "/images/gallery/csiesta2019/pic16.jpeg",
        "/images/gallery/csiesta2019/pic17.jpeg",
    ]
}

const FunWeek : PrevEvent = {
    name:"Fun Weekend",coverimage:"images/gallery/funweekend/thumbnail.jpg", short:"funweekend",images: [
        "/images/gallery/funweekend/pic01.jpg",
        "/images/gallery/funweekend/pic02.jpg",
        "/images/gallery/funweekend/pic03.jpg",
        "/images/gallery/funweekend/pic04.jpg",
    ]
}

const TradDay2021 : PrevEvent = {
    name:"Trad Day 2021",coverimage:"images/gallery/tradday2021/thumbnail.jpg", short:"tradday2021",images: [
        "/images/gallery/tradday2021/pic01.jpeg",
        "/images/gallery/tradday2021/pic02.jpeg",
        "/images/gallery/tradday2021/pic03.jpeg",
        "/images/gallery/tradday2021/pic04.jpeg",
        "/images/gallery/tradday2021/pic06.jpeg",
        "/images/gallery/tradday2021/pic07.jpeg",
        "/images/gallery/tradday2021/pic09.jpeg",
        "/images/gallery/tradday2021/pic10.jpeg",
        "/images/gallery/tradday2021/pic12.jpeg",
        "/images/gallery/tradday2021/pic13.jpeg",
        "/images/gallery/tradday2021/pic14.jpeg",
        "/images/gallery/tradday2021/pic16.jpeg",
        "/images/gallery/tradday2021/pic17.jpeg",
    ]
}

export const GalleryEvents: PrevEvent[] = [
    Poker2020,
    TradDay2022,
    IndoorGames,
    Csiesta2019,
    FunWeek,
    TradDay2021
]

