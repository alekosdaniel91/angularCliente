export interface DataForm {
    user: {
        Name: string;
        LastName?: string;
        IsMilitar?: boolean;
        TimeCreate?: string;
        isTemporal?: boolean;
        username: string;
        email: string;
        password: string
    },

    userDoc: {
        namedoc: string;
        document: string;
        place: string;
        date: string;
    },

    userInfo: {
        Address: string;
        Country: string;
        City: string;
        CountryCode: string;
        Phone: string;
        CellPhone: string;
        EmergencyName: string;
        EmergencyPhone: string;
    }


}

export interface UserData {
    Name: string;
    LastName?: string;
    IsMilitar?: boolean;
    TimeCreate?: string;
    isTemporal?: boolean;
    username: string;
    email: string;
    password: string
}
