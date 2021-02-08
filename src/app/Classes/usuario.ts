export interface usuario{
    Id: number; 
    name: string;
    username: string;
    email: string;
    address: add; 
    company: com; 
}

export interface add{
    street:string; 
    suit: string; 
    city: string; 
    zipcode: string; 
    geo: g; 
}

export interface g{
    lat: number; 
    lng: number; 
}

export interface com{
    name: string; 
    catchPhrase: string; 
    bs: string; 
}