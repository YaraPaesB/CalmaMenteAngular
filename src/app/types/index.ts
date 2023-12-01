type Information = {
    title:string,
    description:string
}

export type DisorderResponse = Information & {
    articles: Information[]
}