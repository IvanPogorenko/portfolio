export interface IUser {
  id: number,
  name: string,
  surname: string,
  phone: string,
  password: string,
  address: IAddress,
}

export interface IAddress{
  street: string,
  building: string,
  apartment: string
}

export function toUser(data: any): IUser{
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    phone: data.phone,
    password: data.password,
    address: toAddress(data.address),
  }
}

export function toAddress(data: any): IAddress{
  return {
    street: data.street || '',
    building: data.building || '' ,
    apartment: data.apartment || ''
  }
}
