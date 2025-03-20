export interface IMsg {
  head: string,
  text: string
}

export function toMsg(data: any): IMsg {
  return {
    head: data.head,
    text: data.text
  }
}
