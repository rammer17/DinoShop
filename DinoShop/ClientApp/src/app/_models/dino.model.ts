export interface IDino {
    id: number,
    title: string,
    description: string,
    price: number,
    imgPath: string,
    soundPath: string,
    class: string
}
export interface IDinoAddRequest {
    Title: string,
    Description: string,
    Price: number,
    ImgPath: string,
    SoundPath: string,
    Class: string
}