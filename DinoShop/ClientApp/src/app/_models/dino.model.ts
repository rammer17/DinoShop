export interface IDino {
    id: number,
    title: string,
    description: string,
    price: number,
    imgPath: string
}
export interface IDinoAddRequest {
    Title: string,
    Description: string,
    Price: number,
    ImgPath: string
}