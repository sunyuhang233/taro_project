export interface Notice{
  index:number
  title:string
  url:string
  mobilUrl:string
  image_url:string
  image_width:number
  image_height:number
  label:string
  label_url:string
  hot_value:string
  label_desc:string
}

export interface ResponseType{
  success:boolean
  title:string
  subtitle:string
  update_time:string
  data:Notice[]
}


// export type {Notice,ResponseType}
