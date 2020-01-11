export interface Settings {
  profiles: Profile[]
}

export interface Profile {
  name: string,
  accountType: string,
  fields: Field[];  
}

export interface Field {
  header: string,
  default: string,
  fieldName: string
}